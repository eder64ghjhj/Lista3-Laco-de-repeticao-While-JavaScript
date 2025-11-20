const btn01 = document.querySelector('#ex01')
const btn02 = document.querySelector('#ex02')
const btn03 = document.querySelector('#ex03')
const btn04 = document.querySelector('#ex04')
const btn05 = document.querySelector('#ex05')
const btn06 = document.querySelector('#ex06')
const btn07 = document.querySelector('#ex07')
const btn08 = document.querySelector('#ex08')
const btn09 = document.querySelector('#ex09')
const btn10 = document.querySelector('#ex10')
const btn11 = document.querySelector('#ex11')
const btn12 = document.querySelector('#ex12')
const btn13 = document.querySelector('#ex13')
const btn14 = document.querySelector('#ex14')
const btn15 = document.querySelector('#ex15')
const res = document.querySelector('.res')

function clearDiv() {
    res.innerHTML = ""
}


btn01.addEventListener('click', () => {
    /* Faça um programa que exiba os números de 1 a 10 usando o loop "while". */

    clearDiv()

    contadora = 1

    while (contadora <= 10) {
        res.innerHTML += contadora + "<br>"
        contadora++
    }
})

btn02.addEventListener('click', () => {
    /* Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "while". */

    clearDiv()

    let contadora = 1
    let soma = 0

    while (contadora <= 100) {
        soma += contadora
        res.innerHTML = soma
        contadora++
    }
})

btn03.addEventListener('click', () => {
    /* Crie um programa que exiba os números pares de 1 a 50 usando o loop "while". */

    clearDiv()

    let contadora = 1

    while (contadora <= 50) {
        contadora % 2 == 0 ? res.innerHTML += contadora + "<br>" : "impar"
        contadora++
    }
})

btn04.addEventListener('click', () => {
    /* Faça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos. */

    clearDiv()

    let contadora = 1
    let soma = 0
    let media = 0

    while (contadora <= 5) {
        const numero = Number(prompt(`Digite o ${contadora}º número: `))
        soma += numero
        contadora++
    }
    media = soma / (contadora - 1)
    res.innerHTML = `A média dos números digitados por 5 é ${media}`
})

btn05.addEventListener('click', () => {
    /* Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while". */

    clearDiv()

    let numero = parseInt(prompt("Digite um número: "))

    let contadora = 1

    while (contadora <= 10) {
        res.innerHTML += `<p>${numero} X ${contadora} = ${numero * contadora} </p>`
        contadora++
    }
})

btn06.addEventListener('click', () => {
    /* Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while". */

    clearDiv()

    let numero = parseInt(prompt("Digite um número: "))

    let contadora = 1

    while (contadora <= numero) {
        if (numero % contadora == 0) {
            res.innerHTML += contadora + "<br>"
        }
        contadora++
    }
})

btn07.addEventListener('click', () => {
    /*Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while"*/

    clearDiv()

    let numero = parseInt(prompt("Digite um número: "))

    let contadora = 2
    let numeroPrimo = true

    if (numero <= 1) {
        numeroPrimo = false
    }

    else {
        while (contadora < numero) {
            if (numero % contadora == 0) {
                numeroPrimo = false
                break
            }
            contadora++
        }
    }

    if (numeroPrimo) {
        alert(`número ${numero} é primo`)
    }

    else {
        alert(`número ${numero} não é primo`)
    }

})

btn08.addEventListener('click', () => {

    clearDiv()

    /* Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while" */

    let numero = parseInt(prompt("Digite um número: "))
    contadora = 1

    let termo01 = 0
    let termo02 = 1

    while (contadora <= numero) {
        res.innerHTML += termo01 + "<br>"

        let termo03 = termo01 + termo02

        termo01 = termo02
        termo02 = termo03
        contadora++
    }
})

btn09.addEventListener('click', () => {

    clearDiv()

    /* Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "while" e exiba a média das idades. */

    let contadora = 1
    let soma = 0
    const totalPessoas = 5

    while (contadora <= 5) {

        let nome = prompt(`Digite o nome da ${contadora}° pessoa: `)
        let idade = parseInt(prompt(`Digite a ${contadora}° idade: `))
        soma += idade

        contadora++
    }

    console.log(contadora)

    let media = soma / totalPessoas

    res.innerHTML = (`A média das 5 idades é ${media}`)

})

btn10.addEventListener('click', () => {

    clearDiv()

    /*Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "while".*/

    let penultimo = 0
    let ultimo = 1
    let contadora = 1

    while (contadora <= 20) {

        res.innerHTML += `${contadora}° - ` + penultimo + "<br>"

        let atual = penultimo + ultimo

        penultimo = ultimo
        ultimo = atual

        contadora++
    }

})

btn11.addEventListener('click', () => {

    clearDiv()

    /* Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while" */

    let numero = parseInt(prompt("Digite um número: "))
    let contadora = 1
    let soma = 0

    while (contadora <= numero) {

        if (contadora % 2 == 0) {
            soma += contadora
        }

        contadora++
    }

    res.innerHTML = `A soma dos números pares de 1 a ${numero} é ${soma}`





})

btn12.addEventListener('click', () => {

    clearDiv()

    /* Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "while" */

    let contadora = 1

    while (contadora <= 50) {

        res.innerHTML += contadora + "<br>"

        contadora = contadora + 2
    }

})

btn13.addEventListener('click', () => {

    clearDiv()

    /* Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while" */

    let numero = parseInt(prompt("Digite um número: "))

    let numeroString = numero.toString()
    let contadora = 0

    while (contadora < numeroString.length) {
        res.innerHTML += numeroString.charAt(contadora) + "<br>"
        contadora++
    }

})

btn14.addEventListener('click', () => {

    clearDiv()

    /*Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while".*/

    let numero = parseInt(prompt("Digite um número: "))
    let contadora = 1
    let fatorial = 1


    while (contadora <= numero) {
        fatorial = fatorial * contadora
        contadora++
    }

    res.innerHTML = fatorial

})

btn15.addEventListener('click', () => {

    clearDiv()

    /* Crie um programa que leia o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exiba a média das idades. */

    let somaIdade = 0;
    let contador = 0;


    while (true) {

        let nome = prompt(`Digite um nome (ou "fim" para parar):`);
        let nomeGrande = nome.toUpperCase();


        if (nomeGrande == "FIM") {
            break;
        }

        let idade = parseInt(prompt(`Digite a idade de ${nome}:`));

        somaIdade += idade;
        contador++;
    }

    let media = 0;

    if (contador > 0) {

        media = somaIdade / contador;
        res.innerHTML = `A média das ${contador} idades digitadas é ${media}.`;
    } else {

        res.innerHTML = "Nenhuma idade foi informada.";
    }

})