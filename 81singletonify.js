const singletonify = (OriginalClass) => {
    const single = new OriginalClass();
    return new Proxy(OriginalClass, {
        construct: (target, args) => single
    })
}
