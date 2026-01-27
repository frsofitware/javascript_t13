// --- CONCEITUAÇÃO: TIPOS DE DADOS EM JAVASCRIPT ---
// O JavaScript possui tipos dinâmicos, o que significa que uma 
// variável não precisa ter um tipo fixo declarado.

"use strict"

// STRING: Textos em geral.
let nome = 'Sofia'

// NUMBER: Números (inteiros ou decimais).
let idade = 23

// BOOLEAN: Valores lógicos (verdadeiro ou falso).
let paulista = true

// 4. UNDEFINED: Variável declarada, mas sem valor atribuído.
let statusCertificado

// 5. NULL: Ausência intencional de valor (vazio).
let preguicaDeEstudar = null

// --- FUNCIONAMENTO DOS CONCEITOS NA PRÁTICA ---

console.log("==================================================================")
console.log("          APRESENTAÇÃO DA ESTUDANTE - GENERATION BRASIL           ")
console.log("==================================================================")

console.log(`Nome: ${nome}  | Tipo: `, typeof(nome))
console.log(`Idade: ${idade} anos  | Tipo: `, typeof(idade))
console.log(`Moro no Rio de Janeiro, mas sou paulista? ${paulista} | Tipo: `, typeof(paulista))
console.log(`Status do certificado: ${statusCertificado} | Tipo: `, typeof(statusCertificado))
console.log(`Nivel de preguiça: ${preguicaDeEstudar}  | Tipo: `, typeof(preguicaDeEstudar))