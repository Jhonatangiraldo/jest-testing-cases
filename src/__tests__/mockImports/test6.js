import Example from '../../files/class1';

const mockMethod1 = jest.fn().mockReturnValueOnce(100);
jest.mock('../../files/class1', () => jest.fn().mockImplementation(() => ({
  method1: mockMethod1
})));


describe('try1', () => {
  it('option1', () => {
    const a = new Example();
    
    expect(a.method1('randomParam')).toBe(100);
    expect(a.method1).toHaveBeenCalledTimes(1);
    expect(Example.mock.calls.length).toBe(1);
    expect(mockMethod1.mock.calls.length).toBe(1);
    expect(mockMethod1.mock.calls[0][0]).toBe('randomParam');
    
  });
});
