// console.log(fetch('users.json'));

// fetch('users.json').then(function(response){
//     console.log("fetch start");
//     //console.log(response);
//     return response.json();
// }).then(function(json){
//     //console.log(json);
//     for(const user of json){
//         console.log(`I am ${user.name} ${user.age}years old`);
//     }
// })

// console.log("global");

async function fetchUsers(){
    const response = await fetch('users.json');
    const json = await response.json();
    for(const user of json){
        console.log(`I am ${user.name} ${user.age}years old`);
    }
}

fetchUsers();

