// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){ // Crear función para calcular el descuento
    const porcentajePrecioConDescuento = 100 - descuento; // Se define el porcentaje del descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; // Se hace la operación para calcular el descuento del precio real
    return precioConDescuento; // Retornamos en consola la variable que contiene los datos del precio real - el descuento
}


function buttonPriceDiscount(){ // Función para conectar el botón creado en HTML con JS
    const inputPrice = document.getElementById("InputPrice"); // Variable constante que recibira el valor del precio dado por el usuario
    const priceValue = inputPrice.value; // Variable para extraer los datos dados por el usuario

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue); // Variable que llama la función creada anteriormente que realiza la operación de descuento

    const resultP = document.getElementById("ResultP"); // Esta tecnica se puede utilizar para escribir textos HTML desde el mismo codigo de JS
                                                        // Primero se crea la variable que contendra el "input" perteneciente a la etiqueta creada en HTML
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento; // Se llama la variable y se le añade la función ".innerText" que sirve para insertar un texto desde JS que aparecera en la pagína una vez que el usuario realice alguna acción
                                                                              
}





//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento}); // En los "console.log" es posible imprimir objetos completos donde almacenamos los datos de varias variables utilizando el simbolo ({})

