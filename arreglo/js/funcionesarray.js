function FuncionArreglo(){

    var Diassemana = new Array (7); //se crea un cuadro con 7 posiciones 

    //Se va a llenar la informacion dentro de los cuadros
    Diassemana[0] = "Lunes";
    Diassemana[1] = "Martes";
    Diassemana[2] = "Miercoles";
    Diassemana[3] = "Jueves";
    Diassemana[4] = "Viernes";
    Diassemana[5] = "Sabado";
    Diassemana[6] = "Domingo";

    //imprimir el arreglo
    console.log(Diassemana[0], Diassemana[1], Diassemana[2], Diassemana[3], Diassemana[4],Diassemana[5], Diassemana[6]);
   
    // Arreglo abreviado
    var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

     console.log(semana[0], semana[1], semana[2], semana[3], semana[4], semana[5], semana[6]);


    //  Arreglo con diferentes tipos de datos 
     var persona = ["Alejandro", 20, 8, 5, true, false]

     console.log(persona[0], persona[1], persona[2], persona[3], persona[4], persona[5]);
}