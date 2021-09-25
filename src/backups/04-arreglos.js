const arreglo = [1,2,3,4,5,6,7,8,9,0];
const arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function(x) {
    return x * 2;
});


arreglo2.push(33);


console.log(arreglo);
console.log(arreglo2);
console.table(arreglo3);