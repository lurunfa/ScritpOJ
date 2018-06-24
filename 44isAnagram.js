const isAnagram = (str1, str2) => {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');
  if(str1Arr.length !== str2Arr.length) return false;
  for(let i=0; i<str1Arr.length;i++){
    let indexOf2 = str2Arr.indexOf(str1Arr[i])
    if(indexOf2 === -1) return false;
    str1Arr.splice(i,1);
    str2Arr.splice(indexOf2,1)
  }
  return str1Arr.length === str2Arr.length
}
console.log(isAnagram('Thisismylove' , 'THisismylove'));

// 简单方法
const isAnagram = (str1,str2) => {
  const arrOne = str1.split('').sort()
  const arrTwo = str2.split('').sort()
  return arrOne.join('') === arrTwo.join('')
}
