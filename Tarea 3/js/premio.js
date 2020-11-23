function EventListener(){
    document.getElementById("chequeo"), addEventListener("click", Verificacion());
}

function Verificacion(){

    var cliente = Number(document.getElementById("numero").value);
    var imprimir = document.getElementById("imprimirresultado");

    if(cliente == 1000){
        imprimir.innerText = "Felicidades ganaste un premio";
    }
    else{
        imprimir.innerText = "No ganaste nada mas suerte la proxima";
    }

}