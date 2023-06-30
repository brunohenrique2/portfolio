function clickMenu() {
    var btn_burger = document.getElementById('btn-hamburger')
    var menu = document.getElementById('mobile-menu');

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        btn_burger.innerText = 'menu'
    }else {
        menu.style.display = 'block'
        btn_burger.innerText = 'close'
    }

}