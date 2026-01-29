// --- RESOLUÇÃO DO EXERCÍCIO 1. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// FORMATANDO A SAÍDA EM REAIS.

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("             SISTEMA DE AJUSTE SALARIAL               ")
console.log("======================================================")

// INPUT DE VALORES (SALÁRIO E ABONO).

let salario = leia.questionFloat('Insira o valor do seu salario: ')
let abono = leia.questionFloat('Insira o valor do abono: ')

// CALCULO DO NOVO SALÁRIO.

let novoSalario = salario + abono

// SAÍDA DO CALCULO COM O VALOR DO NOVO SALÁRIO (FORMATADO EM REAIS).

console.log("------------------------------------------------------")
console.log(`Novo salário: ${formatadorMoeda.format(novoSalario)}`)
console.log("======================================================")