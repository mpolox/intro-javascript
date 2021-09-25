const persona = {
  nombre: "Marcopolo",
  apellido: "Ramos",
  direccion: {
    calle: "paseo de los jabalies",
    ciudad: "bl bla bla",
    numero: 2345345
  }
}

// console.table(persona);
console.log(persona);

//copia la referencia del objeto
// const persona2 = persona;

//copiar el objeto
const persona2 = { ...persona }

persona2.nombre = "Rocky";

console.log(persona2);
console.log(persona);