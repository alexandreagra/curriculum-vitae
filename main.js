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

//MODAL INFO FUNCTION
const overInfoOpen = document.querySelector('.info')
overInfoOpen.addEventListener('click', overInfoModal)

function overInfoModal () {
     document.querySelector('.info-modal').style.display = 'flex'
     document.querySelector('#corpo').style.overflowY = 'hidden'
}

//MODAL HARD FUNCTION

const overHardOpen = document.querySelector('.hard')
overHardOpen.addEventListener('click', overHardModal)

function overHardModal () {
     document.querySelector('.hard-modal').style.display = 'flex'
     document.querySelector('#corpo').style.overflowY = 'hidden'
}

//MODAL SOFT FUNCTION

const overSoftOpen = document.querySelector('.soft')
overSoftOpen.addEventListener('click', overSoftModal)

function overSoftModal () {
     document.querySelector('.soft-modal').style.display = 'flex'
     document.querySelector('#corpo').style.overflowY = 'hidden'
}

//MODAL INTERESSES FUNCTION

const overInteressesOpen = document.querySelector('.interesses')
overInteressesOpen.addEventListener('click', overInteressesModal)

function overInteressesModal () {
     document.querySelector('.interesses-modal').style.display = 'flex'
     document.querySelector('#corpo').style.overflowY = 'hidden'
}

//CLOSE MODAL FUNCTION
const overClose = document.querySelectorAll('.fechar')
overClose.forEach(item => {
    item.addEventListener('click', overCloseModal)
})

function overCloseModal () {
    document.querySelector('.info-modal').style.display = 'none'
    document.querySelector('.hard-modal').style.display = 'none'
    document.querySelector('.soft-modal').style.display = 'none'
    document.querySelector('.interesses-modal').style.display = 'none'
    document.querySelector('#corpo').style.overflowY = 'scroll'
} 