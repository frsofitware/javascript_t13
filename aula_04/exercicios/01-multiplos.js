// --- RESOLUÇÃO DO EXERCÍCIO 1. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DIAGRAMANDO CABEÇALHO.

console.log("======================================================")
console.log("                 MULTIPLOS DE 3 E 5                   ")
console.log("======================================================")

// INPUT DO PRIMEIRO E ÚLTIMO MARCADOR DO INTERVALO DE NÚMEROS.

let numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ")
console.log("------------------------------------------------------")
let numero2 = leia.questionInt("Digite o segundo numero do intervalo: ")
console.log("------------------------------------------------------")

// VALIDAÇÃO DOS NÚMEROS A PARTIR DA PREMISSA QUE NÚMERO 1 NÃO PODE SER MAIOR QUE NÚMERO 2.

if(numero1 > numero2){
    console.log("Intervalo inválido!")
    console.log("------------------------------------------------------")
}

// ESTRUTURANDO A SAÍDA DOS NÚMEROS MULTIPLOS.

else {
    console.log(`No intervalo entre ${numero1} e ${numero2}:`)
    console.log("------------------------------------------------------")


// VALIDANDO A SAÍDA COM MULTIPLOS DE 3 E 5.

    for(let conjunto = numero1; conjunto <= numero2; conjunto ++){

        if(conjunto % 3 === 0 && conjunto % 5 === 0){

            console.log(`${conjunto} é múltiplo de 3 e 5`)

        }
    }
}

console.log("======================================================")