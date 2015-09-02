/**
 * Created by zhangh2 on 9/2/15.
 */
var groupAnagrams = function(strs) {
    var i, strsL = strs.length;
    var result = [];
    var resultHelper = {};

    strs.sort();
    for(i = 0; i < strsL; i++) {
        var _sort = strs[i].toString().split('').sort().join('');
        if(!resultHelper.hasOwnProperty(_sort)) {
            resultHelper[_sort] = [];
        }
        resultHelper[_sort].push(strs[i]);
    }
    resultHelperL = Object.keys(resultHelper).length;
    for(var key in resultHelper) {
        if(resultHelper[key].length > 0){
            result.push(resultHelper[key]);
        }

    }
    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));