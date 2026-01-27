// --- RESOLUÇÃO DO EXERCÍCIO 1. ---

"use strict"

// DEFIINDO VARIÁVEIS.

const leia = require('readline-sync')
let salario
let abono
let novoSalario

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================");
console.log("             SISTEMA DE AJUSTE SALARIAL               ");
console.log("======================================================");

// INSERÇÃO DE VALORES (SALÁRIO E ABONO).

salario = leia.questionFloat('Insira o valor do seu salario: ')

abono = leia.questionFloat('Insira o valor do abono: ')

// CALCULO DO NOVO SALÁRIO.

novoSalario = salario + abono

// SAÍDA DO CALCULO COM O VALOR DO NOVO SALÁRIO.

console.log("------------------------------------------------------")
console.log(`Novo salário: ${formatadorMoeda.format(novoSalario)}`)
console.log("======================================================")