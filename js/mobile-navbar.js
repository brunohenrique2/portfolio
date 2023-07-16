//Variáveis
const btnMobile = document.getElementById('btn-mobile')

//Eventos
btnMobile.addEventListener('click', toggleMenu)

//Funções
function toggleMenu() { 
    //Essa função adiciona ou remove a classe active do menu para abrir/fechar no mobile
    const navList = document.getElementById('nav-list')
    navList.classList.toggle('active')

    //troca o icon menu hamburger ou X quando o menu estiver aberto/fechado
    if(btnMobile.innerText == "menu") {
        btnMobile.innerText = "close"
    }else {
        btnMobile.innerText = "menu"
    }
}