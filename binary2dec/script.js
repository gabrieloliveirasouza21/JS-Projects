function clicado(){
    // aqui é onde ocorre a declaração de variáveis,
    // por conta de que estava retornando muitos NaN, vi que para evitar isso uma boa prática
    // é declarar as variavéis e já inicializá-las
    var mult = 0
    var sup = 0
    var soma = 0
    var tamanhoArray = 0
    var x = document.querySelector('.input').value
    var byPart = new Array()
    byPart = x.split("") //aqui é onde eu pego todos os caracteres do input do HTML e coloco em um array
    //cada caractere do input
    // var num = Number(x)

    byPart.forEach(element => {
        if(byPart[element] != 0 && byPart[element] != 1){
            alert("isso não é um numero binario")
        }
    }); // aqui estou verificando se cada elemento do array(forEach) é um número diferente de 1 ou 0 

    // outra forma:

    // for (let i in byPart){
    //     if (byPart[i] !== 0 && byPart[i] !== 1){
    //         alert("Isso não é um número binário !!")
    //     }
    // }

    function resultado(){
        tamanhoArray = byPart.length

        for(var i in byPart){
            // tamanhoArray = byPart.length- (i +1)
            mult = byPart[tamanhoArray - i-1] * (2**i)
            sup = []
            sup.push(mult)
            for (var x in sup){
                soma += sup[x]
            }
        }
        document.querySelector('.mostrar-resultado').innerHTML = soma
    }// essa função é a que vai fazer a conversão da base 2 para base 10
    // o que acontece aqui é que : eu pego o tamanho do array e guardo em uma variável
    // após isso eu percorro aquele array que foi criado através do input do HTML
    // e a cada elemento do array (para achar esse elemento usei o tamanho do array subtraido com
    // o número do índice. Ex: array tem tamanho 4, subtraindo com o i na primeira repetição 
    // fica 4 - 0 = 4, mas após isso eu subtraio com 1 para que agora sim ele ache o último elemento do array
    // se o array tem tamanho 4 então ele tem 3 posições), multipliquei por 2 elevado ao indice, que começa com 0
    // até o último índice do array

    resultado()
}

