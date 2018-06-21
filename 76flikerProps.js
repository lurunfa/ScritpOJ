const obj = {}
const config1 = {
    enumerable: false,
    configurable: true
}
const config2 = {
    enumerable: true,
    configurable: true
}

Object.defineProperties(obj, {
    green: config1,
    red: config2,
    blue: config1,
    yellow: config2
})
const flikerProps = (obj) => {
    // console.log(obj);
    const totalProps = Object.getOwnPropertyNames(obj);
    const enumerableProps = Object.keys(obj);
    for (let i of totalProps) {
        Object.defineProperty(obj, i, {enumerable:enumerableProps.indexOf(i) === -1})
    }
}
flikerProps(obj);