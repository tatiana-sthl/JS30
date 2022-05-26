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
We have edited the original array too.
Because it's an array reference, not an array copy.
They both point to the same array.
*/

// If we take a copy
const team2 = players.slice();

// If we create a new array and concat the old one in
const team3 = [].concat(players);

// If we use the ES6 Spread
const team4 = [...players];
team4[3] = 'hellooooo';
console.log(team4);

const team5 = Array.from(players);

/* Now, with all this methods, the original one isn't changed */

// It works exactly the same for objects
const person = {
    name: "Tati",
    age: 28
};

const captain = Object.assign({}, person, { number: 99});
console.log(captain);

const captain2 = {...person};

