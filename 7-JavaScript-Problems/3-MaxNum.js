var a = 10;
var b = 25;
var c = 15;

var max;

if (a >= b && a >= c) {
    max = a;
} else if (b >= a && b >= c) {
    max = b;
} else {
    max = c;
}

console.log("Maximum is: " + max);


// var a = 10;
// var b = 25;
// var c = 15;

// var max = Math.max(a, b, c);

// console.log("Maximum is: " + max);
