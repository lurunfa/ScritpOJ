const isUSDFormat = (str) => {
    const test = /^\$([1-9]\d{0,2}(\,\d{3})*|0)(\.\d{2})?$/g;
    return test.test(str);
}