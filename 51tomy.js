const tomy =  new Proxy({}, {
        get: function (target, key) {
            console.log('Don\'t Touch Me.')
        },
        set: function () {
            console.log('Don\'t Touch Me.')
        },
        deleteProperty: function () {
            console.log('Don\'t Touch Me.')
        }
    })
