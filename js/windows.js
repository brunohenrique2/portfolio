const body = document.getElementById('body')
const timer = document.getElementById('timer')
const btnTheme = document.getElementById('btnThemeMode')

btnTheme.addEventListener('click', () => {
    if(btnTheme.innerText == "light_mode") {
        btnTheme.innerText = "dark_mode"
    }else if(btnTheme.innerText == "dark_mode") {
        btnTheme.innerText = "light_mode"
    }
})

body.addEventListener('load', time)

function time() {
    const date = new Date()
    const hora = date.getHours()
    const min = date.getMinutes()

    timer.innerText = `${hora}:${min}`

}
setInterval(time, 1000)


