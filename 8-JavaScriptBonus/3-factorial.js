// Iterative factorial
function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

// Recursive factorial
function factorialRecursive(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorialRecursive(num - 1);
    }
}

// Testing both
var resultIter = factorial(5);
console.log('Iterative:', resultIter);

var resultRec = factorialRecursive(5);
console.log('Recursive:', resultRec);
