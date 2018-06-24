const execute = (str,params) => {
  with(params){
    return eval(str);
  }
}

console.log(execute(`'My name is ' + name`, { name: 'Jerry' }));
 // 不用with
 const execute = (str,params) => {
   return new Function(...Object.keys(params),`return ${str}`)(...Object.values(params))
 }
