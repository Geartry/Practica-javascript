function EventListener(){
    document.getElementById("sypcalcular").addEventListener("click", CalcularSumayPro());
}

function CalcularSumayPro(){

    var imprimirprom = document.getElementById("imprimirpromedio");
    var imprimirsum = document.getElementById("imprimirsuma");
    var contador1=0, contador2=0, suma2=0, promedio=0, suma=0;

    for(var y=1; y<=10; y++){

        var numeros = Number(prompt("Ingresa un número"));

        if(numeros > 0 && numeros % 2 == 0){
            contador1++;
            suma2 = numeros + suma2;
            promedio = suma2/contador1;
        }else{
            contador2++;
            suma = numeros + suma;
            console.log(contador2 + " impares");
        }
      imprimirprom.innerText = "El promedio de los números pares es: " + promedio;
      imprimirsum.innerText = "La suma de los números impares son: " + suma;
    }
}