function EventListener(){
    // Esta instruccion obtiene el el id del html y esta atento cunadole doy click al boton con la funcion claculacalificacion()
    document.getElementById("calcularpromedio"); addEventListener("click", CalcularCalificacion());
}

function CalcularCalificacion(){

    var cal1 = Number(document.getElementById("cal1").value);

    var cal2 = Number(document.getElementById("cal2").value);

    var cal3 = Number(document.getElementById("cal3").value);

    var cal4 = Number(document.getElementById("cal4").value);

    var imprimircali = document.getElementById("imprimircalificacion");

    var imprimirnummin = document.getElementById("numeromin")

    var calificacionminima, promedio = 0
    
    // var valorminimo = Math.min(cal1, cal2, cal3, cal4)
    
    if(cal1 < cal2 && cla1 < cal3 && cal1 < cal4){
        calificacionminima = Math.min(cal1, cal2, cal3, cal4)
        promedio = (cal2 + cal3 + cal4) / 3;
        imprimirnummin.innerText = "La calificacion minima es " + calificacionminima;
        imprimircali.innerText = "El promedio es de " + promedio;
    }
    if(cal2 < cal1 && cal2 < cal3 && cal2 < cal4){
        calificacionminima = Math.min(cal1, cal2, cal3, cal4)
        promedio = (cal1 + cal3 + cal4) / 3;
        imprimirnummin.innerText = "La calificacion minima es " + calificacionminima;
        imprimircali.innerText = "El promedio es de " + promedio;
    }
    if(cal3 < cal1 && cal3 < cal2 && cal3 < cal4){
        calificacionminima = Math.min(cal1, cal2, cal3, cal4)
        promedio = (cal1 + cal2 + cal4) / 3;
        imprimirnummin.innerText = "La calificacion minima es " + calificacionminima;
        imprimircali.innerText = "El promedio es de " + promedio;
    }
    if(cal4 < cal1 && cal4 < cal2 && cal4 < cal3){
        calificacionminima = Math.min(cal1, cal2, cal3, cal4)
        promedio = (cal1 + cal2 + cal3) / 3;
        imprimirnummin.innerText = "La calificacion minima es " + calificacionminima;
        imprimircali.innerText = "El promedio es de " + promedio;
    }
    // math.min para sacar el valor minimo de un conjunto de numeros
}