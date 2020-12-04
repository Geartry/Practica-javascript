function EventListener(){
    document.getElementById("producto1").addEventListener("click", samsung())
    document.getElementById("producto2").addEventListener("click", sony())
    document.getElementById("producto3").addEventListener("click", lg())
    document.getElementById("producto4").addEventListener("click", hp())
    document.getElementById("producto5").addEventListener("click", lenovo())
}

// para cuando sepa utilizar jquery y pueda mandar a llamar un objeto dentro de una funcion

// function Objeto(){

//     var laptop ={
//         TamañoPantalla:"13.5 pulgadas",
//         Mouse:"Touch pad",
// 	    Teclado:"Mecanico",  
//         Color:"Plateado",		
//  	    Precio:"949.99 dolares" 
//     }

//     var Celular = {
//         TamañoPantalla:"6.5 pulgadas",
//         Color:"rojo",	
//         Peso:"190 gramos",
//         Precio:"439.99 dolares"
//     }

//     var TV = {
//         Precio:"2299.99 dolares",
// 	    TamañoPantalla: "75 pulgadas",
// 	    Peso: "52.9 libras",
// 	    Altura:"32.7 pulgadas",
//         Ancho: "57 pulgadas"
//     }
    
//     var SmartWatch = {
//         Ancho:"46.2 milimietros",
//         Altura:"45 milimetros",
//         TamañoPantalla: "30.2 milimetros",
//         Peso:"43 gramos"
//     }

//     var AparatosElectrónicos = {
//         Marca1: "Samsung",
// 	    Marca2: "Sony",
// 	    Marca3: "LG",
// 	    Marca4: "HP",	
//         Marca5: "Lenovo",
//     }

//     var Samsung1 ={
//         marca:AparatosElectrónicos.Marca1,
//         pantalla:laptop.TamañoPantalla,
//         mouse:laptop.Mouse,
//         teclado:laptop.Teclado,
//         color:laptop.Color,
//         precio:laptop.Precio
//     }

//     var Samsung2 ={
//         marca:AparatosElectrónicos.Marca1,
//         pantalla:Celular.TamañoPantalla,
//         color:Celular.Color,
//         peso:Celular.Peso, 
//         precio:Celular.Precio
//     }

//     var Samsung3 ={
//         marca:AparatosElectrónicos.Marca1,
//         precio:TV.Precio,
// 	    pantalla:TV.TamañoPantalla,
// 	    peso:TV.Peso,
// 	    altura:TV.Altura,
//         Ancho:TV.Ancho	
//     }

//     var Samsung4 ={
//         marca:AparatosElectrónicos.Marca1,
//         ancho:SmartWatch.Ancho,
//         altura:SmartWatch.Altura,
//         pantalla:SmartWatch.TamañoPantalla,
//         peso:SmartWatch.Peso
//     }

// }

