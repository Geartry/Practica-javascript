function EventListener(){
    document.getElementById("click").addEventListener("click", Darleclick());

    document.getElementById("click2").addEventListener("click", Darleclick2());

    document.getElementById("click3").addEventListener("click", Darleclick3());
}

function Darleclick(){

    var salida = document.getElementById("salida1");

    // create element se utiliza para crear una etiqueta en javascript
    var boton = document.createElement("button")

    // darle forma al boton en el html
    boton.setAttribute("class", "btn btn-primary btn-lg btn-block");
    // darle un texto al boton
    boton.innerText = "Boton impreso"
    // se utiliza para imprimir el boton en el html
    salida.appendChild(boton);
}

function Darleclick2(){

    var salida2 = document.getElementById("salida2");

    // inicializar una variable con un 0, imprimie 5 veces un boton, se requiere un contador
    for(var x = 0; x < 5; x++){

        var button = document.createElement("button")
        button.setAttribute("class", "btn btn-primary btn-lg btn-block")
        button.setAttribute("id", "button");
        button.setAttribute("type", "button");
        button.innerText = "varios botones impresos"
        salida2.appendChild(button)
     }
}


function Darleclick3(){
    // var salida3 = 
    var listado = document.getElementById("listado");

    for(var x=0; x<5; x++){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
    }


}