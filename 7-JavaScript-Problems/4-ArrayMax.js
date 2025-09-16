var marks =[45, 81, 63, 98, 90,77,22,34];

var max = marks[0];
for(var i =0;i < marks.length;i++){
    var element = marks[i];
    if(element > max)
    {
        max = element;
    }
}

console.log("highest Value is ; ",max);