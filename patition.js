/**
 * Created by zhangh2 on 9/1/15.
 */
var partition = function(s) {
    var result = [], item = [], palindrome = [], divident = [], string = [];
    var stringL = s.length, i, pointer;
    for(i = 0; i < stringL; i++){
        item.push(s[i]);
    }
    result.push(item);
    item = [];

    for(i = 0; i < stringL; i++){
        if(palindrome.length === 0){
            palindrome.push(s[i]);
        }else{
            if(palindrome.length > 1 && s[i] === palindrome[palindrome.length - 2]) {
                console.log('------');
                console.log(i,s[i],  palindrome[palindrome.length - 2]);
                pointer = i;
                divident.push(palindrome.pop());
                var popVal = palindrome.pop() ;
                while(palindrome.length > 0 && popVal === s[pointer]){
                    pointer++;
                    divident.push(popVal);
                    popVal = palindrome.pop();
                }
                if(palindrome.length > 0){
                    palindrome.push(popVal);
                }
                if(palindrome.length > 0){
                    item = item.concat(palindrome);
                }
                j = divident.length-1;
                while(j > 0){
                    string.push(divident[j]);
                    j -= 1;
                }
                string = string.concat(divident);

                item.push(string.join(''));
                result.push(item);
                string = [];
                item = [];
                palindrome = [];
            }else if(s[i] === palindrome[palindrome.length - 1]){
                console.log('******');

                pointer = i;
                var popVal = palindrome.pop() ;
                while(palindrome.length > 0 && popVal === s[pointer]){
                    pointer++;
                    divident.push(popVal);
                    popVal = palindrome.pop();
                }
                if(palindrome.length > 0){
                    palindrome.push(popVal);
                }
                if(palindrome.length > 0){
                    item = item.concat(palindrome);
                }
                j = divident.length-1;
                while(j >= 0){
                    string.push(divident[j]);
                    j -= 1;
                }
                console.log(string);
                string = string.concat(divident);

                item.push(string.join(''));
                result.push(item);
                item = [];
                string = [];
                palindrome = [];
            }else{
                palindrome.push(s[i]);
            }
        }
    }

    return result;
};
console.log();
console.log();
console.log();
console.log(partition('acbddbefe'));