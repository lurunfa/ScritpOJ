const highlight = (...args) => {
    console.log(args)
    let contents = args[0];
    let inputArray = args.slice(1);
    let str = '';
    for (let i = 0; i < contents.length - 1; i++) {
        str += `${contents[i]}<span class='red'>${args[i + 1]}</span>`
    }
    return str + contents[contents.length - 1];
}
const yourName = 'ScriptOJ'
const myName = 'Jerry'
const cc = 'asa'
console.log(highlight`Hello, ${yourName}. I am ${myName}.`);
