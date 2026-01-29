// --- RESOLUÇÃO DO EXERCÍCIO 6. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DEFININDO VARIÁVEIS QUE SERÃO ATRIBUIDAS DENTRO DO SWITCH.

let nomeCargo
let taxaPercentual

// FORMATANDO A SAÍDA EM REAIS.

const formatadorSalario = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

// DIAGRAMANDO CABEÇALHO.

console.log("=================================================================");
console.log("                CALCULADORA DE REAJUSTE SALARIAL                 ");
console.log("=================================================================");
console.log("| CÓDIGO |        CARGO         |     PERCENTUAL DO AJUSTE      |");
console.log("|--------|----------------------|-------------------------------|");
console.log("|   1    | Gerente              |              10%              |");
console.log("|   2    | Vendedor             |               7%              |");
console.log("|   3    | Supervisor           |               9%              |");
console.log("|   4    | Motorista            |               6%              |");
console.log("|   5    | Estoquista           |               5%              |");
console.log("|   6    | Técnico de TI        |               8%              |");
console.log("=================================================================");

// INPUT PARA O NOME DO COLABORADOR E O CÓDIGO DO CARGO.

let nomeColaborador = leia.question("Nome do Colaborador: ")
let codigoCargo = leia.questionInt("Cargo (1-6): ")

// ESTRUTURA DO SWITCH PARA RELACIONAR O CÓDIGO DO CARGO, NOME DO CARGO E A TAXA PERCENTUAL A SER APLICADA.

switch(codigoCargo){

    case 1:
        nomeCargo = "Gerente"
        taxaPercentual = 0.1
        break
    
    case 2:
        nomeCargo = "Vendedor"
        taxaPercentual = 0.07
        break

    case 3:
        nomeCargo = "Supervisor"
        taxaPercentual = 0.09
        break

    case 4:
        nomeCargo = "Motorista"
        taxaPercentual = 0.06
        break

    case 5:
        nomeCargo = "Estoquista"
        taxaPercentual = 0.05
        break

    case 6:
        nomeCargo = "Técnico de TI"
        taxaPercentual = 0.08
        break

    default:
        console.log("------------------------------------------------------")
        console.log("Código Inválido! Por favor, insira um código válido.")
        console.log("======================================================")
        process.exit()

}

// INPUT  PARA O VALOR DO SALÁRIO.

let salario = leia.questionFloat("Salário: ")

// CALCULO DO REAJUSTE SALARIAL.

let reajusteSalario = salario + (salario * taxaPercentual)

// SAÍDA COM NOME DO COLABORADOR, NOME DO CARGO E SALARIO REAJUSTADO.

console.log("------------------------------------------------------")
console.log(`Nome colaborador: ${nomeColaborador}.`)
console.log(`Cargo: ${nomeCargo}.`)
console.log(`Salário: ${formatadorSalario.format(reajusteSalario)}.`)
console.log("======================================================")