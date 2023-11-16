///alert("Hola este es mi Javascript");

//let nombre = "Germán"
//nombre = "Agustín"
//nombre = 3

//var nombre1 = "Germán"

//const nombre2 = "Germán"

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);



//seleccionar elementos

let contenidoTitulo = "obra";

let titulo = document.querySelector("#trabajos .contenido h3")


titulo.innerHTML = contenidoTitulo;

//cambiar texto con condicionales

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "obra") {
    titulo.innerHTML = "Casa1";
} else {
    console.log("no cambia");
}

//cambiar texto mediante funcion

let cantidad = "tres";
let año = "2018";

let parrafo = document.querySelector("#nosotros .container .parrafo .par");

function cambiarTexto(cantidad,año) {
    let contenido = `Bienvenidos a nuestra página. Les contaremos un poco sobre nuestro estudio. Somos ${cantidad} arquitectos que transitamos la carreca juntos y venimos trabajando en equipo desde los primeros trabajos de la facultad, pasando por diferentes materias hasta la tesis de graduación. Poco tiempo despues de recibirnos decidimos iniciar este proyecto para poder continuar con la dinámica de trabajo en equipo. Iniciamos nuestra actividad como Estudio de Arquitectura a principios del año ${año}, y desde ese momento hasta ahora no hemos mantenido activos. A continuación les presentamos algunos de los trabajos que mas nos representan.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(cantidad, año);

//asignar clase mediante evento.

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
};


