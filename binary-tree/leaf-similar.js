var leafSimilar = function (root1, root2) {
  var res1 = "";
  var res2 = "";
  var stack1 = [root1];
  var stack2 = [root2];

  while (stack1.length > 0) {
    let current = stack1.pop();

    if (current.right) stack1.push(current.right);
    if (current.left) stack1.push(current.left);
    if (!current.right && !current.left) res1 += current.val + " ";
  }

  while (stack2.length > 0) {
    let current = stack2.pop();
    if (current.right) stack2.push(current.right);
    if (current.left) stack2.push(current.left);
    if (!current.right && !current.left) res2 += current.val + " ";
  }

  return res1 === res2;
};

// var leafSimilar = function(root1, root2) {

//     const dfs = (root, result) => {
//         if (root === null) return
//         if(!root.left && !root.right) result.push(root.val)

//         dfs(root.left, result);
//         dfs(root.right, result);
//     }
//     const res1 = [];
//     const res2 = [];

//     dfs(root1, res1)
//     dfs(root2, res2)

//     return JSON.stringify(res1) == JSON.stringify(res2)
// }