function samsung(){

    var laptop ={
        TamañoPantalla:"13.5 pulgadas",
        Mouse:"Touch pad",
	    Teclado:"Mecanico",  
        Color:"Plateado",		
 	    Precio:"949.99 dolares" 
    }

    var Celular = {
        TamañoPantalla:"6.5 pulgadas",
        Color:"rojo",	
        Peso:"190 gramos",
        Precio:"439.99 dolares"
    }

    var TV = {
        Precio:"2299.99 dolares",
	    TamañoPantalla: "75 pulgadas",
	    Peso: "52.9 libras",
	    Altura:"32.7 pulgadas",
        Ancho: "57 pulgadas"
    }
    
    var SmartWatch = {
        Ancho:"46.2 milimietros",
        Altura:"45 milimetros",
        TamañoPantalla: "30.2 milimetros",
        Peso:"43 gramos"
    }

    var AparatosElectrónicos = {
        Marca1: "Samsung",
	    Marca2: "Sony",
	    Marca3: "LG",
	    Marca4: "HP",	
        Marca5: "Lenovo",
    }

    var Samsung1 ={
        marca:AparatosElectrónicos.Marca1,
        pantalla:laptop.TamañoPantalla,
        mouse:laptop.Mouse,
        teclado:laptop.Teclado,
        color:laptop.Color,
        precio:laptop.Precio
    }

    var Samsung2 ={
        marca:AparatosElectrónicos.Marca1,
        pantalla:Celular.TamañoPantalla,
        color:Celular.Color,
        peso:Celular.Peso, 
        precio:Celular.Precio
    }

    var Samsung3 ={
        marca:AparatosElectrónicos.Marca1,
        precio:TV.Precio,
	    pantalla:TV.TamañoPantalla,
	    peso:TV.Peso,
	    altura:TV.Altura,
        Ancho:TV.Ancho	
    }

    var Samsung4 ={
        marca:AparatosElectrónicos.Marca1,
        ancho:SmartWatch.Ancho,
        altura:SmartWatch.Altura,
        pantalla:SmartWatch.TamañoPantalla,
        peso:SmartWatch.Peso
    }

    var listado = document.getElementById("listado1")
    
    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "laptop: " + JSON.stringify(Samsung1) + " Celular: " + JSON.stringify(Samsung2) + " Pantalla: " + JSON.stringify(Samsung3) + " Smartwatch: " + JSON.stringify(Samsung4);
    listado.appendChild(lista);
    
}

function sony(){

    var laptop ={
        TamañoPantalla:"13.5 pulgadas",
        Mouse:"Touch pad",
	    Teclado:"Mecanico",  
        Color:"Plateado",		
 	    Precio:"949.99 dolares" 
    }

    var Celular = {
        TamañoPantalla:"6.5 pulgadas",
        Color:"rojo",	
        Peso:"190 gramos",
        Precio:"439.99 dolares"
    }

    var TV = {
        Precio:"2299.99 dolares",
	    TamañoPantalla: "75 pulgadas",
	    Peso: "52.9 libras",
	    Altura:"32.7 pulgadas",
        Ancho: "57 pulgadas"
    }
    
    var SmartWatch = {
        Ancho:"46.2 milimietros",
        Altura:"45 milimetros",
        TamañoPantalla: "30.2 milimetros",
        Peso:"43 gramos"
    }

    var AparatosElectrónicos = {
        Marca1: "Samsung",
	    Marca2: "Sony",
	    Marca3: "LG",
	    Marca4: "HP",	
        Marca5: "Lenovo",
    }

    var Sony1 ={
        marca:AparatosElectrónicos.Marca2,
        pantalla:laptop.TamañoPantalla,
        mouse:laptop.Mouse,
        teclado:laptop.Teclado,
        color:laptop.Color,
        precio:laptop.Precio
    }

    var Sony2 ={
        marca:AparatosElectrónicos.Marca2,
        pantalla:Celular.TamañoPantalla,
        color:Celular.Color,
        peso:Celular.Peso, 
        precio:Celular.Precio
    }

    var Sony3 ={
        marca:AparatosElectrónicos.Marca2,
        precio:TV.Precio,
	    pantalla:TV.TamañoPantalla,
	    peso:TV.Peso,
	    altura:TV.Altura,
        Ancho:TV.Ancho	
    }

    var Sony4 ={
        marca:AparatosElectrónicos.Marca2,
        ancho:SmartWatch.Ancho,
        altura:SmartWatch.Altura,
        pantalla:SmartWatch.TamañoPantalla,
        peso:SmartWatch.Peso
    }

    var listado = document.getElementById("listado2")
    
    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "laptop: " + JSON.stringify(Sony1) + " Celular: " + JSON.stringify(Sony2) + " Pantalla: " + JSON.stringify(Sony3) + " Smartwatch: " + JSON.stringify(Sony4);
    listado.appendChild(lista);
}
function lg(){

    var laptop ={
        TamañoPantalla:"13.5 pulgadas",
        Mouse:"Touch pad",
	    Teclado:"Mecanico",  
        Color:"Plateado",		
 	    Precio:"949.99 dolares" 
    }

    var Celular = {
        TamañoPantalla:"6.5 pulgadas",
        Color:"rojo",	
        Peso:"190 gramos",
        Precio:"439.99 dolares"
    }

    var TV = {
        Precio:"2299.99 dolares",
	    TamañoPantalla: "75 pulgadas",
	    Peso: "52.9 libras",
	    Altura:"32.7 pulgadas",
        Ancho: "57 pulgadas"
    }
    
    var SmartWatch = {
        Ancho:"46.2 milimietros",
        Altura:"45 milimetros",
        TamañoPantalla: "30.2 milimetros",
        Peso:"43 gramos"
    }

    var AparatosElectrónicos = {
        Marca1: "Samsung",
	    Marca2: "Sony",
	    Marca3: "LG",
	    Marca4: "HP",	
        Marca5: "Lenovo",
    }

    var LG1 ={
        marca:AparatosElectrónicos.Marca3,
        pantalla:laptop.TamañoPantalla,
        mouse:laptop.Mouse,
        teclado:laptop.Teclado,
        color:laptop.Color,
        precio:laptop.Precio
    }

    var LG2 ={
        marca:AparatosElectrónicos.Marca3,
        pantalla:Celular.TamañoPantalla,
        color:Celular.Color,
        peso:Celular.Peso, 
        precio:Celular.Precio
    }

    var LG3 ={
        marca:AparatosElectrónicos.Marca3,
        precio:TV.Precio,
	    pantalla:TV.TamañoPantalla,
	    peso:TV.Peso,
	    altura:TV.Altura,
        Ancho:TV.Ancho	
    }

    var LG4 ={
        marca:AparatosElectrónicos.Marca3,
        ancho:SmartWatch.Ancho,
        altura:SmartWatch.Altura,
        pantalla:SmartWatch.TamañoPantalla,
        peso:SmartWatch.Peso
    }

    var listado = document.getElementById("listado3")
    
    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "laptop: " + JSON.stringify(LG1) + " Celular: " + JSON.stringify(LG2) + " Pantalla: " + JSON.stringify(LG3) + " Smartwatch: " + JSON.stringify(LG4);
    listado.appendChild(lista);
}

