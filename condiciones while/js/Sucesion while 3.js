function EventListener(){
    document.getElementById("click3").addEventListener("click", Daleclick3());
}

function Daleclick3(){
    var listado = document.getElementById("salida3");
    listado.innerText = "";
    var x = 10;

    while(x <= 20){

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        listado.appendChild(lista);

        x+=2;
    }
}