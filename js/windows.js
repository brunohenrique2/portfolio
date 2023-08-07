const btnMobile = document.getElementById('btn-mobile')
const navList = document.getElementById('nav-list')
const navLinks = document.querySelectorAll('a.navLinks')
const screen = document.querySelectorAll('section.screen')
const btnClose = document.querySelectorAll('span.screenclose')
let offSetX, offSetY

btnMobile.addEventListener('click', toggleMenu)

//Essa função adiciona/remove a classe active do menu para abrir/fechar no mobile
function toggleMenu() { 

    navList.classList.toggle('active')

    //troca o icon menu hamburger ou X quando o menu estiver aberto/fechado
    if(btnMobile.innerText == "menu") {
        btnMobile.innerText = "close"
    }else {
        btnMobile.innerText = "menu"
    }
}

//define todas as telas para display none
for(let i=0; i<screen.length; i++) {
    screen[i].style.display = 'none'
}

//fechar o menu mobile ao clicar em qualquer botão
for(let i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        navList.classList.toggle('active')
    })
}


//faz o botão X da janela correspondente, fecha-la
for(let i=0; i<btnClose.length; i++) {
    btnClose[i].addEventListener('click', () => {
            screen[i].style.display = 'none'
    })
}

//faz os botões da area de trabalho abrir/fechar a janela respectiva a ele
for(let i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        if(screen[i].style.display == 'block') {
            screen[i].style.display = 'none'
        }else if(screen[i].style.display == 'none') {
            screen[i].style.display = 'block'
        }
    })
}

//movimentando as janelas

for(let i=0; i<screen.length; i++) {
    const move = (e) => {
        screen[i].style.left = `${e.clientX - offSetX}px`
        screen[i].style.top = `${e.clientY - offSetY}px`
    }

    screen[i].addEventListener("mousedown", (e) => {
        offSetX = e.clientX - screen[i].offsetLeft
        offSetY = e.clientY - screen[i].offsetTop
        document.addEventListener("mousemove", move)
    })

    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move)
    })
}
