// --- RESOLUÇÃO DO EXERCÍCIO 2. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DIAGRAMANDO CABEÇALHO.

console.log("======================================================")
console.log("          ANALISADOR DE PARIDADE E SINAL              ")
console.log("======================================================")

// INPUT DO NÚMERO.

let numero = leia.questionInt("Digite um numero: ")

// DEFINIÇÃO DE PARES (COMPARANDO SE SÃO POSITIVOS OU NEGATIVOS).

if(numero % 2 === 0){
    if(numero >= 0) {
        console.log("------------------------------------------------------")
        console.log(`O Numero ${numero} é par e positivo!`)
        console.log("======================================================")
    
    } else {
        console.log("------------------------------------------------------")
        console.log(`O Numero ${numero} é par e negativo!`)
        console.log("======================================================")
    }
}

// DEFINIÇÃO DE ÍMPARES (COMPARANDO SE SÃO POSITIVOS OU NEGATIVOS).

else{
    if(numero >= 0){
    console.log("------------------------------------------------------")
    console.log(`O Numero ${numero} é ímpar e positivo!`)
    console.log("======================================================")
    } else {
        console.log("------------------------------------------------------")
        console.log(`O Numero ${numero} é ímpar e negativo!`)
        console.log("======================================================")
    }
}