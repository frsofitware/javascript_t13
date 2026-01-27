// --- RESOLUÇÃO DO EXERCÍCIO 2. ---

"use strict"

// DEFIINDO VARIÁVEIS.

const leia = require('readline-sync')

let notai
let notaii
let notaiii
let notaiv
let media

// DIAGRAMANDO O CABEÇALHO.

console.log("         === CALCULADORA DE MÉDIAS ===      ")

// INSERÇÃO DE NOTAS.

notai = leia.questionFloat('Nota 1: ')
notaii = leia.questionFloat('Nota 2: ')
notaiii = leia.questionFloat('Nota 3: ')
notaiv = leia.questionFloat('Nota 4: ')

// CÁLCULO DE MÉDIA

media = (notai + notaii + notaiii + notaiv) / 4

// SAÍDA DO CÁLCULO COM O VALOR DA MÉDIA.

console.log("------------------------------------------------------")
console.log('Média final: ' + media)
console.log("======================================================")