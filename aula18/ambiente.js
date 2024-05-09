let num = [5,3,6,8]
num.sort()

//num[5] = 10 //crindo um novo índice no array e colocando o numeor 10 la dentro

//num.push(345) // colocando um valor depois do ultimo índice do array

// num.length comprimento do array

num.push(10)

console.log(num)

console.log(`nosso vetor tem ${num.length} posições`)

console.log(num[0])

/*for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}*/

for(let pos in num){ //para cada posição na variável composta num
    console.log(num[pos])
}