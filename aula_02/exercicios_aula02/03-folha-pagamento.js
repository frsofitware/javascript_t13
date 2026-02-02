// --- RESOLUÇÃO DO EXERCÍCIO 3. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// FORMATANDO A SAÍDA EM REAIS.

const moeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("             SISTEMA DE FOLHA DE PAGAMENTO            ")
console.log("======================================================")

// INPUT DE VALORES (SALÁRIO BRUTO, ADICIONAL NOTURNO, HORAS EXTRAS E DESCONTOS).

let salarioBruto = leia.questionFloat('Salario Bruto: ')
let adicionalNoturno = leia.questionFloat('Adicional Noturno: ')
let horasExtras = leia.questionFloat('Horas Extras: ')
let descontos = leia.questionFloat('Descontos: ')

// CÁLCULO DE SALÁRIO LÍQUIDO

let salarioLiquido =  salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

// SAÍDA DO CÁLCULO COM O VALOR DO SALÁRIO LÍQUIDO (FORMATADO EM REAIS).

console.log("------------------------------------------------------")
console.log(`Salário Líquido: ${moeda.format(salarioLiquido)}`);
console.log("======================================================")