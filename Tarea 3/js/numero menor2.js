function EventListener(){
    document.getElementById("calculo"), addEventListener("click", Calculo());
}

function Calculo(){

    var num1 = Number(document.getElementById("numero1").value);
    var num2 = Number(document.getElementById("numero2").value);
    var Imprimir = document.getElementById("imprimirresultado");

    if(num1 < num2){
        Imprimir.innerText = "El primer numero es menor"
    }
    if(num2 < num1){
        Imprimir.innerText = "El segundo numero es menor"
    }
    if(num1 == num2){
        Imprimir.innerText = "Los numeros son iguales"
    }
}