const debounce = (fn, duration) => {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, duration);
  }
}
