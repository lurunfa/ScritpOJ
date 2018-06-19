var ss = '九千六百四十六万六百九十六';
var t = /(零(?=零))|(零$)|(零(?=万))/g
console.log(ss.replace(t,'零'))