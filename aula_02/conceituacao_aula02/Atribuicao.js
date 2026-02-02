// --- CONCEITUAÇÃO: OPERADORES DE ATRIBUIÇÃO ---
// ATRIBUINDO VARIÁVEIS E VALORES PRÉ-DEFINIDOS.

"use strict"

// 1. ATRIBUIÇÃO SIMPLES (=): DEFINE O VALOR INICIAL DE UMA VARIÁVEL.
let pontosXP = 100

// --- FUNCIONAMENTO DOS CONCEITOS NA PRÁTICA ---

console.log("==================================================================")
console.log("             SISTEMA DE PONTUAÇÃO (OPERADORES)                    ")
console.log("==================================================================")

console.log(`Pontuação Inicial: ${pontosXP}`)

// ATRIBUIÇÃO DE ADIÇÃO (+=)
// É O MESMO QUE: pontosXP = pontosXP + 50

pontosXP += 50
console.log(`Fez um exercício (+50 XP): ${pontosXP}`)

// ATRIBUIÇÃO DE SUBTRAÇÃO (-=)
// É O MESMO QUE: pontosXP = pontosXP - 10

pontosXP -= 10
console.log(`Esqueceu um ponto e vírgula (-10 XP): ${pontosXP}`)

// ATRIBUIÇÃO DE SUBTRAÇÃO (*=)
// É O MESMO QUE: pontosXP = pontosXP * 2

pontosXP *= 2 
console.log(`Bônus de entrega a cima do que o pedido: Dobrou os pontos! (*2): ${pontosXP}`)

// ATRIBUIÇÃO DE DIVISÃO (/=)
// É O MESMO QUE: pontosXP = pontosXP / 2
pontosXP /= 2
console.log(`Dividiu os pontos com o squad (/2): ${pontosXP}`)
console.log("==================================================================")