const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
	l = a.length;
  let s=0;
  for(let i=0;i<l;i++)
  {
    s+=a[i];
  }
  return s;
};

const multiply = function(a) {
  l = a.length;
  let s=1;
  for(let i=0;i<l;i++)
  {
    s=s*a[i];
  }
  return s;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let r2=1;
  while(a!=0)
  {
    r2 = r2*a;
    a--;
  };
  return r2;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
