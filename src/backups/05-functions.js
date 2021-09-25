// function saludar(nombre) {
//     retunr `Hola ${nombre}`;
// }

// const saludar = function(nombre) {
//     return `Hola ${nombre}`;
// }

const saludar = (nombre) => {
        return `Hola ${nombre}`;
    }

const saludar2 = (nombre) => `Hola ${nombre}`;
const saludar3 = (nombre) => (
    {
        userId: 12343,
        userName: nombre
    }
);

console.log(saludar('Polo'));
console.log(saludar2('Polo2'));
console.log(saludar3());