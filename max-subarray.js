/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currSum = 0;
  let startIndex = 0;
  let maxSumObj = null;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if(maxSumObj == null || currSum > maxSumObj.maxSum) {
      maxSumObj = {
        maxSum: currSum,
        start: startIndex,
        end: i
      }
    }

    if (currSum < 0) {
      currSum = 0
      startIndex = i + 1
    }
  }

  return ({
    maxSum: maxSumObj.maxSum,
    subarray: nums.slice(maxSumObj.start, maxSumObj.end + 1)
  })
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6, [ 4, -1, 2, 1 ]
console.log(maxSubArray([1])); // 1, [1]
console.log(maxSubArray([5,4,-1,7,8])); // 23, [5,4,-1,7,8]