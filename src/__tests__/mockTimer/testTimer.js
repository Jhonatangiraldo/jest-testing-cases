import React from 'react';
import Timer from '../../files/Timer';
import {render, act} from '@testing-library/react';

describe.only('timer', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  it('should remove timer', () => {
    jest.useFakeTimers();
    const { unmount } = render(<Timer time={1000000} />);
    unmount();
    // act(() => jest.clearAllTimers());
    // act(() => jest.runOnlyPendingTimers());
    act(() => jest.runAllTimers());
    
    expect(console.error).not.toHaveBeenCalled();
  });
});
