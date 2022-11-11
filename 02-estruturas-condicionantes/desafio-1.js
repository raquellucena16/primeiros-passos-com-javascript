/* Estruturas condicionais
% = resto da divisão
=== igualdade*/

/*const numero = 3;
const numerodivisivelpor2 = numero % 2 === 0;

if (numerodivisivelpor2) {
  console.log("Par");
} else {
  console.log("Impar");
}*/

const numero = 0;
const numerodivisivelpor2 = numero % 2 === 0;

if (numero === 0) {
  console.log("Número inválido");
} else if (numerodivisivelpor2) {
  console.log("Sim");
} else {
  console.log("Não");
}
