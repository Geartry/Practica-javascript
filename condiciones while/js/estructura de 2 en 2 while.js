function EventListener(){
    document.getElementById("click").addEventListener("click", Daleclick());
}

function Daleclick(){

    var listado = document.getElementById("listado");
    let x = 0;

    while(x <= 100){
        
        var lista = document.createElement("li")
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x
        listado.appendChild(lista);

        x+=2;
    }
}