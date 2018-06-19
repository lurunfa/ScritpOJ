const safeGet = (data, path) => {
    /* TODO */
    const paramArr = path.split('.');
    let temps = data;
    // let result = null;
    while (paramArr.length) {
        let key = paramArr.splice(0, 1)[0];
        temps = temps[key]
        if (temps === undefined) {
            return undefined
        }
    }
    return temps;
}
const a = {
    a:{
        b:{
            c:'aa'
        }
    }
}
console.log(safeGet(a,'a.b.c.d'));
