function EventListener(){
    document.getElementById("btnordenar").addEventListener("click", Ordenarnumeros())
}

function Ordenarnumeros(){

    var arreglonumerico = [1, 4, 2, 9, 11, 44, 111, 7, 4];
    var imprimirmenoramayor = document.getElementById("imprimirmayormenor");
    var imprimirmayoramenor = document.getElementById("imprimirmenoramayor");

    // ordenar alfabeticamente los numeros
    arreglonumerico.sort();
    // creo una funcion en el metodo sort para poder ordenar los numeros numericamente de menr a mayor
    imprimirmenoramayor.innerText = arreglonumerico.sort(menoramayor);
    // creo una funcion en el metodo sort para poder ordenar los numeros numericamente de mayor a menor
    imprimirmayoramenor.innerText = arreglonumerico.sort(mayoramenor)
}

// funcion que me permite ordenar de menor a mayor el arreglo
function menoramayor(elem1, elem2){

    // return se encarga de finalizar la operacion y devolver el resultado
    return elem1 -elem2;
}

function mayoramenor(elem1, elem2){
    return elem2 - elem1;
}