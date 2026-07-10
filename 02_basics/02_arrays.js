const marvelHeroes =  ["thor", "spiderman", "ironman"]
const dc_heroes =  ["superMan", "flash", "batMan"]

// marvelHeroes.push(dc_heroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const myNewHeroes = marvelHeroes.concat(dc_heroes)

// console.log(myNewHeroes);

// const all_New_Heroes = [...marvelHeroes, ...dc_heroes,]
// // console.log(all_New_Heroes);

// const another_array = [1, 2, [3, 4, 5, 6], 7, [6, 7, [4, 5]]]
// const another_real_array = another_array.flat(Infinity)
// console.log(another_real_array);

console.log(Array.isArray("Ahsan"));
console.log(Array.from("Ahsan"));
console.log(Array.from({name: "Ahsan"})); // intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));

