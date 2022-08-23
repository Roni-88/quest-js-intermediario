//Obj 1 - Ao clicar enviar se não tiver preenchido o campo, mostrar a msg de erro (campo obrigatório) embaixo de cada input e pintar o campo de vermelho.

//Passo 1 - Quando o usuário clicar.
//Passo 2 - É necessário que o programa verifique se os campos (input e textarea) estão vazios. 
//Passo 3 - Em caso positivo, tranformar a borda dos campos em vermelha e fazer aparecer uma msg de erro abaixo deles.

const botao = document.getElementById ('botao')

const inputNome = document.getElementById ('nome')
console.log (inputNome.value)
const inputEmail = document.getElementById ('email')
const inputTelefone = document.getElementById ('telefone')
const inputMensagem = document.getElementById ('mensagem')

let conteudoNome = inputNome.value
let conteudoEmail = inputEmail.value
let conteudoTelefone = inputTelefone.value
let conteudoMensagem = inputMensagem.value

botao.addEventListener ('click', function (clicar) {   
    if (inputNome.value === '') {
    inputNome.style.border = '#f52e2e'
    } else if (inputNome.value === '') {
        inputNome.style.border = '#00c22b'
    }


    clicar()
})

function clicar() {
    inputNome.innerHTML = ""
}


//Passo 1 - Quando o usuário clicar.

    //pegar o conteúdo do campo, possivelmente com o innerHTML ou VALUE


//Obj 2 - Ao clicar, estando tudo preenchido, deixar a borda verde.

//Quando o usuário clicar, e o valor retornado for diferente de vazio, colocar uma borda verde nos campos (input e textarea).