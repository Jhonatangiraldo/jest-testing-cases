/**
  f.mockClear = () => {
        this._mockState.delete(f);
        return f;
      };

      f.mockReset = () => {
        f.mockClear();
        this._mockConfigRegistry.delete(f);
        return f;
      };

      f.mockRestore = () => {
        f.mockReset();
        return restore ? restore() : undefined;
      };
 */

describe('jest mock reset/restore api', () => {
  describe('when calling mockClear()', () => {
    test('on a spy with custom implementation, it replaces the implementation to a nenw undefined-returning mock fn', () => {
      const module = { api: () => 'actual' };
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked');

      expect(module.api()).toStrictEqual('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);

      module.api.mockClear();

      expect(module.api()).toStrictEqual('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);
    });

    test('on a non-spy with custom implementation, it replaces the implementation to a new undefined-returning mock fn', () => {
      const api = jest.fn(() => 'non-spy mocked');

      expect(api()).toStrictEqual('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);

      api.mockReset();

      expect(api()).toStrictEqual(undefined);
      expect(api).toHaveBeenCalledTimes(1);
    });
  });

  describe('when calling mockReset()', () => {
    test('on a spy with custom implementation, it replaces the implementation to a nenw undefined-returning mock fn', () => {
      const module = { api: () => 'actual' };
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked');

      expect(module.api()).toStrictEqual('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);

      module.api.mockReset();

      expect(module.api()).toStrictEqual(undefined);
      expect(module.api).toHaveBeenCalledTimes(1);
    });

    test('on a non-spy with custom implementation, it replaces the implementation to a new undefined-returning mock fn', () => {
      const api = jest.fn(() => 'non-spy mocked');

      expect(api()).toStrictEqual('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);

      api.mockReset();

      expect(api()).toStrictEqual(undefined);
      expect(api).toHaveBeenCalledTimes(1);
    });
  });

  describe('when calling mockRestore()', () => {
    test('on a spy with custom implementation, it resets the implementation to a new undefined-returning mock fn', () => {
      const module = { api: () => 'actual' };
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked');

      expect(module.api()).toStrictEqual('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);

      module.api.mockRestore();

      expect(module.api()).toStrictEqual('actual');
      expect(module.api).not.toHaveProperty('mock');
    });

    test('on a non-spy mock with custom implementation, it resets the implementation to a new undefined-returning mock fn', () => {
      const api = jest.fn(() => 'non-spy mocked');

      expect(api()).toStrictEqual('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);

      api.mockRestore();

      expect(api()).toStrictEqual(undefined);
      expect(api).toHaveBeenCalledTimes(1);
    });
  });
});
