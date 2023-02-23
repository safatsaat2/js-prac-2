function users(){fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => user(data))}



function user(data){
    console.log(data)
}