function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!isFinite(p?.val) && !isFinite(q?.val)) {
    if (p !== q) return false
    else return true
  }

  return (
    p.val === q.val &&
    isSameTree(p?.right, q?.right) &&
    isSameTree(p?.left, q?.left)
  );
};

const tree1 = new TreeNode(10, 5, 11);
const tree2 = new TreeNode(10, 11, 5);
const tree3 = new TreeNode(10, 5, 11);
const tree4 = new TreeNode(10);
const tree5 = new TreeNode(10);
const tree6 = new TreeNode();
const tree7 = new TreeNode();
const tree8 = new TreeNode(1, 2);
const tree9 = new TreeNode(1, null, 2);

console.log(isSameTree(tree1, tree2)); // false
console.log(isSameTree(tree1, tree3)); // true
console.log(isSameTree(tree1, tree4)); // false
console.log(isSameTree(tree5, tree4)); // true
console.log(isSameTree(tree5, tree6)); // false
console.log(isSameTree(tree7, tree6)); // true
console.log(isSameTree(tree8, tree9)); // false
