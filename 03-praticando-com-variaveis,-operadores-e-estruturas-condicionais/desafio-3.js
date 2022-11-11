/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado:

1- à vista débito, recebe 10% de desconto;
2- à vista dinheiro ou pix , recebe 15% de desconto;
3- em duas vezes, preço normal de etiqueta, sem juros;
4- acima de duas vezes, preço normal de etiqueta mais juros de 10%.*/

const produto = 240;
const formadepagamento = 2;

if (formadepagamento === 1) {
  console.log(produto - [produto * 0.1]);
} else if (formadepagamento === 2) {
  console.log(produto - [produto * 0.15]);
} else if (formadepagamento === 3) {
  console.log(produto);
} else {
  console.log(produto + [produto * 0.1]);
}
