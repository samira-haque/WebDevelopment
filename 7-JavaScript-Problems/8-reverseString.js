function reverseString(str){
    var reverse ="";
    for(var i = 0; i<str.length;i++){
        var char = str[i];
        reverse = char + reverse ;
    }

    return reverse;
}

var statement = " Hello Gd Morning,Samira.";
var forStatement = reverseString(statement);
console.log(forStatement);