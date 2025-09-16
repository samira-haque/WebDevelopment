var speech = "I am a good person .Hmmmmmmm Hmm.";
// console.log(speech[3]);
var count = 0;

for(var i = 0; i < speech.length; i++)
{
    var char = speech[i];
//     console.log(char);

        if (char == " " && speech[i-1] !=" "){
            count++;
        }
 }

 count++;

 console.log(count);