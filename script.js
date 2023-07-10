function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png',)
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }

    if (html.classList.contains('light')) {
        img.setAttribute('alt', 'Imagem Julio na UERJ em um dia ensolarado.')
    } else {
        img.setAttribute('alt', 'Imagem Julio na UERJ num dia nublado.')
    }


    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}

}