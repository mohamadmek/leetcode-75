class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

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

// const treeIncludes = (root) => {
//   if (root === null) return false;
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.shift();
//     if (current.val === target) return true;

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return false;
// };

// Recursive
const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

console.log(treeIncludes(a, "e"));
