const type = (obj) => {
    if (obj === null) return 'null'
    if (typeof obj == 'object') {
        const constructor = obj.constructor.name
        return constructor.toLowerCase(); // 
    }
    return typeof obj;
}