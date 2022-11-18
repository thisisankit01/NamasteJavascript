//when we run a js code its goes on the following manner:

var n = 2;
function Square(num){
  var ans = num*num;
  return ans;
}

const squareOf2 = Square(n);
const squareOf4= Square(4);

console.log(squareOf2);
console.log(squareOf4);

//1: allocates memory for all functions and keywords 
//2: no matter if they have any value it will be assigned undefined.
//3: all values for functions and keywords is stored in Code.
