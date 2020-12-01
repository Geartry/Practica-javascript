function EventListener(){
    document.getElementById("calculo").addEventListener("click", Calculararreglos());
}

function Calculararreglos(){

    var arreglo1 = ['Moto', 'soto', 'Abaco', 'abeja', 'Sapo', 'nieve', 'Zumba', 'barco'];
    var arreglo2 = ['bicicleta', 'silla', 'cama', 'computadora', 'celular', 'viento', 'salmon', 'pared'];
    var imprimirorigi1 = document.getElementById("arreglorigi");
    var imprimirorigi2 = document.getElementById("arreglorigi2");
    var imprimirsort1 = document.getElementById("arreglosort");
    var imprimirsort2 = document.getElementById("arreglosort2");

    imprimirorigi1.innerText = "El arreglo original es: " + arreglo1.slice();
    imprimirsort1.innerText = "El arreglo ordenado es: " + arreglo1.sort();

    imprimirorigi2.innerText = "El arreglo original es: " + arreglo2.slice();
    imprimirsort2.innerText = "El arreglo ordenado es: " + arreglo2.sort();
}