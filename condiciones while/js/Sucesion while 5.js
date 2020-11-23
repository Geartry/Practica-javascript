function EventListener(){
    document.getElementById("click5"), addEventListener("click", Daleclick5());
    
    document.getElementById("click6"), addEventListener("click", Daleclick6());

}

function Daleclick5(){

    var listado = document.getElementById("salida5")
    listado.innerText = "";
    var x = 5;

    while(x <= 50){

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item")
        lista.innerText = x;
        listado.appendChild(lista)

        x+=5;
    }
}

function Daleclick6(){

    var listado = document.getElementById("salida6")
    listado.innerText = "";
    var x = 5;

    while(x <= 50){
        
        if( x % 5 == 0){

            var lista = document.createElement("li");
            lista.setAttribute("class", "list-group-item")
            lista.innerText = x;
            listado.appendChild(lista);


        }

         x++;
    }
}