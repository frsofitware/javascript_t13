// --- RESOLUÇÃO DO EXERCÍCIO 4. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DEFININDO VARIÁVEIS CONTADORAS.

let backEnd = 0
let frontEndMulheres = 0
let mobileHomens40 = 0
let fullStackNB30 = 0
let totalPessoas = 0
let somaIdades = 0

// DEFININDO A SAÍDA DO LOOP.

let novoRegistro = "S"

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("                QUEREMOS CONHECER VOCÊ!               ")
console.log("======================================================")

while(novoRegistro.toUpperCase() === "S"){

// INPUT DA IDADE DO COLABORADOR.

    let idadeColaborador = leia.questionInt("Idade: ")
    console.log("------------------------------------------------------") 

// INPUT DE VALIDAÇÃO DA IDENTIDADE DE GÊNERO O/A/E.

    console.log("1. Mulher Cis\n2. Homem Cis\n3. Não Binário\n4. Mulher Trans\n5. Homem Trans\n6. Outros")
    let genero = leia.questionInt("Identidade de Genero: ")
  
// VALIDAÇÃO DO INPUT DO CODIGO INSERIDO EM UM PEQUENO LOOP.

    while (genero < 1 || genero > 6){ 
        console.log("Codigo invalido! Digite um numero entre 1 e 6.")
        genero = leia.questionInt("Identidade de Genero (1-6): ")
    }

    console.log("------------------------------------------------------")
    
// INPUT DE VALIDAÇÃO DA ÁREA DO COLABORADOR.

    console.log("1. Backend\n2. Frontend\n3. Mobile\n4. Full Stack")
    let area = leia.questionInt("Pessoa Desenvolvedora: ")

// VALIDAÇÃO DO INPUT DO CODIGO INSERIDO EM UM PEQUENO LOOP.

    while(area < 1 || area > 4){
         console.log("Codigo invalido! Digite um numero entre 1 e 4.")
         area = leia.questionInt("Pessoa Deselvolvedora (1-4): ")
        }

// ATRIBUIÇÃO A CADA GRUPO DEFINIDO COMO CRITÉRIO PARA A SAÍDA.

    if (area === 1){
        backEnd ++
    }

    if((genero === 1 || genero === 4) && area === 2){
        frontEndMulheres ++
    }

    if ((genero === 2 || genero === 5) && area === 3 && idadeColaborador > 40){
        mobileHomens40 ++
    }

    if(genero === 3 && area === 4 && idade <30){
        fullStackNB30 ++
    }

// SOMA GERAL DO REGISTRO.

    totalPessoas ++
    somaIdades += idadeColaborador

// CONFIRMAÇÃO DO RETORNO AO COMEÇO DO LOOP PARA UM NOVO REGISTRO.

    console.log("------------------------------------------------------")
    novoRegistro = leia.question("Deseja continuar (S/N): ")

}

// CÁLCULO DE MEDIA.

const media = (somaIdades / totalPessoas).toFixed(2)

console.log("------------------------------------------------------")

// SAÍDA COM OS PARAMETROS FILTRADOS.

console.log(`Total de pessoas desenvolvedoras Backend: ${backEnd}`)
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${frontEndMulheres}`)
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${mobileHomens40}`)
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${fullStackNB30}`)
console.log(`O número total de pessoas que responderam à pesquisa: ${totalPessoas}`)
console.log(`A média de idade das pessoas que responderam à pesquisa: ${media}`)