function EjerciciosVariables(){

    // var mayorde25 = false;
    // mayorde25 = variablediferente;
    // // ES un cuadro de texto donde se puede imprimir resultados
    // alert ("mostrar mensaje no se va a ejecutar");

    var foco = false;

    // if (foco == true){
    //     alert("el foco esta encendido")
    // }else{
    //     alert("el foco esta apagado")
    // }

    // ! se encarga de cambiar el valor de foco
    if(!foco == true){
        alert("El foco esta encendido");
    }else{
        alert("el foco esta apagado");

    }

    // variable numerica
    var a=1; b=2; c=3;
    // variable booleana
    var casado = true;
    var mayorde25 = false;
    // variable de texto
    var texto1 = "En un lugar de la mancha "
    
    // si mando a llamar la variable casado imprime true
    console.log("El valor de la variable casado " + casado);
    console.log("El valor de la variable mayor de 25 vale " + mayorde25);
    // el booleano true se convierte 1 para poder multiplicar 1*5
    console.log("la multiplicacion del true es "+ (casado * 5));
    // el booleano false se convierte en 0 para poder multiplicar * 0 
    console.log("la multiplicacion del false es " + (mayorde25 * 5));
    // la variable casado vale true porque no la hemos hecho un cambio
    console.log("la variable casado ahora vale " + casado);
    console.log("la variable mayorde25 ahora vale " + mayorde25);
    // sumar las variantes, a+b+c, el resultado es 6
    console.log("la suma de los numeros es: " + (a + b + c));
    // multiplicar frases con numeros 
    console.log("que obtenemos multiplicando texto con un numero " + (texto1 * 1));

    // tostring - se encarga de convertir el dato en texto o una frase, escribe el resultado en un texto
    console.log("mostramos lo eqivalente en string " + casado.toString());
    console.log(texto1.toString());


    var arreglo = ["Quiero", "Aprender"]
    console.log(arreglo.toString());

    console.log(a.toString() + b.toString());
    console.log(b.toString() + c.toString());
    console.log(c.toString() + a.toString());

    // suma a + b 
    console.log(a + b);
}
