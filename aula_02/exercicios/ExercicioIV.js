// --- RESOLUÇÃO DO EXERCÍCIO 4. ---

"use strict"

// DEFIINDO VARIÁVEIS.

const leia = require('readline-sync')

let numeroi
let numeroii
let numeroiii
let numeroiv
let calculo

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================");
console.log("             CÁLCULO DE DIFERENÇA DE PRODUTOS         ");
console.log("======================================================");

// INSERÇÃO DE VALORES.

numeroi = leia.questionFloat('Insira o primeiro valor: ')
numeroii = leia.questionFloat('Insira o segundo valor: ')
numeroiii = leia.questionFloat('Insira o terceiro valor: ')
numeroiv = leia.questionFloat('Insira o quarto valor: ')

// CÁLCULO DA DIFERENÇA DOS VALORES INSERIDOS.

calculo = (numeroi * numeroii) - (numeroiii * numeroiv)

// SAÍDA COM O RESULTADO DA DIFERENÇA.

console.log("------------------------------------------------------");
console.log("Diferença entre os valores: " + calculo)
console.log("======================================================");