import Example from '../../files/class1';

jest.mock('../../files/class1', () => jest.fn().mockImplementation(() => ({
  method1: jest.fn().mockReturnValueOnce(100)
})));


describe('try1', () => {
  it('option1', () => {
    const a = new Example();
    
    expect(a.method1()).toBe(100);
    expect(a.method1).toHaveBeenCalledTimes(1);
    
  });
});
