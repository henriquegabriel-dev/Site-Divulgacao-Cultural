const botao = document.getElementById('botao');

botao.addEventListener("click", Aba_registrar);
botao.addEventListener("mouseover", cima);
botao.addEventListener("mouseout", fora);

function Aba_registrar(){

    window.location.href = "/tela_divulgar/descreverShow/body_descreverShows.html";

}

function cima(){
    botao.style.background = "rgb(115, 57, 141)"
    botao.style.color = "rgb(255, 240, 250)"
}

function fora(){
    botao.style.background = "rgb(250, 170, 250)"
    botao.style.color = "rgb(85, 3, 23)"
}