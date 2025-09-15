// const year = 3566 ;
// const reminder = year % 4 ;

// if(reminder == 0)
// {
//     console.log('Leap Year');
// }
// else{
//         console.log('Not Leap Year');

// }



// function

function isLeapYear(year)
{
    // const reminder= year % 4;
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
    {
        return true;

    }
    else
    {
         return false;

    }
}

const year = isLeapYear(1700);
console.log(year);