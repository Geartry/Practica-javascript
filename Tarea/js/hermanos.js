function EventListener(){
        document.getElementById("Calcularedad").addEventListener("click", Calcularedad());
    }

    function Calcularedad(){

        var pedro = Number(document.getElementById("edadpe").value);
       
        var pablo = Number(document.getElementById("edadpa").value);
       
        var imprimirmensaje = document.getElementById("imprimiredad");

        var dif1 = pedro - pablo;

        var dif2 = pablo -pedro

        if(pedro > pablo){
            imprimirmensaje.innerText = "Pedro es el hermano mayor con " + pedro + " años y tienen una diferencia de " + dif1 + " años";
        }
        else if(pedro < pablo){
            imprimirmensaje.innerText = "Pablo es el hermano mayor con " + pablo + " años y tienen una diferncia de " + dif2 + " años";
        }

    }