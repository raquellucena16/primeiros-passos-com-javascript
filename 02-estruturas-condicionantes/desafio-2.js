/* Faça um programa para calcular o valor gasto de uma viagem.

Você terá 5 variáveis. Sendo elas:
  1- Preço do etanol;
  2- Preço da gasolina;
  3- O tipo de combustível que está no seu carro;
  2- Valor médio de combustível do carro por KM;
  3- Distância em KM da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

const precoetanol = 4.05;
const precogasolina = 4.77;
const kmporlitros = 9.5;
const distanciaemkm = 126.5;
const tipocombustivel = "gasolina";

const litroscomsumidos = distanciaemkm / kmporlitros;

if (tipocombustivel === "etanol") {
  const valorgasto = litroscomsumidos * precoetanol;
  console.log(valorgasto);
} else {
  const valorgasto = litroscomsumidos * precogasolina;
  console.log(valorgasto);
}
