//const lista1 = [100, 200, 300, 500];

// FUNCIÓN PARA CALCULAR MEDIA ARITMÉTICA
function calcularPromedio(lista) {
    // En este caso se utiliza un ciclo "for" para calcular el promedio
    // let sumaLista = 0; // variable para iterar la suma de elementos
    // for (let i = 0; i < lista.length; i++) { // la variable i empieza con valor 0 y este ciclo se ejecuta mientras i sea un numero menor a la cantidad de elementos en la lista (lista1) y para llamar esa cantidad de elementos se usa el metodo ".length" para los array y luego se le sumara 1 a i cada vez que se ejecute el ciclo y una vez que i ya sea igual a la cantidad de elementos en la lista, se terminara el ciclo
    //     sumaLista = sumaLista + lista[i]; // La variable que se creo al principio cuyo valor empieza en 0 se le ira sumando cada uno de los elemntos dentro de la lista, que corresponde a la variable i del ciclo for
    // }


// MISMA OPERACIÓN, PERO EN VEZ DE USAR CICLOS SE USA UN METODO PARA LOS ARRAY
    const sumaLista = lista.reduce( //Este metodo permite sumar los elementos dentro de un array uno tras otro
        function(valorAcumulado = 0, nuevoElemento) { // A los argumentos dentro de las funciones se les puede añadir valores por defecto de ser necesario, en este caso 0
            return valorAcumulado + nuevoElemento;
        }
    );

    // Esta variable tambien se puede utilizar dentro del ciclo for
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}