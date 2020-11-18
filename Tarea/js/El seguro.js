function EventListener(){
    document.getElementById("calculo").addEventListener("click", Calcularprecio())
}

function Calcularprecio(){

    var plan = String(document.getElementById("plan").value);
    var plus = String(document.getElementById("cargo").value);
    var precio = String(document.getElementById("precio").value);
    var imprimir = document.getElementById("imprimirprecio");

    var total = 0;

    if(plan == "1" && precio == "4" && plus == "7"){
        total = 1200 * 1.1;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 1200 + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == "1" && precio == "4" && plus == "8"){
        total = 1200 * 1.05;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 1200 + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == "1" && precio == "4" && plus == "9"){
        total = 1200 * 1.05;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 1200 + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == "1" && precio =="4" && plus == "10"){
        total = 1200 * 1.2;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 1200 + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == "1" && precio == "4" && plus == "11"){
        total = 1200 * 1.1;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 1200 + " mas el costo añadido seria un total de $" + total;
    }

    

    if(plan == "2" && precio == "5" && plus == "7"){
        total = 950 * 1.1;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 950 + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == "2" && precio == "5" && plus == "8"){
        total = 950 * 1.05;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 950 + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == "2" && precio == "5" && plus == "9"){
        total = 950 * 1.05;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 950 + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == "2" && precio == "5" && plus == "10"){
        total = 950 * 1.2;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 950 + " mas el costo añadido seria un total de $" + total;
    }
    if(plan == "2" && precio == "5" && plus == "11"){
        total = 950 * 1.1;
        imprimir.innerText= "Usted a escogido el plan de Cobertura Amplia con un costo base de $" + 950 + " mas el costo añadido seria un total de $" + total;
    }

}