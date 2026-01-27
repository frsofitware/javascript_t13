// --- CONCEITUAÇÃO: CONCATENAÇÃO & INTERPOLAÇÃO EM JAVA SCRIPT ---
// Podemos unir informações de string e variaveis 
// Por meio da Concatenação ou Interpolação.

"use strict"

let ong = "Generation Brasil"
let turma = "Turma JavaScript 13"

// 1. CONCATENAÇÃO: Unimos informações com o operador de mais (+).
let concatenacao = "A "+ turma + " da " + ong + " começou!"

// 2. INTERPOLAÇÃO: Simplificamos a estrutura com `` e referenciando a variaveis por meio do ${}.
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