// --- RESOLUÇÃO DO EXERCÍCIO 3. ---

"use strict"

// DEFIINDO VARIÁVEIS.

const leia = require('readline-sync')

let salarioBruto
let adicionalNoturno
let horasExtras
let descontos
let salarioLiquido

const moeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================");
console.log("             SISTEMA DE FOLHA DE PAGAMENTO            ");
console.log("======================================================");

// INSERÇÃO DE VALORES (SALÁRIO BRUTO, ADICIONAL NOTURNO, HORAS EXTRAS E DESCONTOS).

salarioBruto = leia.questionFloat('Salario Bruto: ')
adicionalNoturno = leia.questionFloat('Adcional Noturno: ')
horasExtras = leia.questionFloat('Horas Extras: ')
descontos = leia.questionFloat('Descontos: ')

// CÁLCULO DE SALÁRIO LÍQUIDO

salarioLiquido =  salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

// SAÍDA DO CÁLCULO COM O VALOR DO SALÁRIO LÍQUIDO.

console.log("------------------------------------------------------");
console.log(`Salário Líquido: ${moeda.format(salarioLiquido)}`);
console.log("======================================================");