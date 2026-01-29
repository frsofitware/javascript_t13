// --- RESOLUÇÃO DO EXERCÍCIO 9. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DETERMINANDO VARIÁVEIS

let somaPrincipal = 0
let somaSecundaria = 0
let elementosPrincipal = ""
let elementosSecundaria = ""

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("              ESTRUTURANDO MATRIZ 3 X 3               ")
console.log("======================================================")

// DEFINIÇÃO DA MATRIZ EM TAMANHO.

let matriz = new Array(3)

// ESTRUTURANDO A MATRIZ PARA RECEBER VALORES.

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    matriz[indiceLinha] = Array (3)
}

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha ++) {
    for (let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna ++){
        
        matriz [indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento: [${indiceLinha}][${indiceColuna}]:`)
    }
}
// ESTRUTURANDO A SOMA E FACILITANDO A BUSCA PELOS INDICES.

for(let somandoIndices = 0; somandoIndices < matriz.length; somandoIndices ++){
    somaPrincipal += matriz[somandoIndices][somandoIndices]
    elementosPrincipal += matriz[somandoIndices][somandoIndices] + " "

    let colunaSecundaria = matriz.length - 1 - somandoIndices
    somaSecundaria += matriz[somandoIndices][colunaSecundaria]
    elementosSecundaria += matriz[somandoIndices][colunaSecundaria] + " "
}

// SAÍDA COM OS CRITÉRIOS DEFINIDOS.

console.log("------------------------------------------------------")
console.log(`Elementos da diagonal principal: ${elementosPrincipal} `)
console.log(`Elementos da diagonal secundaria: ${elementosSecundaria} `)
console.log(`Soma da diagonal principal: ${somaPrincipal} `)
console.log(`Soma da diagonal secundaria: ${somaSecundaria}`)
console.log("------------------------------------------------------")