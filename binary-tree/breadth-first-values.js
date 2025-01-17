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

const breadthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.shift();
    result.push(current.val);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};

console.log(breadthFirstValues(a));
