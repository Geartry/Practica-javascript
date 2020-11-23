function EventListener(){
    document.getElementById("calculo").addEventListener("click", Calculo());
}

function Calculo(){

    var num = Number(document.getElementById("numero").value);
    var imprimir = document.getElementById("imprimirresultado");
    var neg = 0;

    if(num < 0){
       neg = num * -1;
       imprimir.innerText = neg + " es el valor absoluto";
    }else{
        imprimir.innerText = num + " es el valor absoluto";
    }
}