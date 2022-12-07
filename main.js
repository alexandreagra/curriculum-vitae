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

//OPEN MODAL PROG

// const modalprog = document.querySelector('.prog-skills')
// modalprog.addEventListener('click', openModal)

// function openModal() {
//     document.querySelector('#prog-modal').style.display = 'flex'
// }

// //CLOSE MODAL PROG
// const closeModal = document.querySelector('.close-btn-prog')
// closeModal.addEventListener('click', modalc)
// const closeModalOut = document.querySelector('#prog-modal')
// closeModalOut.addEventListener('click', modalc)

// function modalc() {
//     document.querySelector('#prog-modal').style.display = 'none'
// }