const numeros = [1, 3, 4, 5, 9, 12, 16];

//forma tradicional
/*const numerosPares = [];
const numerosImpares = [];
for (var numero of numeros) {
  if (numero % 2 == 0) {
    numerosPares.push(numero);
  } else {
    numerosImpares.push(numero);
  }
}*/

const numerosPares = numeros.filter((numero) => numero % 2 == 0);
const numerosImpares = numeros.filter((numero) => numero % 2 != 0);

/*console.log("Pares", numerosPares);
console.log("Impares", numerosImpares);*/
