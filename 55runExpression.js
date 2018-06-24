const runExpression = (exp) => {
    let op = []; // 存操作符与数字
    let bk = []; // 存括号

    let i = 0;
    while (i < exp.length) {
        if (exp[i] === ' ') {
            //skip, do nothing
        } else if (exp[i] === "(") {
            bk.push(exp[i]);
        } else if (exp[i] === ")") {
            if (bk.length === 0) {
                return null;
            }
            bk.pop();  // 弹出上一个正括号
        } else if (exp[i] === "+" ||
            exp[i] === "-" ||
            exp[i] === "*" ||
            exp[i] === "/") {
            op.push(exp[i]);

        } else if (!isNaN(exp[i])) {
            let tmp = "";
            let j = i + 1;
            while (exp[j] !== ' ' && !isNaN(exp[j])) {
                j++;
            }
            tmp = exp.slice(i, j);
            let n = parseInt(tmp);
            i = j - 1;

            if (op.length <= 0) {
                return null; //排除数字开头
            }
            while (op.length >= 2 && !isNaN(op[op.length - 1])) {
                let lnum = op.pop();
                let oprt = op.pop();
                if (oprt === "+") {
                    n = lnum + n;
                } else if (oprt === "-") {
                    n = lnum - n;
                } else if (oprt === "*") {
                    n = lnum * n;
                } else if (oprt === "/") {
                    n = lnum / n;
                } else {
                    return null; //排除非运算符情况
                }
            }
            op.push(n);
        } else {
            return null;
        }
        i++;
    }
    if (bk.length !== 0 || op.length !== 1) {
        return null;
    }
    return op[0];
}