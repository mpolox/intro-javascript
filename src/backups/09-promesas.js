import { getHeroesById, getHeroesByOwner } from "./backups/08-imports-find-filter";


// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroesById(2);
//         // console.log(heroe)
//         // console.log("2 segundos despues");
//         resolve(heroe);
//     }, 2000);

// });

// promesa.then( (heroe) => {
//     console.log("Este es el heroe:", heroe)
// }).catch(
//     err => console.warn("no hay")
// );


const getHeroeByIdAsync =  (id) =>{

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            console.log("2 segundos despues...");
            const myOwners = getHeroesByOwner("DC");
            console.log(myOwners)
            const p1 = getHeroesById(id);     
            if (p1){
                resolve(p1);    //para el then
            } else{
                reject("no hay");   //para el catch
            }
            
        }, 2000);    
    });
}

console.log("Marcopolo")

getHeroeByIdAsync(1)
    .then( heroe => console.log(heroe))
    .catch(err => console.error(err));

