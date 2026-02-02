// --- RESOLUÇÃO DO EXERCÍCIO 4. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("           CÁLCULO DE DIFERENÇA DE PRODUTOS           ")
console.log("======================================================")

// INPUT DE VALORES (NUMEROI, NUMEROII, NUMEROIII E NUMEROIV).

let numeroi = leia.questionFloat('Insira o primeiro valor: ')
let numeroii = leia.questionFloat('Insira o segundo valor: ')
let numeroiii = leia.questionFloat('Insira o terceiro valor: ')
let numeroiv = leia.questionFloat('Insira o quarto valor: ')

// CÁLCULO DA DIFERENÇA DO PRODUTO DOS VALORES INSERIDOS.

let calculo = (numeroi * numeroii) - (numeroiii * numeroiv)

// SAÍDA COM O RESULTADO DA DIFERENÇA.

console.log("------------------------------------------------------")
console.log("Diferença entre os valores: " + calculo.toFixed(1))
console.log("======================================================")