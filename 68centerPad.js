const centerPad = (str, len, pad) => {
    const strLength = str.length;
    const headerLength = Math.floor((len - strLength) / 2);
    const tailLenghth = len - headerLength-strLength;
   str =  str.padStart(len-tailLenghth, pad);
   str = str.padEnd(len, pad);
    return str;
}
console.log(centerPad('Hello', 13, 'abc')) // => 'abcaHelloabca');
// es6新引入padEnd padStart
