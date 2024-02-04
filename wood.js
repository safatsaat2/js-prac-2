const phones = [
    {name: "Samsung", camera: 10, Storage:"32gb", price:27000, color: "white"},
    {name: "Samsung", camera: 10, Storage:"32gb", price:25000, color: "white"},
    {name: "Samsung", camera: 10, Storage:"32gb", price:26000, color: "white"},
    {name: "Samsung", camera: 10, Storage:"32gb", price:23000, color: "black"},
    {name: "Samsung", camera: 10, Storage:"32gb", price:23000, color: "white"},
    {name: "Samsung", camera: 10, Storage:"32gb", price:29000, color: "white"},
]

function cheapestphone(phones){
    let cheapest = phones[0]
    for(let i = 0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestphone(phones);
console.log(mySelection);