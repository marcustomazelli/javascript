function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){ //quer dizer: se o ano ficou em branco ou se o ano digitado for maior que o atual
        window.alert ('[ERRO] Verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'criancaM.jpg'
            } else if (idade < 21){
                //jovem
                img.src = 'jovemM.jpg'
            }else if (idade <50){
                //adulto
                img.src = 'adultoM.jpg'
            }else{
                //idoso
                img.src = 'idosoM.jpg'
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'criancaF.jpg'
            } else if (idade < 21){
                //jovem
                img.src = 'jovemF.jpg'
            }else if (idade <50){
                //adulto
                img.src = 'adultaF.jpg'
            }else{
                //idoso
                img.src = 'idosaF.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)

    }
}