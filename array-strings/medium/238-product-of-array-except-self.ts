var productExceptSelf = function (nums: []) {
  let res = [];
  let prefix = 1;

  // Calculate prefix products
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  // Calculate postfix products and multiply with the result
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
};
