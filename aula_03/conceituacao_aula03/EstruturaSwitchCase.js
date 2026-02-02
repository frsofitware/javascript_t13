// --- CONCEITUAÇÃO: SWITCH ---
// SWITCH É UM LAÇO CONDICIONAL QUE SE ASSEMELHA COM
// O IF EM PROPÓSITO, MUITAS VEZES PODENDO SER 
// SUBSTITUIDO PELO MESMO. PORÉM SUA EXECUÇÃO AGE 
// COMO UM MENU DE SELEÇÕES, ONDE A EQUIVALÊNCIA DA
// VARIÁVEL OU DO INPUT PODE ATRELAR UM VALOR 
// PRÉ-DEFINIDO A SER EXECUTADO/VINCULADO


// --- FUNCIONAMENTO DOS CONCEITOS NA PRÁTICA ---

const leia = require("readline-sync");

console.log("======================================================")
console.log("             CALCULADORA COM SWITCH CASE              ")
console.log("======================================================")
console.log("(+) - Soma                                            ")
console.log("(-) - Subtração                                       ")
console.log("(x) - Multiplicação                                   ")
console.log("(/) - Divisão                                         ")
console.log("======================================================")
console.log("                                                      ")

// ENTRADA DE DADOS PARA COMPARAÇÃO

let numero1 = leia.questionFloat("Digite o primeiro numero: ", 
                                {limitMessage: 'Digite um numero float'}
                                )

let numero2 = leia.questionFloat("Digite o segundo numero: ", 
                                {limitMessage: 'Digite um numero float'}
                                )

let operacao = leia.keyIn("Digite a operacao: ")
 
// USO DO SWITCH COMO UM MENU ONDE O USUÁRIO DETERMINA
// QUAL OPERAÇÃO SERÁ FEITA A PARTIR DE SUA ENTRADA.

switch(operacao){
    case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
    break

    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`)
    break

    case "x":
        console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`)
    break

    case "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
    break

// DEFINE UM ÚLTIMO BLOCO DE AÇÃO DEFAULT A SER EXECUTADO
// CASO O INPUT NÃO SEJA EQUIVALENTE A NENHUMA DAS OPÇÕES
// DEFINIDAS ANTERIORMENTE NA ESTRUTURA SWITCH CASE.

    default:
        console.log("Operacao Invalida!")
}