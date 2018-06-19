class VNode {
  /* TODO */
  constructor(tag, props = {}, children = []) {
    this.tagName = tag;
    this.props = { ...props
    };
    this.children = [...children];
  }
}
const h = (tag, props, children) => {
  let node = new VNode(tag, props);
  if (children.tagName) {
    for (let {
        tagName,
        props = {},
        children = []
      } of children) {
      const childNode = h(tagName, props, children);
      node.children.push(childNode);
    }
  }
  else if(children.length){
    for(let i of children){
      node.children.push(i)
    }
  }
  return node;
}