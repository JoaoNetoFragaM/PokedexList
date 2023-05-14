//pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");


//dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    //remover a classe do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imgs/sun.png")
    } else {
        //adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        //trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imgs/moon.png")

    }



});