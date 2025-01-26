function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let max = root.val;
  let count = 0;

  const dfs = (root, max) => {
    if (!root) return;

    if (root.val >= max) {
      max = Math.max(max, root.val);
      count++;
    }

    dfs(root.left, max);
    dfs(root.right, max);
  };
  dfs(root, max);
  return count;
};
