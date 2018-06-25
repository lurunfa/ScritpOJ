class EventEmitter {
  /* TODO */
  constructor() {
    this.store = {}
  }
  on(key, fn) {
    if (!this.store[key]) this.store[key] = [];
    this.store[key].push(fn);
  }
  emit(...params) {
    const paramArr = [...params];
    const key = paramArr[0]
    const outParam = [...params].slice(1)
    return this.store[key].forEach(item => item(...outParam))
  }
  off(key, fn) {
    let fnArray = this.store[key];
    const offIndex = fnArray.indexOf(fn);
    return fnArray.splice(offIndex, 1)
  }
}
const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {
  console.log(`I am ${name}, and I am ${age} years old`)
})
emitter2.emit('hi', 'Jerry', 12)