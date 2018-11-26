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


// ARRAY 2
const newieyork = [
    {
        name: 'Michelle',
        age: 19,
        coder:true,
        gender: 'f',
        us: true,
    },
    {
        name: 'Sam',
        age: 25,
        coder:false,
        gender: 'm',
        us: false,
    },
    {
        name: 'Ivy',
        age: 26,
        coder:true,
        gender: 'f',
        us: false,
    },
    {
        name: 'Nick',
        age: 32,
        coder:true,
        gender: 'm',
        us: true,
    },
    {
        name: 'Jim Beglin',
        age: 65,
        coder:false,
        gender: 'm',
        us: true,
    },
]

const vegzas = [
    {
        name: 'Charly',
        age: 32,
        coder:true,
        gender: 'm',
    },
    {
        name: 'Law',
        age: 21,
        coder:true,
        gender: 'm',
    },
    {
        name: 'Rosey',
        age: 42,
        coder:false,
        gender: 'f',
    },
    {
        name: 'Steph',
        age: 18,
        coder:true,
        gender:'f'
    },
    {
        name: 'Jon',
        age: 47,
        coder:false,
        gender: 'm',
    },
]

// Part 1 - Find the total age of male coders under 25
// Part 2 - List all male coders over 30
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.


//answer to part 1
let myArray= vegzas.filter(user => user.age>25) ;vegzas.map(users =>users.gender='m');
let theArray=vegzas.filter(function (user) {
    if (user.age<25){
        return user
        return user.gender == 'm'

    }


});
console.log(theArray);

// answer to part 2
let maleCoders = vegzas.filter(val => {
    return val.age > 30 && val.gender == 'm'
})

console.log(maleCoders);

//answer to part 3
let totalAges = []

texasss.map(age => totalAges.push(age.age));
newieyork.map(age => totalAges.push(age.age));
vegzas.map(age => totalAges.push(age.age));

let sumofage = totalAges.reduce((prev, next)=> prev + next);
console.log(sumofage);