import Example from '../../files/class1';

// jest.mock('../../files/otherUtil');
jest.mock('../../files/class1');

describe('try1', () => {
  it('option1', () => {
    const a = new Example();
    a.method1.mockImplementation(() => 100);
    
    expect(a.method1()).toBe(100);
    expect(a.method1).toHaveBeenCalledTimes(1);
    
  });
});
