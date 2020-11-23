function EventListener(){
    document.getElementById("calculardias").addEventListener("click", Calculardiassemana());
}
function Calculardiassemana(){
   
    var diasemana = String(document.getElementById("dias").value);
    var imprimirdiacorrespondiente = document.getElementById("imprimirdiacorrespondiente");

    if(diasemana == "lunes"){
        imprimirdiacorrespondiente.innerText = "Dios santo ya es lunes";
    }
    else if(diasemana == "viernes"){
        imprimirdiacorrespondiente.innerText = "TGIf thanks god is friday";
    }
    else if(diasemana == "sabado" || diasemana == "domingo"){
        imprimirdiacorrespondiente.innerText = "Dias para no hacer nada";
    }
    else{
        imprimirdiacorrespondiente.innerText = "Esos dias a quien le importa"
    }
    
}


// var palabra = "Lunes"
