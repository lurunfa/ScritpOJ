const injectSections = (items, sections) => {
    if(!sections.length) return items;
    sections.forEach((item) => {
        items[item.index] = [item.content, items[item.index]];
    })
    return items.toString().split(',');
}
console.log(injectSections( ["item1","item2","item3"], [{"content":"section0","index":1}]));