function hp(){

    var laptop ={
        TamañoPantalla:"13.5 pulgadas",
        Mouse:"Touch pad",
	    Teclado:"Mecanico",  
        Color:"Plateado",		
 	    Precio:"949.99 dolares" 
    }

    var AparatosElectrónicos = {
        Marca1: "Samsung",
	    Marca2: "Sony",
	    Marca3: "LG",
	    Marca4: "HP",	
        Marca5: "Lenovo",
    }

    var HP1 ={
        marca:AparatosElectrónicos.Marca4,
        pantalla:laptop.TamañoPantalla,
        mouse:laptop.Mouse,
        teclado:laptop.Teclado,
        color:laptop.Color,
        precio:laptop.Precio
    }

    var listado = document.getElementById("listado4")

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "laptop: " + JSON.stringify(HP1);
    listado.appendChild(lista);
}

function lenovo(){

    var laptop ={
        TamañoPantalla:"13.5 pulgadas",
        Mouse:"Touch pad",
	    Teclado:"Mecanico",  
        Color:"Plateado",		
 	    Precio:"949.99 dolares" 
    }

    var AparatosElectrónicos = {
        Marca1: "Samsung",
	    Marca2: "Sony",
	    Marca3: "LG",
	    Marca4: "HP",	
        Marca5: "Lenovo",
    }

    var Lenovo1 ={
        marca:AparatosElectrónicos.Marca5,
        pantalla:laptop.TamañoPantalla,
        mouse:laptop.Mouse,
        teclado:laptop.Teclado,
        color:laptop.Color,
        precio:laptop.Precio
    }

    var listado = document.getElementById("listado5")

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "laptop: " + JSON.stringify(Lenovo1);
    listado.appendChild(lista);
}