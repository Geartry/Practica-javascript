function EventLisrtener(){
    document.getElementById("btncalcular"), addEventListener("click", Calcularfrase());
}

function Calcularfrase(){

    // declarar una varible para leer el id de la ul
    
    var salida1 = document.getElementById("Imprimirfrase");
    // declaramos una variable que inicialice con 0
    var x = 0;

    // compare la x desde el numero 0 hasta el numero 10
    while(x < 10){

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = "Hola mundo";
        salida1.appendChild(lista)

        x++;
    }
}