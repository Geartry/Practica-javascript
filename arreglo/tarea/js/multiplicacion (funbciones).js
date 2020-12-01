function EventListener(){
    document.getElementById("multiplicacion1").addEventListener("click", funcion1())
   
    document.getElementById("multiplicacion2").addEventListener("click", funcion2())
    
    document.getElementById("multiplicacion4").addEventListener("click", funcion4())
}

function funcion1(){
    var a = 7;
    var b = 7;
    var multiplicacion = a * b;
    var imprimir1 = document.getElementById("imprimirfuncion1")

    imprimir1.innerText = "La multiplicacion da un total de: " + multiplicacion;
}

function funcion2(a,b){
    a = 11;
    b = 22;
    var multiplicacion2 = a * b;
    var imprimir2 = document.getElementById("imprimirfuncion2")

    imprimir2.innerText = "La multiplicacion da un total de: " + multiplicacion2;
}

function funcion3(a,b){
    return a * b;
}

function funcion4(){  
    var imprimir3 = document.getElementById("imprimirfuncion3");
    imprimir3.innerText = "La multiplicacion da un total de: " + funcion3(152,9);
}