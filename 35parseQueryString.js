const parseQueryString = (str) => {
    const regs = /\?.*/g;
    if (str.indexOf('?') === -1 || (str.indexOf('#') !== -1 && str.indexOf('#') < str.indexOf('?'))) {
        return {}
    }
    const exec = regs.exec(str);
    if (exec === null) return {};
    if (exec[0].indexOf('#') !== -1) {
        exec[0] = exec[0].split('#')[0]
    }
    const quateIndex= exec[0].indexOf('?');
    const params = exec[0].slice(quateIndex+1).split('&');
    const result = {};
    params.forEach(param => {
        const devid = param.split('=');
        const key = devid[0];
        const value = devid[1].split('#')[0];
        result[key] = value
    })
    return result;
}
console.log(parseQueryString('https://scriptoj.comproblems/?offset=10&limit=100&tag=all?name=lucy'));