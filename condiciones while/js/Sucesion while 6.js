function EventListener(){
    document.getElementById("click6"), addEventListener("click", Daleclick6());
}

function Daleclick6(){

    var listado = document.getElementById("salida6");
    listado.innerText = "";
    var x = 50;

    while(x >= 5){

        if(x % 3 == 0){

            var lista = document.createElement("li");
            lista.setAttribute("class", "list-group-item")
            lista.innerText = x;
            listado.appendChild(lista);
            
        }

        x-- 
    }
}