function EventListener(){
    document.getElementById("resta1").addEventListener("click", funcion1())
   
    document.getElementById("resta2").addEventListener("click", funcion2())
    
    document.getElementById("resta4").addEventListener("click", funcion4())
}

function funcion1(){
    var a = 47;
    var b = 22;
    var resta = a - b;
    var imprimir1 = document.getElementById("imprimirfuncion1")

    imprimir1.innerText = "La resta da un total de: " + resta;
}

function funcion2(a,b){
    a = 21;
    b = 9;
    var resta2 = a - b;
    var imprimir2 = document.getElementById("imprimirfuncion2")

    imprimir2.innerText = "La resta da un total de: " + resta2;
}

function funcion3(a,b){
    return a - b;
}

    
function funcion4(){
    var imprimir3 = document.getElementById("imprimirfuncion3");
    imprimir3.innerText = "La resta da un total de: " + funcion3(42,51);
}