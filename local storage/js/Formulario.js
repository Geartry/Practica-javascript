function GuardarInformacion(){

    var NomUsuario = String(document.getElementById("usuario").value)
    var Email = String(document.getElementById("email").value)
    var Password1 = String(document.getElementById("password1").value)
    var Password2 = String(document.getElementById("password2").value)

    // Compara que la informacion se escriba en los inputs
    if(NomUsuario != "" && Email != "" && Password1 != "" && Password2){
        localStorage.setItem("NombrUsuario", NomUsuario);
        localStorage.setItem("Email", Email);

        if(Password1 == Password2){
        localStorage.setItem("Password", Password1);
        localStorage.setItem("Password2", Password2);

        alert("la informacion se se guardo correctamente")
        }else{
            alert("Las contraseñas no coinciden")
        }
        
    }else{
        alert("Revisa la informacion, que no esta correcta")
    }
       
}

function ObtenerInformacion(){
    var imprimirNombre = document.getElementById("Nombre")
    var imprimirEmail = document.getElementById("Email")
    var imprimirNombrepass = document.getElementById("password")

    imprimirNombre.innerText = "El nombre del usuario es: " + localStorage.getItem("NombrUsuario");
    imprimirEmail.innerText = "El correo del usuario es: " + localStorage.getItem("Email");
    imprimirNombrepass.innerText = "La contraseña del usuario es: " +  localStorage.getItem("Password");

}