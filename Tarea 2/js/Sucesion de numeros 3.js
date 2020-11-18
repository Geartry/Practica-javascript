function EventListener(){
    document.getElementById("click3").addEventListener("click", Daleclick3());
}

function Daleclick3(){
    var listado = document.getElementById("salida3");
    listado.innerText = "";

    for(var x=10;x <= 20; x+=2){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        listado.appendChild(lista);
    }
}