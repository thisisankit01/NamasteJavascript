function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

//setTimeOut in js and closures

function x() {
  for (var i = 0; i <= 5; i++) {
  function close(x) {
    setTimeout(function(x){
        console.log(x);
    },x * 1000);
  }  
  close(i);
  }
  console.log("Namaste Javascript");
}
x();

//output
//1
//2
//3
//4
//5