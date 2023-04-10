const fibonacci = function(n)
 {
    if (n<0)
    {
        return "OOPS";
    };
    let a =0;let b =1;
    let tempa =0;
    let tempb =0;
    for(let i=0; i<n; i++){
        tempa = a;
        tempb = b;
        a = tempb;
        b = tempa + tempb;
    };
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
