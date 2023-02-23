const company = {
    Name : "Lalu's Kitchen",
    Phone : 01722202323,
    Address :{
        Street: 'Kumarpara',
        Lane: 04,
        City: 'Sylhet'
    },
    Product : ['Thai','Chienese','Indian']
}
console.log(company)
const comapanyJson = JSON.stringify(company);
console.log(comapanyJson);
const repharseCompany = JSON.parse(comapanyJson);
console.log(repharseCompany);