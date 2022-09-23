const botao = document.getElementById('botao')

const inputNome = document.getElementById('nome')
console.log(inputNome.value)
const inputEmail = document.getElementById('email')
console.log(inputEmail.value)
const inputTelefone = document.getElementById('telefone')
console.log(inputTelefone.value)
const textAreaMensagem = document.getElementById('mensagem')
console.log(textAreaMensagem.value)

// const erroNome = document.querySelector('.erro-nome')
// const erroEmail = document.querySelector('.erro-email')
// const erroTelefone = document.querySelector('.erro-telefone')
// const erroMensagem = document.querySelector('.erro-mensagem')

const inputs = document.querySelectorAll('.inputs')
console.log(inputs.value)

botao.addEventListener('click', function () {
    botao.preventDefault ()
    const msgErro = document.querySelectorAll ('.erro')
    inputs.forEach((inputs, indice, array) => {
        if (inputs.value === '') {
            inputs.style.border = '2px solid #f52e2e'
            msgErro.classList.add('mostrar')
        } else {
            inputs.style.border = '2px solid #00c22b'
            msgErro.classList.remove('mostrar')
        }
    })
})

// botao.addEventListener ('click', function () {
//     if (inputNome.value === '') {
//         inputNome.style.border = '2px solid #f52e2e'
//         erroNome.classList.add ('mostrar')
//     } else {
//         inputNome.style.border = '2px solid #00c22b'
//         erroNome.classList.remove ('mostrar')
//     }

//     if (inputEmail.value === '') {
//         inputEmail.style.border = '2px solid #f52e2e'
//         erroEmail.classList.add ('mostrar')
//     } else {
//         inputEmail.style.border = '2px solid #00c22b'
//         erroEmail.classList.remove ('mostrar')
//     }

//     if (inputTelefone.value === '') {
//         inputTelefone.style.border = '2px solid #f52e2e'
//         erroTelefone.classList.add ('mostrar')
//     } else {
//         inputTelefone.style.border = '2px solid #00c22b'
//         erroTelefone.classList.remove ('mostrar')
//     }

//     if (textAreaMensagem.value === '') {
//         textAreaMensagem.style.border = '2px solid #f52e2e'
//         erroMensagem.classList.add ('mostrar')
//     } else {
//         textAreaMensagem.style.border = '2px solid #00c22b'
//         erroMensagem.classList.remove ('mostrar')
//     }
// })
