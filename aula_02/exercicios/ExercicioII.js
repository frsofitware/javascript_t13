// --- RESOLUÇÃO DO EXERCÍCIO 2. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DIAGRAMANDO O CABEÇALHO.

console.log("         === CALCULADORA DE MÉDIAS ===      ")

// INPUT DE NOTAS (NOTAI, NOTAII, NOTAIII E NOTAIV).

let notai = leia.questionFloat('Nota 1: ')
let notaii = leia.questionFloat('Nota 2: ')
let notaiii = leia.questionFloat('Nota 3: ')
let notaiv = leia.questionFloat('Nota 4: ')

// CÁLCULO DE MÉDIA

let media = (notai + notaii + notaiii + notaiv) / 4

// SAÍDA DO CÁLCULO COM O VALOR DA MÉDIA.

console.log("------------------------------------------------------")
console.log('Média final: ' + media)
console.log("======================================================")