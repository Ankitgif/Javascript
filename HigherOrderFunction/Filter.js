//without higher order function

// const persons = [
//     {name: 'Peter', age:16},
//     {name: 'Mark', age:18},
//     {name: 'Jane', age:24},
//     {name: 'Jhon', age:14},
//     {name: 'Tony', age:24},
// ];

// const fullAge = [];

// for(let i = 0 ; i<persons.length; i++) {
//     if(persons[i].age >= 18) {
//         fullAge.push(persons[i]);
//     }
// }

// console.log(fullAge);

//with higher order function

const persons = [
    {name: 'Peter', age:16},
    {name: 'Mark', age:18},
    {name: 'Jane', age:24},
    {name: 'Jhon', age:14},
    {name: 'Tony', age:24},
];

const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);
