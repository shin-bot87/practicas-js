//Codigo del Cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}

//Codigo del Triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Codigo del Circulo
console.group("Circulo");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo);

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo);

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es: " + perimetroCirculo);

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo);

console.groupEnd();
