function EventListener(){
    document.getElementById("calcularnumeros"); addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){
    var  num1 = Number(document.getElementById("numero1").value);

    var  num2 = Number(document.getElementById("numero2").value);

    var  num3 = Number(document.getElementById("numero3").value);

    var imprimirmensaje = document.getElementById("imprimirnumero");

    if(num1 > num2 && num1 > num3){
        imprimirmensaje.innerText = "El numero mayor es " + num1;
    }if(num2 > num1 && num2 > num3){
        imprimirmensaje.innerText = "El numero mayor es " + num2;
    }if(num3 > num1 && num3 > num2){
        imprimirmensaje.innerText = "El numero mayor es " + num3;
    }
}