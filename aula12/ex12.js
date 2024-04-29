var agora = new Date()
var hora = agora.getHours()

console.log(`agora são ${hora} horas`)

if (hora < 12){
    console.log('BOM DIA')
} else if (hora <=18){
    console.log('BOA TARDE')
}else if(hora <=23){
    console.log('BOA NOITE')
}else{
    console.log('VAI DORMIR FDP')
}