function EventListener(){
    document.getElementById("click2").addEventListener("click", Daleclick2());
}

function Daleclick2(){
    var listado = document.getElementById("salida2");
    listado.innerText = "";

    for(var x=1;x <= 16; x+=3){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        listado.appendChild(lista)
    }
}