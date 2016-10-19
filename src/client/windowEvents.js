import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

const body = document.body;

const listeners = {
  scroll: {
    throttled: throttle(() => {
      const event = new CustomEvent('scroll.throttled', {
        detail: {
          scroll: body.scrollTop
        }
      });

      window.dispatchEvent(event);
    }, 100),

    debounced: debounce(() => {
      const event = new CustomEvent('scroll.debounced', {
        detail: {
          scroll: body.scrollTop
        }
      });

      window.dispatchEvent(event);
    }, 100)
  },
  resize: {
    throttled: throttle(() => {
      const event = new CustomEvent('resize.throttled', {
        detail: {
          dimensions: getDimensions()
        }
      });

      window.dispatchEvent(event);
    }, 50),

    throttledLazy: throttle(() => {
      const event = new CustomEvent('resize.throttled.lazy', {
        detail: {
          dimensions: getDimensions()
        }
      });

      window.dispatchEvent(event);
    }, 250),

    debounced: debounce(() => {
      const event = new CustomEvent('resize.debounced', {
        detail: {
          dimensions: getDimensions()
        }
      });

      window.dispatchEvent(event);
    }, 100),

    debouncedLazy: debounce(() => {
      const event = new CustomEvent('resize.debounced.lazy', {
        detail: {
          dimensions: getDimensions()
        }
      });

      window.dispatchEvent(event);
    }, 300)
  }
};

// this calculates the viewport dimensions
function getDimensions() {
  const rect = body.getBoundingClientRect();

  return {
    height: rect.bottom - rect.top,
    width: rect.right - rect.left
  };
}

// this attaches a listener to `window.onscroll`
window.addEventListener('scroll', () => {
  Object.keys(listeners.scroll).forEach((key) => {
    listeners.scroll[key]();
  });
});

// this attaches a listener to `window.onresize`
window.addEventListener('resize', () => {
  Object.keys(listeners.resize).forEach((key) => {
    listeners.resize[key]();
  });
});
