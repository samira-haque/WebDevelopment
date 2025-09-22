function evenify(num)
{
    if(num % 2 == 0)
    {
        console.log(num, ':is even number')
    }
    else
    {
        console.log(num, ':is odd number')
    }

}

nums = [2,3,4,5,6,7,8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // console.log(num*2);
    evenify(num);
}