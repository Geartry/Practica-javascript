function EventListener(){
    document.getElementById("click1").addEventListener("click", Daleclick1());
}

function Daleclick1(){
    var listado = document.getElementById("salida1")
    listado.innerText = "";

    for(var x=1;x <= 20; x++){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        listado.appendChild(lista)
    }
}





