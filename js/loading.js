window.addEventListener('load', () => {
    const loader = document.querySelector('div.loader')

    loader.classList.add("loader-hidden")

    loader.addEventListener('transitioned', () => {
        document.body.removeChild('loader')
    })
})