const a = 10;
const b = 5;
const c = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log(a > b? a:b)

/* quem é maior */
console.log("maior")
if (a > b && a > c){
    console.log(a)
}else if(b > a && b > c){
    console.log(b)
}else{
    console.log(c)
}

/* negativo ou positivo */
console.log(">0 ou <0")
if (a > 0){
    console.log("true")
}else if (a < 0){
    console.log("false")
}else{
    console.log("numero = 0")
}

/* triangulo */
console.log("triangulo")
const angA = 45;
const angB = 45;
const angC = 90;

if (angA <= 0 || angB <= 0 || angC <= 0){
    console.log("error angulos invalidos")
}else{
    if (angA + angB +angC == 180){
        console.log("angulos validos")
    }else{
        console.log("nao é um triangulo")
    }
}


