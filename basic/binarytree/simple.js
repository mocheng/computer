"user strict";

function BinaryTree(root) {
  this._root = root;

  return this;
}

function traverse(node, handler_func) {
  if (!node) return;

  handler_func(node);

  if (node.left) {
    traverse(node.left, handler_func);
  }

  if (node.right) {
    traverse(node.right, handler_func);
  }

}

BinaryTree.prototype.breadth_first_traverse = function(handler_func) {
  traverse(this._root, handler_func);
};

module.exports = BinaryTree;
