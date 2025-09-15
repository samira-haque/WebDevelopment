// var i = 0;
// while(i <=10)
// {
//     console.log(i);
//     i++;
// }

function factorial(n) {
  var i = 1;
  var factorial = 1;
  while (i <= n) {
    factorial = factorial * i;

    i++;
  }
  return factorial;
}

var result = factorial(10);
console.log(result);
