const shoppingCart =[
    {name:"shoe", quantity:2, price:1200},
    {name:"muja", quantity:2, price:100},
    {name:"shirt", quantity:2, price:1200},
    {name:"pant", quantity:2, price:1200},
    {name:"moyda", quantity:5, price:1200},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const totalPrice = product.quantity * product.price;
        sum = sum + totalPrice;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);