// const precioOriginal = 120;
// const descuento = 18;


///////// DESCUENTO CON CUPPONES ////////

//Solución #1: arrays y switch

// const coupons = [
//     "-15",
//     "-25",
//     "-50",
//     "-65"
// ];

//Solución #3: arrays y condicionales mucho más inteligentes

const coupons = [ // Creamos la variable que contiene los objetos con los cupones, sus nombres y sus respectivos valores
    {
        name: "CiberLunes",
        discount: 15,
    },
    {
        name: "Outlet",
        discount: 25,
    },
    {
        name: "Mitad",
        discount: 50,
    },
    {   
        name: "Black Friday",
        discount: 65,
    }
];


function calcularPrecioConDescuento(precio, descuento){ // Crear función para calcular el descuento
    const porcentajePrecioConDescuento = 100 - descuento; // Se define el porcentaje del descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; // Se hace la operación para calcular el descuento del precio real
    return precioConDescuento; // Retornamos en consola la variable que contiene los datos del precio real - el descuento
}


function buttonPriceDiscount(){ // Función para conectar el botón creado en HTML con JS
    const inputPrice = document.getElementById("InputPrice"); // Variable constante que recibira el valor del precio dado por el usuario
    const priceValue = inputPrice.value; // Variable para extraer los datos dados por el usuario

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;


    //Solución #2: legibilidad, error first y muerte al switch
    //"error-first" es un patrón de programación donde atrapamos los errores antes de escribir el resto de la lógica de nuestros programas.


    const isCouponValueValid = function (coupon) { //Validamos la opción escrita por el usuario a través de esta variable
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid); // Con esta variable encontramos el dto almacenado en la función "isCouponValueValid" y validamos si ertenece o no al array creado anteriormente 
    
    if (!userCoupon) { // Con este ciclo se validan las opciones escritas por el usuario para fijar el valos de descuento y realizar la operación matematica con las funciones creadas anteriormente
        alert("El cupón " + couponValue + " no es válido");
    } else { // Si el cupon ingresado por el usuario es valido ejecutamos la operación correspondiente
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

    // if (!coupons.includes(couponValue)) { // error-first: al añadir el simbolo de negación le indicamos al programa que hacer en caso de que la opción validada no concuerde con las definidas en el código
    //                                       // el metodo ".includes" nos permite validar si efectivamente un elemento llamado pertenece al array
    //     alert("El cupón " + couponValue + " no es válido");
    //  } else if (couponValue === "-15") {
    //     discountCoupon = 15;
    //  } else if (couponValue === "-25") {
    //     discountCoupon = 25;
    //  } else if (couponValue === "-50") {
    //     discountCoupon = 50;
    //  } else if (couponValue === "-65") {
    //     discountCoupon = 65
    //  };



    // let discountCoupon;

    // switch(couponValue) {
    //     case coupons[0]: // "-15"
    //       discountCoupon = 15;
    //     break;
    //     case coupons[1]: // "-25"
    //       discountCoupon = 25;
    //     break;
    //     case coupons[2]: // "-50"
    //       discountCoupon = 50;
    //     break;
    //     case coupons[3]: // "-50"
    //       discountCoupon = 65;
    //     break;
    //   }

    // const precioConDescuento = calcularPrecioConDescuento(priceValue, discountCoupon); // Variable que llama la función creada anteriormente que realiza la operación de descuento

    // const resultP = document.getElementById("ResultP"); // Esta tecnica se puede utilizar para escribir textos HTML desde el mismo codigo de JS
    //                                                     // Primero se crea la variable que contendra el "input" perteneciente a la etiqueta creada en HTML
    // resultP.innerText = "El precio con descuento es: $" + precioConDescuento; // Se llama la variable y se le añade la función ".innerText" que sirve para insertar un texto desde JS que aparecera en la pagína una vez que el usuario realice alguna acción                                                                      
}





//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento}); // En los "console.log" es posible imprimir objetos completos donde almacenamos los datos de varias variables utilizando el simbolo ({})
