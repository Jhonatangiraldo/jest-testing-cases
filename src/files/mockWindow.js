const navigateToNextLocation = () => {
  window.location.replace('any.web');
};

test('window nested variables mocking', () => {
  // setup
  const mockedReplace = jest.fn();
  // without making a copy you will have a circular dependency problem during mocking
  const originalWindow = { ...window };

  const windowSpy = jest.spyOn(global, 'window', 'get');

  windowSpy.mockImplementation(() => ({
    ...originalWindow,
    location: {
      ...originalWindow.location,
      replace: mockedReplace,
    },
  }));

  // tests
  navigateToNextLocation();

  // assertions
  expect(mockedReplace).toBeCalledWith('any.web');

  // cleanup
  windowSpy.mockRestore();
});
