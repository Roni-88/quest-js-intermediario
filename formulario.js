//Obj 1 - Ao clicar enviar se não tiver preenchido o campo, mostrar a msg de erro (campo obrigatório) embaixo de cada input e pintar o campo de vermelho.

//Passo 1 - Quando o usuário clicar.
//Passo 2 - É necessário que o programa verifique se os campos (input e textarea) estão vazios. 
//Passo 3 - Em caso positivo, tranformar a borda dos campos em vermelha e fazer aparecer uma msg de erro abaixo deles.

const botao = document.getElementById ('botao')

//Passo 1 - Quando o usuário clicar.
botao.addEventListener ('click', function (event) {
    event.preventDefault()

    //pegar o conteúdo do campo, possivelmente com o innerHTML

    const inputNome = document.getElementById ('nome')
    console.log (inputNome.target.value)

    const inputEmail = document.getElementById ('email')
    console.log(inputEmail)

    const inputTelefone = document.getElementById ('telefone')
    console.log(inputTelefone)

    const inputMensagem = document.getElementById ('mensagem')
    console.log(inputMensagem)

})




//Obj 2 - Ao clicar, estando tudo preenchido, deixar a borda verde.

//Quando o usuário clicar, e o valor retornado for diferente de vazio, colocar uma borda verde nos campos (input e textarea).

