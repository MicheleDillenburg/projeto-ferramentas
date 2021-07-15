var primeiro = [
    "1.jpg", "4.jpg", "3.jpg", "2.jpg"
]

var imagemAtual = 0
var slideTimeout = 0

var segundo = document.getElementById("bannerinicial")
var rotar = document.getElementById("rotar")
var tempoSlide = 5000

rotar.innerHTML = ''
primeiro.forEach((_, index) => {
    var classeAtual = index === 0 ? 'atual' : ''
    rotar.innerHTML += `<div data-index="${index}" class="quadradinho ${classeAtual}"></div>`
});

rotar.querySelectorAll('[data-index]').forEach(quadrinho => {
    quadrinho.onclick = function() {
        var index = this.dataset.index
        imagemAtual = Number(index) - 1
        rotacionarbanner()
    }
})

function rotacionarbanner() {

    clearTimeout(slideTimeout)

    if (imagemAtual + 1 >= primeiro.length) {
        imagemAtual = 0

    } else {
        imagemAtual = imagemAtual + 1
    }

    const quadradinhoAtual = rotar.querySelector('.atual')
    if (quadradinhoAtual) {
        quadradinhoAtual.classList.remove('atual')
    }

    var imagem = primeiro[imagemAtual]
    rotar.children[imagemAtual].classList.add('atual')

    segundo.src = `imagem/banner/${imagem}`

    slideTimeout = setTimeout(rotacionarbanner, tempoSlide)
}



slideTimeout = setTimeout(rotacionarbanner, tempoSlide)

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        document.getElementById('menu').classList.add('fixadoaotopo')
    } else {
        document.getElementById('menu').classList.remove('fixadoaotopo')
    }
})