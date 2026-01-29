// --- RESOLUÇÃO DO EXERCÍCIO 1. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')


// DIAGRAMANDO CABEÇALHO.

console.log("======================================================")
console.log("               COMPARATIVO DE VALORES                 ")
console.log("======================================================")

// INPUT DOS NÚMEROS A, B E C.

let numeroA = leia.questionInt("DIGITE O NUMERO A: ")
let numeroB = leia.questionInt("DIGITE O NUMERO B: ")
let numeroC = leia.questionInt("DIGITE O NUMERO C: ")

// CALCULO DE SOMA PARA COMPARAÇÃO EM IF, ELSE IF & ELSE.

let soma = numeroA + numeroB

// ESTRUTURA DE CONDIÇÕES PARA COMPARAÇÃO ENTRE A + B.

if(soma > numeroC){
    console.log("------------------------------------------------------")
    console.log(`${numeroA} + ${numeroB} = ${soma} > ${numeroC}`)
    console.log("------------------------------------------------------")
    console.log("A soma de A + B é Maior do que C.")
    console.log("======================================================")
}

else if(soma < numeroC){
    console.log("------------------------------------------------------")
    console.log(`${numeroA} + ${numeroB} = ${soma} < ${numeroC}`)
    console.log("------------------------------------------------------")
    console.log("A soma de A + B é Menor do que C.")
    console.log("======================================================")
}

else{
    console.log("------------------------------------------------------")
    console.log(`${numeroA} + ${numeroB} = ${soma} = ${numeroC}`)
    console.log("------------------------------------------------------")
    console.log("A soma de A + B é Igual a C.")
    console.log("======================================================")
}