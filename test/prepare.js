function noop() {
  return null;
}

// Prevent scss from loading on tests
require.extensions['.scss'] = noop;
require.extensions['.sass'] = noop;
require.extensions['.css'] = noop;

// Set global with __CLIENT__ for tests
global.__CLIENT__ = true;
