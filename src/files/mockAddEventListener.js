const map = {};
window.addEventListener = jest.fun().mockImplementation((event, cb) => {
  map[event] = cb;
});

// render component

map.event(...args);
