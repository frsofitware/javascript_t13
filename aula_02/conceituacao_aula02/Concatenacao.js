// --- CONCEITUAÇÃO: CONCATENAÇÃO & INTERPOLAÇÃO EM JAVASCRIPT ---
// PODEMOS UNIR INFORMAÇÕES DE STRINGS E VARIÁVEIS
// POR MEIO DA CONCATENAÇÃO E INTERPOLAÇÃO.

"use strict"

let ong = "Generation Brasil"
let turma = "Turma JavaScript 13"

// 1. CONCATENAÇÃO: UNIMOS INFORMAÇÕES COM O SINAL DE MAIS (+).

let concatenacao = "A "+ turma + " da " + ong + " começou!"

// 2. INTERPOLAÇÃO: SIMPLIFICAMOS A ESTRUTURA COM `` E REFERENCIANDO AS VARIÁVEIS COM ${}.

let interpolacao = `A ${turma} da ${ong} começou!`

// --- FUNCIONAMENTO DOS CONCEITOS NA PRÁTICA ---

console.log("==================================================================")
console.log("                     VISUALIZANDO A APLICAÇÃO                     ")
console.log("==================================================================")

console.log("CONCATENAÇÃO:")
console.log(concatenacao)

console.log("------------------------------------------------------------------")

console.log("INTERPOLAÇÃO:")
console.log(interpolacao)