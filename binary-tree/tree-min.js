class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode(3);
const b = new TreeNode(11);
const c = new TreeNode(4);
const d = new TreeNode(4);
const e = new TreeNode(2);
const f = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

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
const treeMin = (root) => {
  if (root === null) return Infinity;
  const leftMin = treeMin(root.left);
  const rightMin = treeMin(root.right);
  return Math.min(root.val, leftMin, rightMin);
};

console.log(treeMin(a));
