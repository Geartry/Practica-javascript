function NumerosMayoresMenores(){

    var Nnumeros = Number(prompt("¿Cuantos numeros en total vas a ingresar?"));
    var contador = 0, contadorneg = 0;
    var contador2 = 1, contadorneg2 = 1;
    var x=0;
    
    while(x < Nnumeros) {
        var numero = Number(prompt("ingresa un numero"));
        -2 >=0

        if(numero >= 0){
            contador = contador + contador2;

        }else{
            contadorneg = contadorneg + contadorneg2
        }

        x++;
    }
    alert("Los numeros a cero son: " + contador + " Los numeros menores a cero son: " + contadorneg)
}