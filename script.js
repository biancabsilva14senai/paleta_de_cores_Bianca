let tela = document.querySelector("#tela-de-pintura");
let corVermelho = document.querySelector("#pincel-vermelho");
let corLaranja = document.querySelector("#pincel-laranja");
let corAmarelo = document.querySelector("#pincel-amarelo");
let corVerde = document.querySelector("#pincel-verde");
let corAzul = document.querySelector("#pincel-azul");
let corAzulescuro = document.querySelector("#pincel-azulescuro");
let corRoxo = document.querySelector("#pincel-roxo");
let corRosa = document.querySelector("#pincel-rosa");
let corPink = document.querySelector("#pincel-pink");

corVermelho.addEventListener("click", vermelho);
corLaranja.addEventListener("click", laranja);
corAmarelo.addEventListener("click", amarelo);
corVerde.addEventListener("click", verde);
corAzul.addEventListener("click", azul);
corAzulescuro.addEventListener("click", azulescuro);
corRoxo.addEventListener("click", roxo);
corRosa.addEventListener("click", rosa);
corPink.addEventListener("click", pink);
let nomeCor = document.querySelector("h3");

function vermelho(){
    tela.style.background = "rgb(189, 10, 10)";
    nomeCor.innerHTML = "Vermelho";
}

function laranja(){
    tela.style.background = "rgb(216, 124, 3)";
    nomeCor.innerHTML = "Laranja";
}

function amarelo(){
    tela.style.background = "rgb(252, 239, 136)";
    nomeCor.innerHTML = "Amarelo";
}

function verde(){
    tela.style.background = "rgb(0, 120, 0)";
    nomeCor.innerHTML = "Verde";
}

function azul(){
    tela.style.background = "rgb(69, 69, 225)";
    nomeCor.innerHTML = "Azul";
}

function azulescuro(){
    tela.style.background = "rgb(2, 2, 112)";
    nomeCor.innerHTML = "Azul escuro";
}

function roxo(){
    tela.style.background = "rgb(120, 6, 120)";
    nomeCor.innerHTML = "Roxo";
}

function rosa(){
    tela.style.background = "rgb(216, 112, 147)";
    nomeCor.innerHTML = "Rosa";
}

function pink(){
    tela.style.background = "rgb(249, 31, 126)";
    nomeCor.innerHTML = "Pink";
}

