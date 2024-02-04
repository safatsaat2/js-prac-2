number = [78,2,3,-1,35,90];

newNumber= [];

for (let i =0; i< number.length; i++){
    let index = number[i];
    if(index>0){
        newNumber.push(index);
        console.log(newNumber);
    }
    else{
        break
    }
};

