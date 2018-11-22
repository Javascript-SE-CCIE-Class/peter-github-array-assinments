const newieyork = [
    {
        name: 'Michelle',
        age: 19,
        coder: true,
        gender: 'f',
        us: true,
    },
    {
        name: 'Sam',
        age: 25,
        coder: false,
        gender: 'm',
        us: false,
    },
    {
        name: 'Ivy',
        age: 26,
        coder: true,
        gender: 'f',
        us: false,
    },
    {
        name: 'Nick',
        age: 32,
        coder: true,
        gender: 'm',
        us: true,
    },
    {
        name: 'Jim Beglin',
        age: 65,
        coder: false,
        gender: 'm',
        us: true,
    },
]

// Part 1 - List all users in US in ascending order
// Part 2 - Sort all users by age
// Part 3 -  List all female coders

//answer to part 1
const usersUS = newieyork.filter(user => {
    return user.us == true;
});

console.log(usersUS);


// answer to  part 2
newieyork.sort(
    function (a, b) {
        return a.age - b.age
    }
);
console.log(newieyork);

// anser to part 3
let female = newieyork.filter(user=>{
    return user.gender == 'f'
})
console.log(female);