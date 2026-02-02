// --- CONCEITUAÇÃO: LAÇO IF, ELSE IF E ELSE ---
// O LAÇO CONDICIONAL IF, ELSE IF E ELSE É USADO 
// PARA DETERMINAR PARA O PROGRAMA SE, A PARTIR DE 
// UMA VERIFICAÇÃO DE COMPARAÇÃO (BOOLEANA) AQUELE 
// BLOCO DE CÓDIGO DEVE SER EXECUTADO.

// --- FUNCIONAMENTO DOS CONCEITOS NA PRÁTICA ---


const leia = require("readline-sync")

console.log("======================================================")
console.log("               CALCULADORA DE APROVAÇÃO               ")
console.log("======================================================")

let media = leia.questionFloat("Digite a media do aluno: ", 
                                {limitMessage: 'Digite um numero float'}
                                )

console.log("------------------------------------------------------")


// SE A MÉDIA INSERIDA FOR IGUAL MAIOR OU IGUAL A 7 
// IMPRIME A MENSAGEM "ALUNO APROVADO".

if (media >= 7){
    console.log("Aluno Aprovado!")

}

// AGORA, SE A MÉDIA INSERIDA FOR MAIOR OU IGUAL A 5
// E MENOR QUE 7, IMPRIME A  MENSAGEM "ALUNO DE EXAME".

else if (media >= 5 && media < 7){
    console.log("Aluno de exame.")

}

//  POR FIM, SE NENHUMA DAS CONDIÇÕES A CIMA FOR 
// VERDADEIRA (A NOTA NÃO FOR MAIOR OU IGUAL A 7
// MUITO MENOS MAIOR OU IGUAL A 5 - E, SENDO ASSIM
// MENOR QUE SETE) IMPRIME A  MENSAGEM "ALUNO
// REPROVADO!".

else
    {
    console.log("Aluno Reprovado!");
}
console.log("======================================================")