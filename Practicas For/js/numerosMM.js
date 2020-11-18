function NumerosMayoresMenores(){
    // prompt se utiliza para escribir informacion en un cuadro de texto

    var Nnumeros = Number(prompt("¿Cuantos numeros en total vas a ingresar?"));
    var contador = 0, contadorneg = 0;
    var contador2 = 1, contadorneg2 = 1;

    // con esta instruccion vamos a saber cuantos numeros vamos a contar
    // prompt es un cuadro de texto que nos permite ingresar la informacion
    for (var x=0; x < Nnumeros; x++) {
        var numero = Number(prompt("ingresa un numero"));
        -2 >=0

        if(numero >= 0){
            // Se utiliza para guardar la informacion
            contador = contador + contador2;

        }else{
            // se utiliza para contar los numeros negativos
            contadorneg = contadorneg + contadorneg2
        }

    }
    alert("Los numeros a cero son: " + contador + " Los numeros menores a cero son: " + contadorneg)
}