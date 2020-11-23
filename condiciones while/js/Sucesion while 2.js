function EventListener(){
    document.getElementById("click2").addEventListener("click", Daleclick2());
}

function Daleclick2(){
    var listado = document.getElementById("salida2");
    listado.innerText = "";
    var x = 1

    while(x <= 16){

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
        
        x+=3;
    }
}