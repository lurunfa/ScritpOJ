const app = {
  callback(ctx) {
    console.log(ctx)
  },

  use(fn) {
    app.midware = app.midware || [];
    app.midware.push(fn);
  },

  go(ctx) {
    app.midware = app.midware || [];
    app.midware.reverse().reduce((p, c) => () => c(ctx, p), () => app.callback(ctx))()
  }
}
