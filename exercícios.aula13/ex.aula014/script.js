function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora<12){
        img.src = 'manha.jpg'
        document.body.style.background = '#ffd558'
    }else if (hora >=12 && hora <=18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#f27900'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#111f3d'
    }
}