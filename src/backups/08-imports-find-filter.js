import heroes, { owners } from "../data/heroes"

console.log(heroes)
console.log(owners)

// const getHeroesById = (id) => {
//     const myHero = heroes.find( (item) => item.id === id);
//     return myHero
// }
export const getHeroesById = (id) =>  { return  heroes.find( (item) => item.id === id) }

export const getHeroesByOwner = (owner) => { return  heroes.filter( (item) => item.owner === owner) }

// const { name } = getHeroesById(3);
// console.log( name);


// const myHeroes = getHeroesByOwner("DC");

// console.log( myHeroes);

