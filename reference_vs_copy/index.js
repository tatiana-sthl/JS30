// strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Tati";
let name2 = name;
console.log(name, name2);
name = 'Tatiana';
console.log(name, name2);

// We have an array
const players = ['Tati', 'Clem', 'Lucie', 'Baptiste'];

// and we want to make a copy of it :
const team = players;
console.log(players, team)

// Maybe we can juste do somehting like this :
team[3] = 'Lux';

/* What happens when we update that array ?
*/
