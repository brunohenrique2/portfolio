//Variáveis
const btnMobile = document.getElementById('btn-mobile')

//Eventos
btnMobile.addEventListener('click', toggleMenu)

//Funções
function toggleMenu() {
    const navList = document.getElementById('nav-list')
    navList.classList.toggle('active')
    if(btnMobile.innerText == "menu") {
        btnMobile.innerText = "close"
    }else {
        btnMobile.innerText = "menu"
    }
}