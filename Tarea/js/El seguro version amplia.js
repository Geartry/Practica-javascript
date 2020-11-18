function EventListener(){
    document.getElementById("calculo").addEventListener("click", Calcularprecio())
}

function Calcularprecio(){

    var plan = document.getElementById("plan").value;
    var alcohol = document.getElementById("alcohol").value;
    var lentes = document.getElementById("lentes").value;
    var enfermedad = document.getElementById("enfermedad").value;
    var edad = Number(document.getElementById("edad").value);
    var imprimir = document.getElementById("imprimirprecio");
    var CA = 1200;
    var DT = 950;
    var alcohol1 = .1;
    var lentes1 = .05;
    var enfermedad1 = .05;
    var edad1 = .2;
    var edad2 = .1;
    var prf = 1;
    var sum, total = 0;

    if(plan == 1 && alcohol == 4 && lentes == 7 && enfermedad == 10 && edad > 40){
        sum = prf + alcohol1 + lentes1 + edad1 + enfermedad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 5 && lentes == 7 && enfermedad == 10 && edad > 40){
        sum = prf + lentes1 + edad1 + enfermedad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 4 && lentes == 8 && enfermedad == 10 && edad > 40){
        sum = prf + alcohol1 + edad1 + enfermedad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 4 && lentes == 7 && enfermedad == 11 && edad > 40){
        sum = prf + alcohol1 + lentes1 + edad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 5 && lentes == 8 && enfermedad == 10 && edad > 40){
        sum = prf + edad1 + enfermedad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 4 && lentes == 8 && enfermedad == 11 && edad > 40){
        sum = prf + alcohol1 + edad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 5 && lentes == 7 && enfermedad == 11 && edad > 40){
        sum = prf + lentes1 + edad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 5 && lentes == 8 && enfermedad == 11 && edad > 40){
        sum = prf + edad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }

    // < 40

    if(plan == 1 && alcohol == 4 && lentes == 7 && enfermedad == 10 && edad < 40){
        sum = prf + alcohol1 + lentes1 + edad2 + enfermedad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 5 && lentes == 7 && enfermedad == 10 && edad < 40){
        sum = prf + lentes1 + edad2 + enfermedad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 4 && lentes == 8 && enfermedad == 10 && edad < 40){
        sum = prf + alcohol1 + edad2 + enfermedad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 4 && lentes == 7 && enfermedad == 11 && edad < 40){
        sum = prf + alcohol1 + lentes1 + edad2;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 5 && lentes == 8 && enfermedad == 10 && edad < 40){
        sum = prf + edad2 + enfermedad1;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 4 && lentes == 8 && enfermedad == 11 && edad < 40){
        sum = prf + alcohol1 + edad2;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 5 && lentes == 7 && enfermedad == 11 && edad < 40){
        sum = prf + lentes1 + edad2;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 1 && alcohol == 5 && lentes == 8 && enfermedad == 11 && edad < 40){
        sum = prf + edad2;
        console.log(sum)
        total = CA * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }

    // Daños a terceros

    if(plan == 2 && alcohol == 4 && lentes == 7 && enfermedad == 10 && edad > 40){
        sum = prf + alcohol1 + lentes1 + edad1 + enfermedad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 5 && lentes == 7 && enfermedad == 10 && edad > 40){
        sum = prf + lentes1 + edad1 + enfermedad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 4 && lentes == 8 && enfermedad == 10 && edad > 40){
        sum = prf + alcohol1 + edad1 + enfermedad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 4 && lentes == 7 && enfermedad == 11 && edad > 40){
        sum = prf + alcohol1 + lentes1 + edad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 5 && lentes == 8 && enfermedad == 10 && edad > 40){
        sum = prf + edad1 + enfermedad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 4 && lentes == 8 && enfermedad == 11 && edad > 40){
        sum = prf + alcohol1 + edad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 5 && lentes == 7 && enfermedad == 11 && edad > 40){
        sum = prf + lentes1 + edad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 5 && lentes == 8 && enfermedad == 11 && edad > 40){
        sum = prf + edad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }



    if(plan == 2 && alcohol == 4 && lentes == 7 && enfermedad == 10 && edad < 40){
        sum = prf + alcohol1 + lentes1 + edad2 + enfermedad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 5 && lentes == 7 && enfermedad == 10 && edad < 40){
        sum = prf + lentes1 + edad2 + enfermedad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 4 && lentes == 8 && enfermedad == 10 && edad < 40){
        sum = prf + alcohol1 + edad2 + enfermedad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 4 && lentes == 7 && enfermedad == 11 && edad < 40){
        sum = prf + alcohol1 + lentes1 + edad2;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 5 && lentes == 8 && enfermedad == 10 && edad < 40){
        sum = prf + edad2 + enfermedad1;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 4 && lentes == 8 && enfermedad == 11 && edad < 40){
        sum = prf + alcohol1 + edad2;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 5 && lentes == 7 && enfermedad == 11 && edad < 40){
        sum = prf + lentes1 + edad2;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
    if(plan == 2 && alcohol == 5 && lentes == 8 && enfermedad == 11 && edad < 40){
        sum = prf + edad2;
        console.log(sum)
        total = DT * sum;
        imprimir.innerText = "El costo de su plan seria de $" + total
    }
}