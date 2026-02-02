// --- CONCEITUAÇÃO: RELACIONAIS ---
// RELACIONAIS SÃO OPERADORES QUE ATRIBUEM UM VALOR BOOLEANO.

// SUA FUNÇÃO É COMPARAR SE A IGUALDADE DA EQUAÇÃO É VERDADEIRA
//  NO AMBITO DE MAIOR, MAIOR QUE, MENOR, MENOR QUE, IGUAL OU
//  ESTRITAMENTE IGUAL (EM VALOR E EM TIPO DA VARIÁVEL).

// --- FUNCIONAMENTO DOS CONCEITOS NA PRÁTICA ---

let a = 5, b = 6, c = 8, d = "8"

let comparacao1, comparacao2, comparacao3, comparacao4

// COMPARAÇÃO COM MAIOR QUE (>).

comparacao1 = a > b
console.log(`A é maior que B? ${comparacao1}`)

console.log("--------------------------------------------")

// COMPARAÇÃO COM MENOR QUE (<).

comparacao2 = a < c
console.log(`A é menor que C? ${comparacao1}`)

console.log("--------------------------------------------")

// COMPARAÇÃO COM MAIOR OU IGUAL QUE (>=).

comparacao3 = c >= d
console.log(`C é maior ou igual que D? ${comparacao3}`)

console.log("--------------------------------------------")

// COMAPRAÇÃO COM MENOR OU IGUAL QUE (<=).

comparacao3 = b <= c
console.log(`C é maior ou igual que D? ${comparacao3}`)

console.log("--------------------------------------------")

// COMPARAÇÃO COM ESTRITAMENTE IGUAL.

comparacao4 = c === d
console.log(`C é estritamente igual que D? ${comparacao4}`)

console.log("--------------------------------------------")