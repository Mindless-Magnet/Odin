const repeatString = function(s,n) {
    if (n<0){
        return 'ERROR';
    }
    str ='';
    for(let i=0;i<n;i++)
    {
        str+=s;
    }
    return str;
}

// Do not edit below this line
module.exports = repeatString;
