const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

function pulo() {
    mario.classList.add('pulo')

    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 600)
}

const loop = setInterval(() => {
    //pega sempre a posicao do cano
    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(posicaoMario)
    
    //condições pra perder
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80) {
        //cano para de se mexer
        cano.style.animation = 'none'
        cano.style.left = `${posicaoCano}px`

        //mario para aonde ele bateu
        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`

        //mario tronxo mortoKKKKKKK
        mario.src = 'mario-jump-images/game-over.png'
        
    }
}, 10)

document.addEventListener('keydown', pulo)