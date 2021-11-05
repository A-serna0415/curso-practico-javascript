//Código del cuadrado
console.group("Cuadrado"); //agrupar mensajes en la consola

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){ //función que nos sirve para hallar el perimetro de cualquier medidad de un cuadrado
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado){ //función para hallar el área
    return lado * lado;
}


// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd(); //cerrar grupo de mensajes en la consola


//Código del triángulo
console.group("Triángulo"); 

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; // Los parentesis cuando querramos hacer una operación matematica con JS nos asegura que el programa ejecute primero la operación que se encuentra dentro de los parentesis antes que seguir con las demas

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function alturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("No es un triángulo isóscele");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();



//Código del círculo
console.group("Círculo");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//Pi
// const PI = 3.1415;
const PI = Math.PI; //"Math" es un metodo de JS que sirve para realizar varias operaciones matematicas, en este caso hallar el PI de manera automatica
console.log("El PI del círculo es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();



//Interacción

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetroC = perimetroCuadrado(value);
    alert(perimetroC);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const areaC = areaCuadrado(value);
    alert(areaC);
}

//Triángulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const value = input.value;
    const value2 = input2.value;

    const perimetroT = perimetroTriangulo(Number(value), Number(value), Number(value2));
    alert(perimetroT);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const areaT = areaTriangulo(value, value);
    alert(areaT);
}

function calcularAlturaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const value = input.value;
    const value2 = input2.value;

    const alturaT = alturaTriangulo(Number(value), Number(value), Number(value2));
    alert(alturaT);
}

//Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetroCi = diametroCirculo(value);
    alert(perimetroCi);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const areaCi = areaCirculo(value);
    alert(areaCi);
}