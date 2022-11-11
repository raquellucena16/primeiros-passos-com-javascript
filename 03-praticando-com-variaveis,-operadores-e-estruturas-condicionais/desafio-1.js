/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e impreima a sua média e a sua classificaçãconforma a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre;
    if (media < 5) {
    const media = (nota1 + nota2 + nota3) / 3; 
    console.log(reprovado);
  } else if (media > 5 < 7) {
    const media = (nota1 + nota2 + nota3) / 3 
    console.log(recuperacao);
  } else if (media > 7) {
  const media = (nota1 + nota2 + nota3) / 3 
    console.log(aprovado);}*/

const nota1 = 7;
const nota2 = 7.5;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media <= 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
