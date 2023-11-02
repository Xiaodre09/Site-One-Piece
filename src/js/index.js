// OBJETIVO 1 - quando clicar no botão do personagem na lista, marca como seliconado 
//passo 1 - pewgar os personagens no js para poder mostrar oi esconder ele
//passo 2 - adicionar a classe "Secionado" no personagem que o usúario selecionou

// passo 3 - verificar se já existia um personagem Selecionado, se sim, devemos remover a seleção dele
//OBJETIVO 2 - qunado clicar no botão do personagem mostrar as informações do personagem
//passo 1 - pegar os personagens no js pra poder mostrar ou esconder ele
//passo 3 - adicionar a classe "Selecionado" no personagem quye o úsuario selecionou
//passo 3 - verificar se já se existia um personagem selecionado, se seim, devemos remover a seleção dele

const botoes = document.querySelectorAll('.botao');
const personagens1 = document.querySelectorAll(".personagem")



botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarbotao();
        desselecionarPersonagem();


        botao.classList.add("selecionado");
        personagens1[indice].classList.add("selecionado")
    });

});



function desselecionarPersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}
