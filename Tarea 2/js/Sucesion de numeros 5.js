function EventListener(){
    document.getElementById("click5"), addEventListener("click", Daleclick5());
    
    document.getElementById("click6"), addEventListener("click", Daleclick6());

}

function Daleclick5(){

    var listado = document.getElementById("salida5")
    listado.innerText = "";

    for(var x = 5; x <= 50; x+=5){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item")
        lista.innerText = x;
        listado.appendChild(lista)
    }
}

function Daleclick6(){

    var listado = document.getElementById("salida6")
    listado.innerText = "";

    for(var x = 5; x <= 50; x++){
        if( x % 5 == 0){
            var lista = document.createElement("li");
            lista.setAttribute("class", "list-group-item")
            lista.innerText = x;
            listado.appendChild(lista);
        }
    }
}


