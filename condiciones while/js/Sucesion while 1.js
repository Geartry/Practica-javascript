function EventListener(){
    document.getElementById("click1").addEventListener("click", Daleclick1());
}

function Daleclick1(){
    var listado = document.getElementById("salida1")
    listado.innerText = "";
    var x = 1;

    while(x <= 20){

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);

        x++;
    }
}





