//Obj 1 - Ao clicar enviar se não tiver preenchido o campo, mostrar a msg de erro (campo obrigatório) embaixo de cada input e pintar o campo de vermelho.

//Passo 1 - Quando o usuário clicar.
//Passo 2 - É necessário que o programa verifique se os campos (input e textarea) estão vazios. 
//Passo 3 - Em caso positivo, tranformar a borda dos campos em vermelha e fazer aparecer uma msg de erro abaixo deles.

const botao = document.getElementById ('botao')

const inputNome = document.getElementById ('nome')
console.log (inputNome.value)
const inputEmail = document.getElementById ('email')
console.log (inputEmail.value)
const inputTelefone = document.getElementById ('telefone')
console.log (inputTelefone.value)
const textAreaMensagem = document.getElementById ('mensagem')
console.log (textAreaMensagem.value)

const inputObrigatorio = document.getElementById ('obrigatorio')
console.log (inputObrigatorio)

botao.addEventListener ('click', function () {   
    if (inputNome.value == '') {
        inputNome.style.border = '2px solid #f52e2e'
    } else if (inputNome.value == '???') {
        inputNome.style.border = '2px solid #00c22b'
    }

    if (inputEmail.value == '') {
        inputEmail.style.border = '2px solid #f52e2e'
    } else if (inputEmail.value == '???') {
        inputEmail.style.border = '2px solid #00c22b'
    }

    if (inputTelefone.value == '') {
        inputTelefone.style.border = '2px solid #f52e2e'
    } else if (inputTelefone.value == '???') {
        inputTelefone.style.border = '2px solid #00c22b'
    }

    if (textAreaMensagem.value == '') {
        textAreaMensagem.style.border = '2px solid #f52e2e'
    } else if (textAreaMensagem.value == '???') {
        textAreaMensagem.style.border = '2px solid #00c22b'
    }
})

//Passo 1 - Quando o usuário clicar.

    //pegar o conteúdo do campo, possivelmente com o innerHTML ou VALUE


//Obj 2 - Ao clicar, estando tudo preenchido, deixar a borda verde.

//Quando o usuário clicar, e o valor retornado for diferente de vazio, colocar uma borda verde nos campos (input e textarea).