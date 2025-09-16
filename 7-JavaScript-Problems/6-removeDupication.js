var name = [211, 334,222, 444, 725, 965, 965, 222];
var uniqueName =[];
for(var i =0; i < name.length;i++)
{
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1)
    {
        uniqueName.push(element);
    }
}

console.log(uniqueName);