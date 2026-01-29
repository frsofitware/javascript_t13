// --- RESOLUÇÃO DO EXERCÍCIO 3. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DIAGRAMANDO CABEÇALHO.

console.log("======================================================")
console.log("          VERIFICAÇÃO PARA DOAÇÃO SANGUÍNEA           ")
console.log("======================================================")

// INPUT COM O NOME DO DOADOR, IDADE E VERIFICAÇÃO SE É A PRIMEIRA VEZ DOANDO SANGUE.

let nomeDoador = leia.question("Digite o Nome do doador: ")
let idadeDoador = leia.questionInt("Digite a Idade do doador: ")
let primeiraDoacao = leia.keyInYN("Primeira doação de sangue? (Y sim ou N para não) ")

// VERIFICAÇÃO SE O CANDIDATO ESTÁ DENTRO DA FAIXA ETÁRIA PERIMITIDA.

if(idadeDoador < 18 || idadeDoador > 69){
    console.log("------------------------------------------------------")
    console.log(`${nomeDoador} não está apto(a) para doar sangue!`)
    console.log("======================================================")
}

// CANDIDATO TEM MAIS DE 60 ANOS, VERIFICAMOS SE É A PRIMEIRA DOAÇÃO.

else if(idadeDoador >= 60 && primeiraDoacao){
    console.log("------------------------------------------------------")
    console.log(`${nomeDoador} não está apto(a) para doar sangue!`)
    console.log("======================================================")
}

// APROVA CANDIDATOS DENTRO DA FAIXA ETÁRIA (18 À 59) SENDO OU NÃO SENDO A PRIMEIRA DOAÇÃO.

else {
    console.log("------------------------------------------------------")
    console.log(`${nomeDoador} está apto(a) para doar sangue!`)
    console.log("======================================================")
}