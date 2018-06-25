/* drive 函数已经可以直接使用 */

const driveCustomers = (...args) => {
    const store = [];
    const promises = args.map(arg=>new Promise(resolve=>{
        arg(p=>{
            store.push(p)
        })
        resolve();
    }))
     Promise.all([...promises]).then(drive(store))
}