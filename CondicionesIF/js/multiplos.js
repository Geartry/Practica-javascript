function EventListener(){
    document.getElementById("multiplo"); addEventListener("click", Calcularmultiplo());
}

function Calcularmultiplo(){

    var numero1 = Number(document.getElementById("num1").value);
    var numero2 = Number(document.getElementById("num2").value);
    var imprimir = document.getElementById("imprimirmultiplo");

    if(numero1 % numero2 == 0){
        imprimir.innerText = "Son multiplos";
        console.log(numero1 % 2);
        console.log(numero2 % 2);
    }else{
        imprimir.innerText = "No son multiplos";
        console.log(numero1 % 2)
        console.log(numero2 % 2)
    }
}