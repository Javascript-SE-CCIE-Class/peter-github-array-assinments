const texasss = [
    {
        name: 'Mike',
        age: 23,
        gender: 'm',
        us: false,
    },
    {
        name: 'Liz',
        age: 20,
        gender: 'f',
        us: true,
    },
    {
        name: 'Chris',
        age: 102,
        gender: 'm',
        us: true,
    },
    {
        name: 'Chuloo',
        age: 27,
        gender: 'm',
        us: false,
    },
    {
        name: 'Annie',
        age: 30,
        gender: 'f',
        us: true,
    },
]

// Part 1 - Find all users older than 24
// Part 2 - Find the total age of all users
// Part 3 - List all female coders

//answer to part 1
let myArray= texasss.filter(user => user.age>24);
let theArray=texasss.filter(function (user) {
    if (user.age>24){
        return user
    }

});
console.log(theArray);

//answer to part 2

const totalage=texasss.map((users) =>users.age).reduce((prev, next)=> prev + next);
document.write(totalage);

// answer to part 3
let female = texasss.filter(user=>{
    return user.gender == 'f'
})
console.log(female);