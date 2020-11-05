function EventListener(){
    document.getElementById("verifcali").addEventListener("click", Calcularcali())
}

function Calcularcali(){

    var cali = String(document.getElementById("calificaciones").value);
    var imprimirres = document.getElementById("impriircali");

    if(cali == "10"){
        imprimirres.innerText = "La calificacion es un 10 tienes una A";
    }
    else if(cali == "9"){
        imprimirres.innerText = "La calificacion es un 9 tienes una B";
    }
    else if(cali == "8"){
        imprimirres.innerText = "La calificacion es un 8 tienes una C";
    }
    else if(cali == "7"){
        imprimirres.innerText = "La calificacion es un 7 tienes una D";
    }
    else if(cali == "6"){
        imprimirres.innerText = "La calificacion es un 6 tienes una D";
    }
    else if(cali == "5"){
        imprimirres.innerText = "La calificacion es un 5 tienes una F";
    }
    else if(cali == "4"){
        imprimirres.innerText = "La calificacion es un 4 tienes una F";
    }
    else if(cali == "3"){
        imprimirres.innerText = "La calificacion es un 3 tienes una F";
    }
    else if(cali == "2"){
        imprimirres.innerText = "La calificacion es un 2 tienes una F";
    }
    else if(cali == "1"){
        imprimirres.innerText = "La calificacion es un 1 tienes una F";
    }
    else if(cali == "0"){
        imprimirres.innerText = "La calificacion es un 0 tienes una F";
    }
}