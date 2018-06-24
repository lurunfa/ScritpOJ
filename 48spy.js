const spy = (fn) => {
  const calls = [];
  const f = function() {
    const objs = {
      args: [...arguments],
      result: fn.apply(this, arguments)
    }
    calls.push(objs);
    return objs.result;
  }
  f.calls = calls;
  return f
}
