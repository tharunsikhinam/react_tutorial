const users = [
    { name: 'Nathan', age: 25 },
    { name: 'Jack', age: 30 },
    { name: 'Joe', age: 28 },
];

// MAP
users.map(function (user) {
    console.log(user.name)
})

users.map((user)=>{
    console.log(user.age)
    user.age+=1
})

users.map((user)=>{
    console.log(user.age)
})

// FILTER
filtered_users = users.filter((user)=>{
    return user.age > 28
})

console.log(filtered_users)