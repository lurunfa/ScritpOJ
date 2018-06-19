const extractStr = (str) => {
    const toSplit = /\:+(\w*)\.+/g;
    let temp = null;
    let result = [];
    while(temp = toSplit.exec(str)){
    	result.push(temp[1]);
    }
    return result;
}
console.log(extractStr('My name is:Jerry. My age is:12.'))
