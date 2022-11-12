/*function escrevaMeuNome (nome) {
  console.log('My name is ' + nome);
}

escrevaMeuNome ('Raquel')

function maioridade (idade) {
  if (idade >= 18) {
    console.log ('Maior de idade')
  } else {
    console.log ('Menor de idade')
  }
}

maioridade (25)

function aplicardesconto (valor, desconto) {
  return (valor - (valor * (desconto/100)));
}

function aplicarjuros (valor, juros) {
  return (valor + (valor * (juros/100)));
}

const etiqueta = 240;
const formadepagamento = 9;

if (formadepagamento === 1) {
  console.log (aplicardesconto (etiqueta,10));
} else if (formadepagamento === 2) {
  console.log (aplicardesconto (etiqueta,15))
} else if (formadepagamento === 3) {
  console.log (etiqueta)
} else {
  console.log (aplicarjuros (etiqueta,10))
}*/

function incrementarJuros(valor, percentualDeJuros) {
  const incremento = (percentualDeJuros / 100) * valor;
  return valor + incremento;
}

incrementarJuros(150/10)
