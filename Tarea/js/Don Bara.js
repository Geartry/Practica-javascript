function EventListener(){
    document.getElementById("descuento"); addEventListener("click", Porcentaje());
}

function Porcentaje(){

    var precio = Number(document.getElementById("precio").value);

    var imprimirdescuento = document.getElementById("descuentoagregado");

    var operacion = 0;

    var descuento = 0;

    if(precio > 3600){
        operacion = precio * .84;
        descuento = precio - operacion;
        console.log("Tu descuento va a ser de $" + descuento + " por lo que tu producto va a costar un total de $" + operacion + " disfuta de tu compra");
        imprimirdescuento.innerText = "Tu descuento va a ser de $" + descuento + " por lo que tu producto va a costar un total de $" + operacion + " disfuta de tu compra";
    }else{
        operacion = precio * .97;
        descuento = precio - operacion;
        console.log("Tu descuento va a ser de  $" + descuento + " por lo que tu producto va a costar un total de $" + operacion + " disfrute de su compra");
        imprimirdescuento.innerText = "Tu descuento va a ser de  $" + descuento + " por lo que tu producto va a costar un total de $" + operacion + " disfrute de su compra";
    }
}                                                      