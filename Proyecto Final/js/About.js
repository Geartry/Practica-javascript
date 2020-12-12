function Submit(){
    var name = document.getElementById("nombre1").value;
    var name2 = document.getElementById("nombre2").value;
    var mail = document.getElementById("email").value;
    var mesagge = document.getElementById("mensaje").value;

    if(name != "" && name2 != "" && mail != "" && mesagge != ""){
        localStorage.setItem("Nombre", name);
        localStorage.setItem("Apellido", name2);
        localStorage.setItem("Email", mail);
        localStorage.setItem("Mensaje", mesagge);

        alert ("La informacion se guardo correctamente")
    }else{
        alert("Por favor rellene todos los campos")
    }
}

function Subscribe(){
    var correo = document.getElementById("correo").value;

    if(correo != ""){
        localStorage.setItem("Correo", correo);

        alert("Se le notificararn de los post mas nuevos")
    }else{
        alert("Rellene el campo establecido")
    }
}

function Login(){
    var email = document.getElementById("mail").value;
    var password = document.getElementById("contra").value;

    if(email != "" && password != ""){
        localStorage.setItem("Mail", email)
        localStorage.setItem("Password", password)

    }else{
        alert("No se a podido iniciar sesion")
    }
}