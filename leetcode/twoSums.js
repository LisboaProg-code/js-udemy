
let nums = [1, 9, 2, 8, 7]
let target = 9

for(let i = 0; i < nums.length; i++){
    for(let i2 = i+1; i2 < nums.length; i2++){
        if(nums[i] + nums[i2] == target){
            console.log(i, i2)
        }        
    }
}