beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  console.error.mockRestore();
  console.error('error');
});

describe('should call and assert console.error', () => {
  it('should assert console.error has been called 3 times', () => {
    console.error(1);
    console.error(2);
    console.error(3);

    expect(console.error).toHaveBeenCalledTimes(3);
    expect(console.error.mock.calls[0]).toEqual([1]);
    expect(console.error.mock.calls[1]).toEqual([2]);
    expect(console.error.mock.calls[2]).toEqual([3]);
    expect(console.error.mock.calls).toEqual([[1], [2], [3]]);
  });
});