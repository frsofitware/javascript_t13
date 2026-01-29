// --- RESOLUÇÃO DO EXERCÍCIO 4. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA USAR O INPUT.

const leia = require('readline-sync')

// DIAGRAMANDO CABEÇALHO.

console.log("======================================================")
console.log("                 CLASSIFICADOR ANIMAL                 ")
console.log("======================================================")

// REGULARIZANDO O INPUT: REMOVENDO ESPAÇOS EXTRAS COM (.trim) E IGNORANDO MAIÚSCULAS COM (.toLowerCase)

let primeiraDica = leia.question("1. Vertebrado ou Invertebrado? ").trim().toLowerCase();
let segundaDica = leia.question("2. Classe (Ave, Mamifero, Inseto ou Anelideo)? ").trim().toLowerCase();
let terceiraDica = leia.question("3. Alimentacao (Carnivoro, Onivoro, Herbivoro ou Hematofago)? ").trim().toLowerCase();

console.log("------------------------------------------------------")

// COMPARAMOS A ENTRADA COM O REGISTRO (EM MINUSCULO E SEM ACENTO).
// JOGAMOS A COMPARAÇÃO PARA O GRUPO DE VERTEBRADOS.

if (primeiraDica === "vertebrado") {
    if (segundaDica === "ave") {
        console.log(terceiraDica === "carnivoro" ? "O animal é a Águia!" : "O animal é a Pomba!");
    } 
    else if (segundaDica === "mamifero") {
        console.log(terceiraDica === "onivoro" ? "O animal é o Homem!" : "O animal é a Vaca!");
    }
} 

// COMPARAÇÃO DENTRO DO GRUPO DE INVERTEBRADOS.

else if (primeiraDica === "invertebrado") {
    if (segundaDica === "inseto") {
        console.log(terceiraDica === "hematofago" ? "O animal é a Pulga!" : "O animal é a Lagarta!");
    } 
    else if (segundaDica === "anelideo") {
        console.log(terceiraDica === "hematofago" ? "O animal é a Sanguessuga!" : "O animal é a Minhoca!");
    }
}

console.log("======================================================")