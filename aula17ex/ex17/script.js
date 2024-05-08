function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length ==0){
        window.alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML= ''
        for(var c =1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //feito para melhorar dados com outras linguagens, mas pro js não muda nada, é apenas receber os dados do que foi clicado
            tab.appendChild(item)

        }
    }
    

}