function EventListener(){
    document.getElementById("valeres").addEventListener("click", Booleanos());
}

function Booleanos(){

    var salida = document.getElementById("salida")

    var b1 = Boolean(100);
    var b2 = Boolean(3.14);
    var b3 = Boolean(-15);
    var b4 = Boolean("Hello");
    var b5 = Boolean('false');
    var b6 = Boolean(1 + 7 + 3.14);
    var b7 = Boolean(5 > 4);
    var b8 = Boolean(0);
    var b9 = Boolean(-0);
    var b10 = Boolean("");
    var b11 = Boolean();
    var b12 = Boolean(null);
    var b13 = Boolean(false);
    var b14 = Boolean(10 / "H");
    
    var imprimir1 = document.getElementById("imprimir1");
    var imprimir2 = document.getElementById("imprimir2");
    var imprimir3 = document.getElementById("imprimir3");
    var imprimir4 = document.getElementById("imprimir4");
    var imprimir5 = document.getElementById("imprimir5");
    var imprimir6 = document.getElementById("imprimir6");
    var imprimir7 = document.getElementById("imprimir7");
    var imprimir8 = document.getElementById("imprimir8");
    var imprimir9 = document.getElementById("imprimir9");
    var imprimir10 = document.getElementById("imprimir10");
    var imprimir11 = document.getElementById("imprimir11");
    var imprimir12 = document.getElementById("imprimir12");
    var imprimir13 = document.getElementById("imprimir13");
    var imprimir14 = document.getElementById("imprimir14");

    imprimir1.innerText= "El numeo 100 en booleano es: " + b1
    imprimir2.innerText= "El numero 3.14 en booleano es: " + b2
    imprimir3.innerText= "El numero -15 en boleano es: " + b3
    imprimir4.innerText= "La palabra 'hello' en booleano es: " + b4
    imprimir5.innerText= "La palabra 'false' en booleano es: " + b5
    imprimir6.innerText= "La suma de los numeros en booleno es: " + b6
    imprimir7.innerText= "La comparacion en booleano es: " + b7
    imprimir8.innerText= "El numero 0 en booleano es: " + b8
    imprimir9.innerText= "El numero -0 en booleano es:" + b9
    imprimir10.innerText= "Las comillas vacias en booleano es: " + b10
    imprimir11.innerText= "El valor sin dato en booleano es: " + b11
    imprimir12.innerText= "La palabra nulo en booleano es: " + b12
    imprimir13.innerText= "La palabra false en booleano es:" + b13
    imprimir14.innerText= "La division con un numero con letra en booleano es: " + b14

}