let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")


function trocarImagem (endereco) {
    imagem.src = endereco

}

function trocaCor (cor) {
    circulo.style.background = cor
}