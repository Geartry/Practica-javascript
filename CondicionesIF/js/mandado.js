function EventListener(){
    document.getElementById("calculo"). addEventListener("click", Calculodelpresupuesto())
}

function Calculodelpresupuesto(){

    var articulo1 = Number(document.getElementById("art1").value);

    var articulo2 = Number(document.getElementById("art2").value);

    var articulo3 = Number(document.getElementById("art3").value);

    var articulo4 = Number(document.getElementById("art4").value);

    var tudinero = Number(document.getElementById("presupuesto").value);

    var imprimirpresupuesto = document.getElementById("imprimirresultado");

    var sum = articulo1 + articulo2 + articulo3 + articulo4;

    var total = tudinero - sum;

    if(total < 0){
        imprimirpresupuesto.innerText = "El total fue de " + sum + "por lo que el costo esta fuera del presupuesto te falta " + total;
    }else{
        imprimirpresupuesto.innerText = "El total fue de " + sum + "por lo que el costo esta dentro del presupuesto te sobra " + total;
    }
}