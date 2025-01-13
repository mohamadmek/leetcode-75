class TreeNode {
  val: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: string) {
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

// const depthFirstValues = (root: TreeNode | null): string[] => {
//   if (root === null) return [];
//   const result = [];
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current !== undefined) {
//       result.push(current.val);

//       if (current.right) stack.push(current.right);
//       if (current.left) stack.push(current.left);
//     }
//   }
//   return result;
// };

// Recursive
const depthFirstValues = (root: TreeNode | null): string[] => {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);

  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

console.log(depthFirstValues(a));
