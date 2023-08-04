const navLinks = document.querySelectorAll('a.navLinks')
const screen = document.querySelectorAll('section.screen')
const btnClose = document.querySelectorAll('span.screenclose')

//faz o botão X da janela correspondente, fecha-la
for(let i=0; i<btnClose.length; i++) {
    btnClose[i].addEventListener('click', () => {
            screen[i].style.display = 'none'
    })
}

for(let i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        if(screen[i].style.display == 'block') {
            screen[i].style.display = 'none'
        }else if(screen[i].style.display == 'none') {
            screen[i].style.display = 'block'
        }
    })
}