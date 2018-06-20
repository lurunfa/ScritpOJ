const autoBind = (ToBindClass) => {
    return new Proxy(ToBindClass, {
        construct: (target, args) => {
            return new Proxy(new ToBindClass(...args), {
                get: (target, key) => {
                    console.log('cacsa'+target[key]);
                    
                    return typeof target[key] === 'function' ? target[key].bind(target) : target[key];
                }
            })
        }
    })
}
class Person {
    constructor (name) {
      this.name = name
    }
    sayHi () {
      console.log(`I am ${this.name}.`)
    }
  }
  const newPerson = autoBind(Person)
  const a = new newPerson('aaa');
  console.log(a.name);
  a.sayHi()
  