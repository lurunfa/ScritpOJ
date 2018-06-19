const addClass = (dom, name) => {
    dom.className += ' ' + name; 
    // 或者dom.classList.add(name)
}
const removeClass = (dom, name) => {
    dom.classList.remove(name);
}
const hasClass = (dom, name) => {
    return dom.classList.contains(name);
}