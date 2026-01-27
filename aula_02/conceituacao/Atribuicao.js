// --- CONCEITUAÇÃO: OPERADORES DE ATRIBUIÇÃO ---
// Atribuindo variaveis e operações pré-definidas.

"use strict"

// 1. Atribuição Simples (=): Define o valor inicial de uma variável.
let pontosXP = 100

// --- FUNCIONAMENTO DOS CONCEITOS NA PRÁTICA ---

console.log("==================================================================")
console.log("             SISTEMA DE PONTUAÇÃO (OPERADORES)                    ")
console.log("==================================================================")

console.log(`Pontuação Inicial: ${pontosXP}`);

// 2. Atribuição de Adição (+=)
// É o mesmo que: pontosXP = pontosXP + 50
pontosXP += 50; 
console.log(`Fez um exercício (+50 XP): ${pontosXP}`);

// 3. Atribuição de Subtração (-=)
// É o mesmo que: pontosXP = pontosXP - 10
pontosXP -= 10; 
console.log(`Esqueceu um ponto e vírgula (-10 XP): ${pontosXP}`);

// 4. Atribuição de Multiplicação (*=)
// É o mesmo que: pontosXP = pontosXP * 2
pontosXP *= 2; 
console.log(`Bônus de Mentor: Dobrou os pontos! (*2): ${pontosXP}`);

// 5. Atribuição de Divisão (/=)
// É o mesmo que: pontosXP = pontosXP / 2
pontosXP /= 2; 
console.log(`Dividiu os pontos com o squad (/2): ${pontosXP}`);

// 6. Incremento (++) e Decremento (--)
// Atalho para somar ou subtrair exatamente 1
pontosXP++; 
console.log(`Ganhou 1 ponto de presença (++): ${pontosXP}`);

console.log("==================================================================")