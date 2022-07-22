const num1 = document.querySelector(".botao1")
const num2 = document.querySelector('.botao2')
const num3 = document.querySelector('.botao3')
const num4 = document.querySelector('.botao4')
const num5 = document.querySelector('.botao5')
const num6 = document.querySelector('.botao6')
const num7 = document.querySelector('.botao7')
const num8 = document.querySelector('.botao8')
const num9 = document.querySelector('.botao9')
const soma = document.querySelector('.soma')
const sub = document.querySelector('.sub')
const mult = document.querySelector('.multi')
const div = document.querySelector('.divisao')
const resto = document.querySelector('.resto')
const result = document.querySelector('.result')
const resultado = document.querySelector('span')
var escolhaBtn
var arrayNum = []
var sup
var operacao

console.log(arrayNum)
num1.addEventListener("click", function(){
    resultado.innerText = 1
    arrayNum.push(1)
})
num2.addEventListener("click", function(){
    resultado.innerText = 2
    arrayNum.push(2)
})
num3.addEventListener("click", function(){
    resultado.innerText = 3
    arrayNum.push(3)
})
num4.addEventListener("click", function(){
    resultado.innerText = 4
    arrayNum.push(4)
})
num5.addEventListener("click", function(){
    resultado.innerText = 5
    arrayNum.push(5)

})
num6.addEventListener("click", function(){
    resultado.innerText = 6
    arrayNum.push(6)
})
num7.addEventListener("click", function(){
    resultado.innerText = 7
    arrayNum.push(7)
})
num8.addEventListener("click", function(){
    resultado.innerText = 8
    arrayNum.push(8)
})
num9.addEventListener("click", function(){
    resultado.innerText = 9
    arrayNum.push(9)
})

soma.addEventListener("click", function(){
    resultado.innerText = '+'
    operacao = '+'
})

sub.addEventListener("click", function(){
    resultado.innerText = '-'
})

mult.addEventListener("click", function(){
    resultado.innerText = '*'
})

div.addEventListener("click", function(){
    resultado.innerText = '/'
})

resto.addEventListener("click", function(){
    resultado.innerText = '%'
})

result.addEventListener("click", function(){
    if (operacao == '+'){
        for(let i in arrayNum){
            arrayNum[i+1] += arrayNum[i]
            sup = arrayNum[i+1]
            resultado.innerText = arrayNum[i+1]
        }
    }
})



