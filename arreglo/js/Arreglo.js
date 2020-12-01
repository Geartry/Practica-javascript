function MetodosdeArreglos(){
    
    var arreglonumero = [1,2,50,60,4,8,3,5,6,5];
    var arreglo2 = [2,5,6,7,0]
    var arreglo3 = [1,2,3,11,22,3,5,111,33,24,1111];
    var arreglo4 = ["Manzana", "pera", "Mesa", "Estufa", "pared"]
    var arreglo5 = ["Quiero", "Aprender"]

    // agrego un numero al final del arreglo y cuenta cuantos numeros hay en el arreglo
    console.log(arreglonumero.push(4));

    // se utiliza para ver si se estan agregando los datos al arreglo
    console.log(arreglonumero.slice());

    // agrego un numero al inicio del arreglo y cuento cuantos numeros son en total
    console.log(arreglonumero.unshift(5));

    // lo utilizo para ver si el numero 5 se agrego al inicio del arreglo 
    console.log(arreglonumero.slice());


    console.log(arreglo2.slice());
   
    console.log(arreglo3);
   
    console.log(arreglo3.sort());

    console.log(arreglo4);

    console.log(arreglo4.sort());



    console.log(arreglonumero);
    console.log(arreglonumero.pop());
    console.log(arreglonumero.slice());

    console.log(arreglonumero);
    console.log(arreglonumero.shift());
    console.log(arreglonumero.slice());

    console.log(arreglonumero.reverse());

    console.log(arreglo5.join(" "));

    
}