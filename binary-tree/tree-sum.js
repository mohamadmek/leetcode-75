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

// // Recursive
// const treeSum = (root) => {
//   if (root === null) return 0;
//   let sum = 0;
//   sum += root.val;
//   sum += treeSum(root.left);
//   sum += treeSum(root.right);

//   return sum;
// };

// Recursive
const treeSum = (root) => {
  if (root === null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};

// Iterative
// const treeSum = (root) => {
//   if (root === null) return 0;
//   let sum = 0;
//   const stack = [root];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     sum += current.val;
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return sum;
// };

console.log(treeSum(a));
