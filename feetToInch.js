function paperRequirements(book1, book2, book3){
   let qPageForBook1 = book1 * 100;
   let qPageForBook2 = book2 * 200;
    let qPageForBook3 = book3 * 300;
    totalPages = qPageForBook1 + qPageForBook2 + qPageForBook3;
    return totalPages;
}


let inch = paperRequirements(10, 20, 30);

console.log(inch)