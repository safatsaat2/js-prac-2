const names = ["abul","dabul","sabul","fabul","tabul","pbul","tabul","sabul","abul","tabul"]


function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
        const name  = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

let result = removeDuplicate(names);

console.log(result);