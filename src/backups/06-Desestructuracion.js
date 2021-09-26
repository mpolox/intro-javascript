const persona = {
    nombre: "juan",
    id: 123,
    edad: 23,
    cargo: "Chalan"
}

console.log(persona.nombre);
console.log(persona.id);
console.log(persona.edad);

//extrae nombre de persona
const {nombre, edad} = persona


console.log(edad);
console.log(nombre);

const getUser = ({nombre, cargo="Maistro"}) => {
    return(
        {
            usuario: nombre,
            cargo: cargo
        }
    );    
}

const {usuario} = getUser(persona);


console.log(usuario);




