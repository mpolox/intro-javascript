const nombre = "Marcopolo"
const apellido = "Ramos"

const nombreCompleto = `${nombre} ${apellido}`


console.log(nombreCompleto);

function getSaludo(nombre)
{
  return `Hola ${nombre}`
}

console.log(` Este es un template string ${getSaludo(nombre)}`);