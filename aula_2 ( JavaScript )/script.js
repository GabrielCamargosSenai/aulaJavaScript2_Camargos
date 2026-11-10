/* Black Dog - Led Zeppelin */

let tela = document.querySelector("#tela-de-pintura"); //Busca um elemento do HTML com regras do CSS
let corVermelho = document.querySelector("#pincel-vermelho");
let corVerde = document.querySelector("#pincel-verde");
let corAzul = document.querySelector("#pincel-azul");
let corRoxo = document.querySelector("#pincel-roxo");
let corPreto = document.querySelector("#pincel-preto");
let corAmarelo = document.querySelector("#pincel-amarelo");
let corRosa = document.querySelector("#pincel-rosa");
let corMarrom = document.querySelector("#pincel-marrom");
let corLaranja = document.querySelector("#pincel-laranja");

corVermelho.addEventListener("click", vermelho);
corVerde.addEventListener("click", verde);
corAzul.addEventListener("click", azul);
corRoxo.addEventListener("click", roxo);
corPreto.addEventListener("click", preto);
corAmarelo.addEventListener("click", amarelo);
corRosa.addEventListener("click", rosa);
corMarrom.addEventListener("click", marrom);
corLaranja.addEventListener("click", laranja);
let nomeCor = document.querySelector("h3")

function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = "Vermelho"; //Le e altera todo o conteúdo de uma TAG
}

function verde(){
    tela.style.background = "green";
    nomeCor.innerHTML = "Verde"; //Le e altera todo o conteúdo de uma TAG
}

function azul(){    
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul"; //Le e altera todo o conteúdo de uma TAG
}

function roxo(){    
    tela.style.background = "purple";
    nomeCor.innerHTML = "Roxo"; //Le e altera todo o conteúdo de uma TAG
}

function preto(){    
    tela.style.background = "black";
    nomeCor.innerHTML = "Preto"; //Le e altera todo o conteúdo de uma TAG
}

function amarelo(){    
    tela.style.background = "yellow";
    nomeCor.innerHTML = "Amarelo"; //Le e altera todo o conteúdo de uma TAG
}

function rosa(){    
    tela.style.background = "pink";
    nomeCor.innerHTML = "Rosa"; //Le e altera todo o conteúdo de uma TAG
}

function marrom(){    
    tela.style.background = "brown";
    nomeCor.innerHTML = "Marrom"; //Le e altera todo o conteúdo de uma TAG
}

function laranja(){    
    tela.style.background = "orange";
    nomeCor.innerHTML = "Laranja"; //Le e altera todo o conteúdo de uma TAG
}