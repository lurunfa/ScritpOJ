class VNode {
    /* TODO */
    constructor(tag, props = {}, children = []) {
        this.tagName = tag;
        this.props = { ...props
        };
        this.children = [...children];
    }
    render() {
        let createHtml = document.createElement(this.tagName);
        for (let i in this.props) {
            createHtml.setAttribute(i, this.props[i])
        }
        if (this.children) {
            this.children.forEach(item => {
                createHtml.appendChild(item instanceof VNode ? item.render() : document.createTextNode(item))
            })
        }
        return createHtml;
    }
}
const h = (tag, props, children) => new VNode(tag, props, children);