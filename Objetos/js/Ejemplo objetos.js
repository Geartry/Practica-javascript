function Objetos(){
    // un objeto en programacion es um objeto, que se le da propiedade

    // se esta creando un objeto llamado coches, y dentro de las llaves estan sus propiedades
    var coches = {
        // propiedad son las cararcteristicas comunes de un objeto 
        puertas:2,
        ruedas:4, 
        color:"azul",
        año:2010, 
        luces: 4, 
        espejos: 2
    }; //indico que ya termine de crear el objeto

    var coches2 = {
        puertas:4,
        ruedas:4, 
        color:"rojo",
        año:2020, 
        luces: 4, 
        espejos: 2
    }

    var coches3 = {
        puertas:4,
        ruedas:4, 
        color:"verde",
        año:2015,
        luces: 4, 
        espejos: 2
    };
    
    var coches4 = {
        puertas:4,
        ruedas:4, 
        color:"negro",
        año:2018,
        luces: 4, 
        espejos: 2
    };

    // creo un objeto llamado fabricantes, con los diferentes tipos de marca
    var Fabricantes = {
        marca1: "Ford", 
        marca2: "Nisssan",//coche2
        marca3: "Ram",//coche3
        marca4: "Silverado",//coche4
    };

    // creamos el objeto coche con las caracteristicas del coche
    
    var Ford = {
        puertas:coches.puertas,
        ruedas:coches.ruedas, 
        color:coches.color,
        año:coches.año,
        luces:coches.luces,
        espejos:coches.espejos,
        marca:Fabricantes.marca1 
    };

    console.log(Ford);
    console.log(Ford.espejos);
    console.log(Ford.luces);
    console.log(Ford.color);

    var Nissan = {
        puertas:coches2.puertas,
        ruedas:coches2.ruedas, 
        color:coches2.color,
        año:coches2.año,
        luces:coches2.luces,
        espejos:coches2.espejos,
        marca:Fabricantes.marca2 
    };

    console.log(Nissan);
    console.log(Nissan.marca);
    console.log(Nissan.año);
    console.log(Nissan.ruedas);

    var Ram = {
        puertas:coches3.puertas,
        ruedas:coches3.ruedas, 
        color:coches3.color,
        año:coches3.año,
        luces:coches3.luces,
        espejos:coches3.espejos,
        marca:Fabricantes.marca3 
    };

    console.log(Ram);
    console.log(Ram.espejos);
    console.log(Ram.luces);
    console.log(Ram.ruedas);

    var Silverado = {
        puertas:coches4.puertas,
        ruedas:coches4.ruedas, 
        color:coches4.color,
        año:coches4.año,
        luces:coches2.luces,
        espejos:coches2.espejos,
        marca:Fabricantes.marca2 
    };

    console.log(Silverado);
    console.log(Silverado.);
    console.log(Silverado);
    console.log(Silverado);
}