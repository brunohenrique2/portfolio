var menu = document.querySelector('menu#menu')
console.log(menu.style)

function clickMenu() {
    if(menu.style.display == "none") {
        menu.style.display = "block"
    }else if(menu.style.display == "block") {
        menu.style.display = "none"
    }
}