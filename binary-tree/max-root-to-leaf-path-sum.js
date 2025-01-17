class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode(-1);
const b = new TreeNode(-6);
const c = new TreeNode(-5);
const d = new TreeNode(-3);
const e = new TreeNode(0);
const f = new TreeNode(-13);
const g = new TreeNode(-1);
const h = new TreeNode(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

//      3
//    /   \
//  11    4
//  / \     \
// 4   2    1

// const treeMin = (root) => {
//   if (root === null) return 0;
//   const stack = [root];
//   let min = root.val;
//   while (stack.length > 0) {
//     const current = stack.pop();
//     min = Math.min(min, current.val);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return min;
// };

// Recursive
const maxRootToLeafPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const leftMin = maxRootToLeafPathSum(root.left);
  const rightMin = maxRootToLeafPathSum(root.right);
  return Math.max(root.val + leftMin, root.val + rightMin);
};

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

console.log(maxRootToLeafPathSum(a));
