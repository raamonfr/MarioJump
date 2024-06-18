document.addEventListener('keydown', pulo)
const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const nuvem = document.querySelector('.nuvens')


function pulo() {
    mario.classList.add('pulo')

    //tempo pra remover a classe
    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 600)
}

const loop = setInterval(() => {
    //pega sempre a posicao do cano
    const posicaoCano = cano.offsetLeft;

    //pega sempre a posição do mario
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

    //pega sempre a posição das nuvens
    const posicaoNuvens = nuvem.offsetLeft
    
    //condições pra perder
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80) {
        //cano para de se mexer
        cano.style.animation = 'none'
        cano.style.left = `${posicaoCano}px`

        //nuvens para de se mexer
        nuvem.style.animation = 'none'
        nuvem.style.left = `${posicaoNuvens}px`

        //mario para aonde ele bateu
        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`

        //mario tronxo mortoKKKKKKK
        mario.src = 'mario-jump-images/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        //reseta o intervalo do setInterval
        clearInterval(loop)
    }
}, 10)
