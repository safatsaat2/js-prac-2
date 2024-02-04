bestFriend(friend=["Jahin", "SAYed", "Aabdur"]);

function bestFriend(friends){
    if(friend[0].length>friend[1].length && friend[0].length>friend[2].length){
        console.log(friends[0]);
    }
    else if(friend[1].length>friend[2].length && friend[1].length>friend[0].length){
        console.log(friends[1]);
    }
    else{
        console.log(friends[2]);
    }
}
