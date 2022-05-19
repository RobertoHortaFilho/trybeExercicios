function palindromo(word){
    let reverseWord = word.split("").reverse().join('')
    if (word == reverseWord) return true
    else return false

}


function maior(valueArray){
    let maior = valueArray.sort( (a,b) => {return a > b ? 1: -1});
    return maior.pop()
}


function menor(valueArray){
    let menor = valueArray.sort( (a,b) => {return a < b ? 1: -1});
    return menor.pop()
}


function maiorString(arrayStrings){
    maior = arrayStrings[0]
    
    for (let k = 0; k < arrayStrings.length; k++){
        if (arrayStrings[k].length > maior.length){
            maior = arrayStrings[k]
        }
    }
    return maior     
}


function MaisRepete(arrayInteiros){
    valores = {}

    for (let value of arrayInteiros){
        if (!valores[value]){
            valores[value] = 0
        }  
        valores[value] ++;
    }

    let frequencia = arrayInteiros[0]
    for (let index in valores){
        if (valores[index] > valores[frequencia]){
            frequencia = index
        }
    }
    return frequencia
}


function somaDeNumeros(numero){
    soma = 0
    for(let i=1; i <= numero; i++){
        soma += i
    }
    return soma
}

function FinalDeString(string, final){
    let pos = string.indexOf(final)
    if (pos != -1) return true
    else return false
}