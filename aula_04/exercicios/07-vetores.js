// --- RESOLUÇÃO DO EXERCÍCIO 5. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DETERMINANDO O FATOR DE COMPARAÇÃO.

let encontrado = false

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("             BUSCA DE VALORES EM INDICES              ")
console.log("======================================================")

// DEFINIÇÃO DE VALORES DENTRO DO VETOR.

let vetor = [2 , 5, 1, 3, 4, 9, 7, 8, 10, 6]

// INPUT PARA DETERMINAR QUAL NÚMERO LOCALIZAR.

let buscaIndice = leia.questionInt("Digite o numero que voce deseja encontrar: ")

// ESTRUTURANDO O LAÇO DE PESQUISA DENTRO DO VETOR.

for(let indice = 0; indice < vetor.length; indice ++) {

// RETORNO COM O NÚMERO LOCALIZADO E POSIÇÃO DO ÍNDICE.

    if (vetor[indice] === buscaIndice){
        console.log("------------------------------------------------------")
        console.log(`O número ${buscaIndice} está localizado na posição: ${indice}`)
        console.log("------------------------------------------------------")
        encontrado = true
        break
    }
}

// RETORNO CASO O NÚMERO NÃO SEJA ENCONTRADO.

if(!encontrado){
    console.log("------------------------------------------------------")
    console.log(`O número ${buscaIndice} não foi encontrado!`)
    console.log("------------------------------------------------------")
}