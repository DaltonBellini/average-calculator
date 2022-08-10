alert('Com esse programa você consiguirá verificar sua média. Colocará o valor do resultado de cada prova de 0 até 10. Para passar você deverá tirar no mínimo 6, sendo nota máxima 10')

let stundent = prompt('Nome do aluno(a)')

let testOne = prompt('Qual é a nota da primeira prova? ' )
let testTwo = prompt('Qual valor da segunda prova? ')
let testThree = prompt('Qual o valor da terceira prova?') 

testOne = Number(testOne)
testTwo = Number(testTwo)
testThree = Number(testThree)

let averange = (testOne+ testTwo +testThree ) /3
result = averange >= 6
averange = averange.toFixed(2)

if(result){ 
    alert('Parabéns ' + stundent +' , você atingiu a média necessária para passar, sua nota é de: ' + averange)
}else{
    alert(stundent + ' , Você precisa estudar mais para conseguir passar. Precisará realizar a prova de recuperação, sua nota atual é de: ' + averange)
}