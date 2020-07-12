import main from '../../files/main';
import defaultNum, { num2 } from '../../files/otherUtil';

jest.mock('../../files/otherUtil');

describe('try1', () => {
  it('1', () => {
    expect(defaultNum()).toBe(undefined);
    expect(num2()).toBe(undefined);
  });

  it('2', () => {
    defaultNum.mockReturnValueOnce(1);
    expect(defaultNum()).toBe(1);

    num2.mockReturnValueOnce(2);
    expect(num2()).toBe(2);
  });
})