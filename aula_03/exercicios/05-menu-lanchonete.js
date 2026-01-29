// --- RESOLUÇÃO DO EXERCÍCIO 5. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DEFININDO VARIÁVEIS QUE SERÃO ATRIBUIDAS DENTRO DO SWITCH.

let produto
let preco

// DIAGRAMANDO CABEÇALHO.

console.log("====================================================")
console.log("                LANCHONETE GENERATION               ")
console.log("====================================================")
console.log("| CÓDIGO |      PRODUTO       |   PREÇO UNITÁRIO   |")
console.log("|--------|--------------------|--------------------|")
console.log("|   1    | Cachorro Quente    |      R$ 10.00      |")
console.log("|   2    | X-Salada           |      R$ 15.00      |")
console.log("|   3    | X-Bacon            |      R$ 18.00      |")
console.log("|   4    | Bauru              |      R$ 12.00      |")
console.log("|   5    | Refrigerante       |      R$  8.00      |")
console.log("|   6    | Suco de Laranja    |      R$ 13.00      |")
console.log("====================================================")

// INPUT PARA CÓDIGO DO PEDIDO E QUANTIDADE.

console.log("       Bem-vindo(a) à Lanchonete Generation!        ")
let codigoPedido = leia.questionInt("Qual o codigo do produto (1-6)? ")
let quantidade = leia.questionInt("Quantidade? ")

// ESTRUTURA DO SWITCH PARA RELACIONAR O CÓDIGO AO PRODUTO E PREÇO.

switch (codigoPedido){
    case 1:
        produto = "Cachorro Quente"
        preco = 10.00;
        break;
    case 2:
        produto = "X-Salada"
        preco = 15.00;
        break;
    case 3:
        produto = "X-Bacon"
        preco = 18.00;
        break;
    case 4:
        produto = "Bauru"
        preco = 12.00;
        break;
    case 5:
        produto = "Refrigerante"
        preco = 8.00;
        break;
    case 6:
        produto = "Suco de Laranja" 
        preco = 13.00;
        break;
    
    default:
        console.log("------------------------------------------------------")
        console.log("Código Inválido! Por favor, reinicie o pedido.")
        console.log("======================================================")
        process.exit()
}

// SOMA DO ITEM COM A QUANTIDADE SELECIONADA.

let valorTotal = quantidade * preco

// SAÍDA INFORMANDO O PEDIDO E O VALOR.

console.log("------------------------------------------------------")
console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
console.log("======================================================")