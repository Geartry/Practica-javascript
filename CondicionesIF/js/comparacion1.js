// Quiere comparar si una perona es mayor de edad y si tiene la INE y si ya puede tomar o no.

// Es un metodo que se agrega para utilizar una funcion para el boton

function EventListener(){
// Obtiene el id del boton que esta en el html y va a estar atento cuando le de click al boton 
    document.getElementById("Calcularedad").addEventListener("click", Calcularedad());
}

function Calcularedad(){
    // obtener edad del id del imput, pero con el .value obtenemos lo que ingresamos en el imput
    // el number indica que tipo de variable es 
    var edad = Number(document.getElementById("edad").value);
    // se declara 1 para indicar que tiene ine y 0 si no tiene ine
    var Ine = Number(document.getElementById("INE").value);
    // se declara una variable para imprimir el mensaje
    var imprimirmensaje = document.getElementById("imprimiredad");

    if(edad >= 18 && Ine >= 1) {
        //    innertext se utiliza para imprimir la informacio en el navegador
        imprimirmensaje.innerText = "la persona es mayor de edad y puede tomar"
    }else if(edad >=18 && Ine==0){
        imprimirmensaje.innerText = "la persona es mayor de edad, pero como no tiene su ine no pede tomar"
    }else if(edad<18 && Ine==0){
        imprimirmensaje.innerText = "la persona es menor de edad, pero no puede tener ine"
    }



    if(edad > Ine){
        imprimirmensaje.innerText = "el hermano 1 es el mayor" + edad;
    }
    else if(edad > Ine){
        imprimirmensaje.innerText = "el hermano 2 es el mayor " + edad + "y tienen una diferncia de " + dif;
    }
    
}



