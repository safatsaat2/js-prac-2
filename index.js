function leapyear(number){
    if(number%4 == 0){
        return "this year is leap year"
    }
    else{
        return "This year is not a leap year"
    }
}

var result = leapyear(2021);
console.log(result);

function evenNumber(number){
    for (i = 0; i < number.length; i++){
        var result  = number[i];
        if(result % 2 == 1){
            console.log(number[i], "is odd")
        }
        else{
            console.log(number[i], "is even")
        }
    }
}
var array = [1,2,3,4,5];
evenNumber(array)
