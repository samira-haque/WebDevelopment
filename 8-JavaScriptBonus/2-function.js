var marks =[89, 97, 89, 68, 94];
for(var i =0; i < marks.length;i++){
    var element = marks[i];
    console.log(element);
}

console.log('outside');
console.log('outside2');


function add(number1,number2)
{
    var total = number1 + number2 ;
    return total;
}

var result1 = add(94,78);
console.log(result1);
console.log('not adding');
var result2 = add(144,654);
console.log(result2);


function largestNumber(numbers)
{
    var larger = numbers[0];
    for (var i = 0; i < numbers.length;i++)
    {
        var element = numbers[i];
        if(element > larger)
        {
            larger = element;
        }
    }

    return larger;
}


var output = largestNumber([45, 78, 89]);
console.log('output',output);