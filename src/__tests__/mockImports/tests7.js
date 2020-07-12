import Example from '../../files/class1';

jest.mock('../../files/class1', () => jest.fn().mockImplementation(() => ({
  method1: jest.fn().mockReturnValueOnce(100)
})));


describe('try1', () => {
  it('option1', () => {
    const exampleInstance = new Example();
    // this won't work if the instantiation is inside the testing class
    const spy = jest.spyOn(exampleInstance, 'method1');
    // this would fail
    //const spy = jest.spyOn(Example, 'method1');
    
    expect(exampleInstance.method1('randomParam')).toBe(100);
    expect(exampleInstance.method1).toHaveBeenCalledTimes(1);
    expect(Example.mock.calls.length).toBe(1);
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0]).toBe('randomParam');
    
  });
});
