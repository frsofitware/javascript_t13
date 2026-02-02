// --- CONCEITUAÇÃO: LAÇO IF TERNARIO (? :) ---
// O LAÇO CONDICIONAL IF TERNÁRIO É BEM SEMELHANTE
// A ATUAÇÃO DO LAÇO IF, ELSE IF E ELSE, PORÉM EM
// UM AMBIENTE DEFINIDO: ELE VALIDA UM IF SIMPLES 
// DE VALOR BOOLEANO E EXECUTA UMA AÇÃO QUE FOI 
// DETERMINADA NO CÓDIGO.

// --- FUNCIONAMENTO DOS CONCEITOS NA PRÁTICA ---

// RESOLVENDO COM A ESTRUTURA IF/ELSE.

const leia = require("readline-sync")

console.log("======================================================")
console.log("               CALCULADORA DE APROVAÇÃO               ")
console.log("======================================================")

let nota1, nota2, media;

nota1 = leia.questionFloat("Digite a primeira Nota: ")

console.log("------------------------------------------------------")

nota2 = leia.questionFloat("Digite a segunda Nota: ")

console.log("------------------------------------------------------")

media = (nota1 + nota2) / 2

if (media >= 6) {
  console.log("Aprovado!")
} else {
  console.log("Reprovado!")
}
console.log("------------------------------------------------------\n")

// RESOLVENDO COM A ESTRUTURA IF TERNARIO.

let notaI, notaII, resultadoMedia

console.log("======================================================")
console.log("               CALCULADORA DE APROVAÇÃO               ")
console.log("======================================================")


notaI = leia.questionFloat("Digite a primeira Nota: ")

console.log("------------------------------------------------------")

notaII = leia.questionFloat("Digite a segunda Nota: ")

console.log("------------------------------------------------------")

resultadoMedia = (notaI + notaII) / 2

console.log((resultadoMedia >= 6) ? "Aprovado!" : "Reprovado!")

console.log("------------------------------------------------------")