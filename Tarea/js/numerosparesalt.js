function EventListener(){
    document.getElementById("comparar"); addEventListener("click", Comparacionnumerospares());
}


function Comparacionnumerospares(){

    var num1 = Number(document.getElementById("numero1").value);
    var imprimirresultado = document.getElementById("imprimircomparativa");
    
    if(num1 % 2 == 0){
        imprimirresultado.innerText = "Es un numero par";
        console.log("Es un numero par");
    }
    else{
        imprimirresultado.innerText = "Es un numero impar";
        console.log("No es un numero par");
    }
    
    
}
