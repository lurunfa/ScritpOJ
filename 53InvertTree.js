const invertTree = (tree) => {
    /* TODO */
    if (!tree) return tree;
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
    invertTree(tree.left)
    invertTree(tree.right);
    return tree;
}