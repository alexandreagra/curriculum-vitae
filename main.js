//HEADER FUNCTION
const body = document.body;
let ultimoScroll = 0;

window.addEventListener('scroll', () => {
    const scrollAtual = window.scrollY

    if (scrollAtual <= 0) {
        body.classList.remove('scroll-cima')
    }

    if (scrollAtual > ultimoScroll && !body.classList.contains('scroll-baixo')) {
        body.classList.remove('scroll-cima')
        body.classList.add('scroll-baixo')
    }

    if (scrollAtual < ultimoScroll && body.classList.contains('scroll-baixo')) {
        body.classList.remove('scroll-baixo')
        body.classList.add('scroll-cima')
    }

    ultimoScroll = scrollAtual;
})

const overInfoOpen = document.querySelector('.info')
overInfoOpen.addEventListener('click', overInfoModal)

function overInfoModal () {
     document.querySelector('.info-modal').style.display = 'flex'
}

const overInfoClose = document.querySelector('.fechar')
overInfoClose.addEventListener('click', overInfoCloseModal)

function overInfoCloseModal () {
    document.querySelector('.info-modal').style.display = 'none'
} 