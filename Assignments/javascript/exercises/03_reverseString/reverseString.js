const reverseString = function(s) {
    let l = s.length;
    let str='';
    for(let i=l-1;i>=0;i--){
        str+=s.charAt(i)
    }
    return str

};

// Do not edit below this line
module.exports = reverseString;
