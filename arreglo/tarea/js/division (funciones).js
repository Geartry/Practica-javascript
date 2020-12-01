function EventListener(){
    document.getElementById("division1").addEventListener("click", funcion1())
   
    document.getElementById("division2").addEventListener("click", funcion2())
    
    document.getElementById("division3").addEventListener("click", funcion4())
}

function funcion1(){
    var a = 180;
    var b = 20;
    var division = a / b;
    var imprimir1 = document.getElementById("imprimirfuncion1")

    imprimir1.innerText = "La division da un total de: " + division;
}

function funcion2(a,b){
    a = 49;
    b = 7;
    var division2 = a / b;
    var imprimir2 = document.getElementById("imprimirfuncion2")

    imprimir2.innerText = "La division da un total de: " + division2;
}

function funcion3(a,b){
    return a / b;
}


function funcion4(){
    var imprimir3 = document.getElementById("imprimirfuncion3");
    imprimir3.innerText = "La division da un total de: " + funcion3(1122,41);
}
   