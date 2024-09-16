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

/*const numerosMultiplicados = [];
for (var numero of numeros) {
  const resultado = numero * 2;
  numerosMultiplicados.push(resultado);
}*/

const pares = numeros.filter((numero) => {
  return numero % 2 == 0;
});
const numerosMultiplicados = numeros.map((numero) => numero);

//console.log(numerosMultiplicados);

const pessoas = [
  {
    nome: "Luiz",
    sobrenome: "Souza",
    idade: 18,
  },
  {
    nome: "Augusto",
    sobrenome: "Ortolan",
    idade: 18,
  },
  {
    nome: "Ana",
    sobrenome: "Lima",
    idade: 16,
  },
  {
    nome: "Bernardo",
    sobrenome: "Santos",
    idade: 23,
  },
  {
    nome: "Laura",
    sobrenome: "Ribeiro",
    idade: 15,
  },
];

const pessoasMaioresDeIdade = pessoas
  .filter((pessoa) => {
    return pessoa.idade >= 18;
  })
  .map((pessoa) => {
    const nomeCompleto = pessoa.nome + " " + pessoa.sobrenome;
    return nomeCompleto;
  });

//console.log(pessoasMaioresDeIdade);

const frutas = [
  { nome: "Maça", podeFazerSuco: true },
  { nome: "Melancia", podeFazerSuco: true },
  { nome: "Laranja", podeFazerSuco: true },
  { nome: "Banana", podeFazerSuco: false },
  { nome: "Abacate", podeFazerSuco: false },
];

const sucos = frutas
  .filter((fruta) => fruta.podeFazerSuco)
  .map((fruta) => `Suco de ${fruta.nome}`)
  .forEach((fruta) => console.log(fruta));
