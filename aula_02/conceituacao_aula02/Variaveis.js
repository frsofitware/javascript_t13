// --- CONCEITUAÇÃO: TIPOS DE DADOS EM JAVASCRIPT ---
// O JAVASCRIPT POSSUI TIPOS DINÂMCOS, O QUE SIGNIFICA 
// QUE UMA VARIÁVEL NÃO PRECISA TER UM TIPO FIXO DECLARADO.

"use strict"

// STRING: TEXTOS EM GERAL.

let nome = 'Sofia'

// NUMBER: NÚMEROS (INTEIROS OU DECIMAIS).

let idade = 23

// BOOLEAN: VALORES LÓGICOS (VERDADEIRO OU FALSO).

let paulista = true

// 4. UNDEFINED: VARIÁVEL DECLARADA, MAS SEM VALOR DEFINIDO.

let statusCertificado

// 5. NULL: AUSÊNCIA INTENCIONAL DE VALOR (VAZIO).

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