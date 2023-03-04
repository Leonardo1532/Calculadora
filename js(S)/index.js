let interface = document.querySelector('.interface')

let buttom = document.querySelectorAll('.buttom')

let zero = document.querySelector('.zero')
let um = document.querySelector('.um')
let dois = document.querySelector('.dois')
let tres = document.querySelector('.tres')
let quatro = document.querySelector('.quatro')
let cinco = document.querySelector('.cinco')
let seis = document.querySelector('.seis')
let sete = document.querySelector('.sete')
let oito = document.querySelector('.oito')
let nove = document.querySelector('.nove')

let divisao = document.querySelector('.divisao')
let multiplicacao = document.querySelector('.multiplicacao')
let subtracao = document.querySelector('.subtracao')
let adicao = document.querySelector('.adicao')
let igual = document.querySelector('.igual')
let ponto = document.querySelector('.ponto')

let ultimoResultado = document.querySelector('.resultContent')

let arrayNumeros = [zero, um, dois, tres, quatro, cinco, seis, sete, oito, nove, ponto]

let arrayOperacoes = [divisao, multiplicacao, subtracao, adicao]

for (let index = 0; index < arrayNumeros.length; index++) {
    arrayNumeros[index].addEventListener('click', event => {
        if (interface.innerHTML == "0") {
            interface.innerHTML = event.target.getAttribute("value")

        } else {
            interface.innerHTML = interface.innerHTML + event.target.getAttribute("value")
        }
    })
}

for (let index = 0; index < arrayOperacoes.length; index++) {
    arrayOperacoes[index].addEventListener('click', event => {
        if (interface.innerHTML != "0") {
            interface.innerHTML = interface.innerHTML + event.target.getAttribute("alt")
        }
    })
}

igual.addEventListener('click', event => {
    let resultado
    let split = interface.innerHTML.split(" ")

    console.log(split)

    let number1 = parseFloat(split[0])
    console.log(number1)
    let number2 = parseFloat(split[2])
    console.log(number2)

    if (split.length == 3) {
        switch (split[1]) {
            case "/":
                resultado = number1 / number2
                if (parseInt(resultado) != parseFloat(resultado)) {
                    interface.innerHTML = (resultado).toFixed(1)
                } else {
                    interface.innerHTML = (resultado).toFixed(0)
                }
                break;
            case "x":
                resultado = number1 * number2
                if (parseInt(resultado) != parseFloat(resultado)) {
                    interface.innerHTML = (resultado).toFixed(1)
                } else {
                    interface.innerHTML = (resultado).toFixed(0)
                }
                break;
            case "-":
                resultado = number1 - number2
                if (parseInt(resultado) != parseFloat(resultado)) {
                    interface.innerHTML = (resultado).toFixed(1)
                } else {
                    interface.innerHTML = (resultado).toFixed(0)
                }
                break;
            case "+":
                resultado = number1 + number2
                if (parseInt(resultado) != parseFloat(resultado)) {
                    interface.innerHTML = (resultado).toFixed(1)
                } else {
                    interface.innerHTML = (resultado).toFixed(0)
                }
                break;
        }
    } else {
        alert("Só é possivel fazer uma operação por vez!!")
    }

    ultimoResultado.innerHTML = interface.innerHTML

    window.localStorage.setItem("LastResult", ultimoResultado.innerHTML)

    if (ultimoResultado.innerHTML == 0) {
        window.addEventListener("load", ValorLocalStorage)
    }

    function ValorLocalStorage() {
        ultimoResultado.innerHTML = window.localStorage.getItem("LastResult")
    }
})
