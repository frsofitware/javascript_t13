// --- RESOLUÇÃO DO EXERCÍCIO 5. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DEFININDO VARIÁVEIS.

let numero
let somaPositivos = 0

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("                 SOMA DOS POSITIVOS                   ")
console.log("======================================================")

// ESTRUTURA QUE RECEBE OS NÚMEROS.

do {
    numero = leia.questionInt("Digite um numero: ")
    
    if(numero > 0){
        somaPositivos += numero
    }

// DEFINIÇÃO DE CRITÉRIO PARA INTERROMPER O LOOP.

} while(numero !== 0)

// SAÍDA COM O RESULTADO DA SOMA DOS NÚMEROS POSITIVOS.

console.log("------------------------------------------------------")
console.log(`A soma dos números positivos é: ${somaPositivos}`)
console.log("------------------------------------------------------")