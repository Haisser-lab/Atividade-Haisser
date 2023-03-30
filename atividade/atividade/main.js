//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
// c) Imprima o array no console
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//e) Remova da lista o item de índice que o usuário escolheu.
    
//f) Imprima o array no console


// let A = prompt("Insira uma tarefa:")
// let B = prompt("Insira outra tarefa:")
// let C = prompt("Insira outra tarefa:")

// let tarefas = [A, B, C]

// let tarefaInicial = [A, B, C]

// console.log(tarefaInicial)

// let indice = parseInt(prompt("Qual tarefa você já realizou?\n 0, 1 ou 2"))

// tarefas.splice(indice)

// alert("Você tinha que "+tarefaInicial+", mas você ainda não "+tarefas+".")

// console.log(tarefas)


// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).

// function perfil(nome, idade, endereço, profissão) {
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}`
// }

// let nome = prompt("Insira seu nome:")
// let idade = prompt("Insira sua idade:")
// let endereço = prompt("Insira seu endereço:")
// let profissão = prompt("Insira sua profissão:")

// alert(perfil(nome, idade, endereço, profissão))

// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function soma(num1, num2) {
//     return num1 + num2
// }

// let num1 = 5
// let num2 = 10

// console.log(soma(num1, num2))

// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// function maiorque(num1, num2) {
//     if (num1 > num2) {
//         return num1
//     } else{
//         return num2
//     }
// }

// let num1 = 10
// let num2 = 5

// console.log(maiorque(num1, num2))

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function impar(num) {
//     if (num %2 === 0) {
//         return par = true
//     }
//     else {
//         return par = false
//     }
// }

// let num = 6

// console.log(impar(num))

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function mensagem(msg) {
//     let retorno = {
//         tamanho: msg.length,
//         maiúsculo: msg.toUpperCase()
//     }
//     return retorno
// }

// let msg = prompt("Insira uma mensagem:")

// console.log(mensagem(msg))

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b

// function soma(num1, num2) {
//     return num1 + num2
// }

// function subtração(num1, num2) {
//     return num1 - num2
// }

// function multiplicação(num1, num2) {
//     return num1 * num2
// }

// function divisão(num1, num2) {
//     return num1 / num2
// }
// let num1 = 5
// let num2 = 10

// console.log(soma(num1, num2))
// console.log(subtração(num1, num2))
// console.log(multiplicação(num1, num2))
// console.log(divisão(num1, num2))