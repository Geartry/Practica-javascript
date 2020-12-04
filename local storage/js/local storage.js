function LocalStorage(){

    localStorage.setItem("Nombre", "Vladimir Esquivel");
    localStorage.setItem("Numero", 30)
    localStorage.setItem("booleano", true)
    localStorage.setItem("Arreglo", [1,2,3,4,5])
    

    var ropa = {
        calzado:"tenis",
        calzado2:"pantuflas",
        calzado3:"chanclas",
        jeans:"pantalon de mezclilla" 
    }

    localStorage.setItem("Objeto", JSON.stringify(ropa));

    console.log(localStorage.getItem("Nombre"));
}