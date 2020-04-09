const users = [
    { name: 'Nathan', age: 25 },
    { name: 'Jack', age: 30 },
    { name: 'Joe', age: 28 },
];

for(let i = 0; i<users.length; i++)
{
    console.log(users[i].name);
}

// MAP
users.map(function (user, index) {
    console.log(index)
    console.log(user.name)
})

users.map((user, index)=>{
    console.log(user.age)
    user.age+=1
})

users.map((user)=>{
    console.log(user.age)
})

// FILTER
filtered_users2 = users.filter(function (user) {
    
})
filtered_users = users.filter((user)=>{
    return user.age > 28
})

console.log(filtered_users)