function EventListener(){
    document.getElementById("click").addEventListener("click", Daleclick());
}

function Daleclick(){

    var listado = document.getElementById("listado");

    for(let x = 0; x <= 100; x+=2){
        
        var lista = document.createElement("li")
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        listado.appendChild(lista);

    }
}