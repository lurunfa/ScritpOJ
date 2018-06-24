const render = (template, data) => {
    const result =
        `var p=[];with(data){p.push('` + template
            .replace(/[\r\n\t]/g, '')
            .replace(/<%=(.*?)%>/g, `');p.push($1);p.push('`)
            .replace(/<%/g, `');`)
            .replace(/%>/g, `;p.push('`)
        + `');} p.join('');`;

    return eval(result);
}