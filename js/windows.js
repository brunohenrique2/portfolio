const navLinks = document.querySelectorAll('a.navLinks')
const screen = document.querySelectorAll('section.screen')
const btnClose = document.querySelectorAll('span.screenclose')
let offSetX, offSetY

for(let i=0; i<btnClose.length; i++) {
    screen[i].style.display = 'none'
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