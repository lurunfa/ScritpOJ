const wrapAsync = (generatorFn) => {
    return (...args) => {
        const gen = generatorFn.apply(null, args);
        return new Promise((resolve, reject) => {
            let g = null;
            const fullFill = (res) => {
                g = gen.next(res);
                next(g);
            };
            fullFill();
            function next(ret) {
                if (ret.done) return resolve(ret.value);
                return ret.value.then(fullFill);
            }
        })
    }
}
