function EventListener(){
    document.getElementById("suma1").addEventListener("click", funcion1())
   
    document.getElementById("suma2").addEventListener("click", funcion2())
    
    document.getElementById("suma4").addEventListener("click", funcion4())
}

function funcion1(){
    var a = 10;
    var b = 15;
    var suma = a + b;
    var imprimir1 = document.getElementById("imprimirfuncion1")

    imprimir1.innerText = "La suma da un total de: " + suma;
}

function funcion2(a,b){
    a = 7;
    b = 21;
    var suma2 = a + b;
    var imprimir2 = document.getElementById("imprimirfuncion2")

    imprimir2.innerText = "La suma da un total de: " + suma2;
}

function funcion3(a,b){
    return a + b;
}

   
function funcion4(){
    var imprimir3 = document.getElementById("imprimirfuncion3");
    imprimir3.innerText = "La suma da un total de: " + funcion3(22,23);
}

