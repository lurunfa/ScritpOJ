const toChineseNum = (num) => {
    // TODO
    const joinNums = (num) => {
        let arrNum = num.toString().split('').reverse()
        let result = [];
        let countHolder = {
            0: '',
            1: '十',
            2: '百',
            3: '千',
        };
        let numsMatch = {
            0: '零',
            1: '一',
            2: '二',
            3: '三',
            4: '四',
            5: '五',
            6: '六',
            7: '七',
            8: '八',
            9: '九'
        }
        for (let i = 0; i < arrNum.length; i++) {
            let intt = parseInt(arrNum[i])
            result.push(countHolder[i]);
            result.push(numsMatch[intt])
        }
        return result.reverse().join('');
    }
    const bigNum = Math.floor(num / 10000);
    const smallNum = num % 10000;
    const forMatch = /(零(?=零))|(零(?=千))|(零(?=万)|(零(?=百))|(零(?=十)))/g;
    return bigNum !== 0 ? joinNums(bigNum) + '万' + joinNums(smallNum).replace(forMatch,''): joinNums(smallNum).replace(forMatch,'')
}
console.log(toChineseNum(111))