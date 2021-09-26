import heroes, { owners } from "../data/heroes"

console.table(heroes)
console.log(owners)

// const getHeroesById = (id) => {
//     const myHero = heroes.find( (item) => item.id === id);
//     return myHero
// }
const getHeroesById = (id) =>  { return  heroes.find( (item) => item.id === id) }

const getHeroesByOwner = (owner) => { return  heroes.filter( (item) => item.owner === owner) }

const { name } = getHeroesById(3);
console.log( name);


const myHeroes = getHeroesByOwner("DC");

console.log( myHeroes);