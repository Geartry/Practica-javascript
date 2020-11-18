function EventListener(){
    document.getElementById("click4").addEventListener("click", Daleclick4());
}

function Daleclick4(){
    var listado = document.getElementById("salida4");
    listado.innerText = "";

    for(var x=5;x >= 15; x++){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
    }
}