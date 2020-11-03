function EventListerner(){
    document.getElementById("semana"). addEventListener("click", calcularsemana())
}

function calcularsemana(){

    var dia = document.getElementById("dias").value;

    var imprimirresultado = document.getElementById("imprimirdiasemana");

    if(dia == "1"){
        imprimirresultado.innerText = "El dia que selccionaste es Lunes";
    }
    if(dia == "2"){
        imprimirresultado.innerText = "El dia que selccionaste es Martes";
    }
    if(dia == "3"){
        imprimirresultado.innerText = "El dia que selccionaste es Miercoles";
    }
    if(dia == "4"){
        imprimirresultado.innerText = "El dia que selccionaste es Jueves";
    }
    if(dia == "5"){
        imprimirresultado.innerText = "El dia que selccionaste es Viernes";
    }
    if(dia == "6"){
        imprimirresultado.innerText = "El dia que selccionaste es Sabado";
    }
    if(dia == "7"){
        imprimirresultado.innerText = "El dia que selccionaste es Domingo";
    }
}