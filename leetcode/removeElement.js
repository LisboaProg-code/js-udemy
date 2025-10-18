/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
    let pos = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[pos] = nums[i]
            pos += 1
        }
    }
    return nums
};
let arrayTeste = [1, 2, 5, 3, 5, 4, 5, 6, 5]
console.log(removeElement(arrayTeste, 5))
