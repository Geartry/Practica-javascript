function Login(){

    var usuario =document.getElementById("user").value;
    var password =document.getElementById("contraseña").value;

    localStorage.setItem("User", usuario)
    localStorage.setItem("Password", password)
}

function Obtener(){
    var imprimir = document.getElementById("obtener")

    imprimir.innerText = "El usuario y contraseña guardado son: " + localStorage.getItem("User") + localStorage.getItem("Password");
}