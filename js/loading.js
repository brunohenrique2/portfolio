window.addEventListener('load', () => {
    const loader = document.querySelector('div.loader')

    loader.classList.add("loader-hidden")

    loader.addEventListener('transitionend', () => {
        document.body.removeChild('loader')
    })
})