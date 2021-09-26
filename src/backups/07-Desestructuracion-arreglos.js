
const nombres = ["polo","otro","el nombre"];

const [,n2] = nombres;

const misNombres = () => {
    return ["Marcopolo",44];
}


const [nombre, edad] = misNombres();
console.log(n2);
console.log(nombre);
console.log(edad);



 const myPolo = (nombre) => {
     return [ nombre, ()=> { console.log("Hola Mundo")}];
 }

const [myName, setName] = myPolo("Nacopolo");

console.log(myName);
setName();

