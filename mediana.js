function calcularPromedio(lista) {

    const sumaLista = lista.reduce( //Este metodo permite sumar los elementos dentro de un array uno tras otro
        function(valorAcumulado = 0, nuevoElemento) { // A los argumentos dentro de las funciones se les puede añadir valores por defecto de ser necesario, en este caso 0
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [100, 560, 950, 800, 650, 1000000, 50, 10]; // Array con lista de numeros

let listaOrdenada = lista1.sort(function(a, b) { // variable con el metodo ".sort" que sirve para ordenar los numeros dentro de un array en orden ascendente
    return a - b;
  });

const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }

}

let mediana;

if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadListaOrdenada - 1];// Se necesitan dos elementos
    const elemento2 = listaOrdenada[mitadListaOrdenada];
    const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]); // -> promedio
    mediana = promedioElemento1y2; // -> mediana

} else {
    mediana = listaOrdenada[mitadListaOrdenada]; // Posicion mitadLista1 dentro de la lista
    // -> mediana
}