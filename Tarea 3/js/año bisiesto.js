function Eventlistener(){
    document.getElementById("calculo"), addEventListener("click". Calculo())
}

function Calculo(){

    var num = Number(document.getElementById("numero").value)
    var imprimir = document.getElementById("imprimirresultado");
    
    // || num % 100 != 0
    if(num % 4 == 0){
        imprimir.innerText = "Es un año bisiesto"
    }else{
        imprimir.innerText = "No es un año bisiesto"
    }
}