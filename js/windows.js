const navLinks = document.querySelectorAll('a.navLinks')
const screen = document.querySelectorAll('section.screen')
const btnClose = document.querySelectorAll('span.screenclose')

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