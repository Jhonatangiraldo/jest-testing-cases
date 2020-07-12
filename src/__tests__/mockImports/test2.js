import main from '../../files/main';
import defaultNum, { num2 } from '../../files/otherUtil';

// jest.mock('../../files/otherUtil');
jest.mock('../../files/otherUtil', () => ({
  num2: jest.fn().mockImplementation(() => 10),
  // same as
  num2: jest.fn(() => 10),
  // to use default
  __esModule: true,
  // this,
  default: jest.fn(() => 42),
  // instead of this
  //defaultNum: jest.fn(() => 4),
}));

describe('try1', () => {
  it('option1', () => {
    num2.mockClear();
    expect(num2()).toBe(10);
    expect(num2).toHaveBeenCalledTimes(1);
  });

  it('option2', () => {
    num2.mockClear();
    num2.mockReturnValueOnce(1);

    expect(num2()).toBe(1);
    expect(num2).toHaveBeenCalledTimes(1);
  });

  it('option3', () => {
    defaultNum.mockClear();
    defaultNum.mockReturnValueOnce(4);

    expect(defaultNum()).toBe(4);
    expect(defaultNum).toHaveBeenCalledTimes(1);
  });

  it('option4', () => {
    defaultNum.mockClear();

    expect(defaultNum()).toBe(42);
    expect(defaultNum).toHaveBeenCalledTimes(1);
  });
});
