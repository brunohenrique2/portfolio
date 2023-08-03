var btnHome = document.querySelector('span#btnHome')
var btnClose = document.querySelector('span#screenclose')
var inicioScreen = document.querySelector('section#inicio')
console.log(btnClose, inicioScreen, btnHome)

btnClose.addEventListener('click', closeWindow)
btnHome.addEventListener('click', homeWindow)

function homeWindow() {
    if(inicioScreen.style.display == 'none') {
        inicioScreen.style.display = 'block'
    }else if(inicioScreen.style.display == 'block') {
        inicioScreen.style.display = 'none'
    }
}

function closeWindow () {
    inicioScreen.style.display = 'none'
}