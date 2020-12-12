var Persona = {
	Nombre: "Gerardo",
	Apellido: "Esquivel",
	Edad: 20,
	Genero: "Masculino",
	Nacionalidad: "Mexicana" 
}

var Comida = {
	Mexicana: "Tacos",
	España: "Paeya",
	Francesa: "Fondeu de queso",
	Italiana: "Lasaña",
	Estadounidense: "Hamburguesa"
}

var Películas = {
	Terror: "IT",
	Comedia: "'Érase una vez en Hollywood",
	Ficción: "Avergers End Game",
	Romanticas: "La forma del agua",
}

var Música = {
    Rock: "Nirvana",
    Pop: "Michael Jackson",
    HipHop: "Kanye West",
    Reggaeton: "Daddy Jankie"
}

function GuardarPersona(){
    localStorage.setItem("Usario", JSON.stringify(Persona))
}

function ObtenerPersona(){

    var nombre = document.getElementById("impnombre")
    var edad = document.getElementById("impedad")
    var genero = document.getElementById("impgenero")
    var nacionalidad = document.getElementById("impnacionalidad")

    localStorage.getItem("Usuario")

    nombre.innerText = "Mi nombre es: " + Persona.Nombre + " " + Persona.Apellido;
    edad.innerText = "Mi edad es: " + Persona.Edad;
    genero.innerText = "Mi genero es: " + Persona.Genero;
    nacionalidad.innerText = "Mi nacionalidad es: " + Persona.Nacionalidad;
}

function GuardarComida(){
    localStorage.setItem("infocomida", JSON.stringify(Comida))
}

function ObtenerComida(){

    var mexicana = document.getElementById("impmexicana")
    var española = document.getElementById("impespañola")
    var francesa = document.getElementById("impfrancesa")
    var italiana = document.getElementById("impitaliana")
    var americana = document.getElementById("impamericana")

    localStorage.getItem("Usuario")

    mexicana.innerText = "La comida tipica de Mexico es: " + Comida.Mexicana;
    española.innerText = "La comida tipica de España es: " + Comida.España;
    francesa.innerText = "La comida tipica de Francia es: " + Comida.Francesa;
    italiana.innerText = "La comida tipica de Italia es: " + Comida.Italiana;
    americana.innerText = "La comida tipica de Estados Unidos es: " + Comida.Estadounidense;
}

function GuardarPelicula(){
    localStorage.setItem("Infopelis", JSON.stringify(Películas))
}

function ObtenerPelicula(){

    var terror = document.getElementById("impterror")
    var comedia = document.getElementById("impcomedia")
    var ficcion = document.getElementById("impficcion")
    var romance = document.getElementById("impromance")

    localStorage.getItem("Infopelis")

    terror.innerText = "Una pelicula de terror es: " + Películas.Terror;
    comedia.innerText = "Una pelicula de comedia es: " + Películas.Comedia;
    ficcion.innerText = "Una pelicula de ficcion es: " + Películas.Ficción;
    romance.innerText = "Una pelicula de romance es: " + Películas.Romanticas;
}

function GuardarMusica(){
    localStorage.setItem("Infomusica", JSON.stringify(Música))
}

function ObtenerMusica(){

    var rock = document.getElementById("improck")
    var pop = document.getElementById("imppop")
    var hiphop = document.getElementById("imphiphop")
    var regaetton = document.getElementById("impreggaeton")

    localStorage.getItem("Infomusica")

    rock.innerText = "Una banda del rock es: " + Música.Rock;
    pop.innerText = "Un artista del pop es: " + Música.Pop;
    hiphop.innerText = "Un artista del hiphop es: " + Música.HipHop;
    regaetton.innerText = "Un artista del regaetton es: " + Música.Reggaeton;
}

