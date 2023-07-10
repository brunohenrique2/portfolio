//Variaveis
const btn_mobile = document.getElementById('btn-mobile')

//Eventos
btn_mobile.addEventListener('click', toggleMenu)

//Funções
function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')  
}