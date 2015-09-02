/**
 * Created by zhangh2 on 9/1/15.
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;

    if(n >=   Math.pow(2, 31)) {
        n ^= Math.pow(2, 31)
        count++;
    }
    while(n > 0) {
        n &= n-1;
        count++;
    }
    return count;
};