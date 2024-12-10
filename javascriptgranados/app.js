const contenedor = document.getElementById ("contenedor1")

function cambiarDom(){
    const titulo1 = document.getElementById ("titulo 1")
    const titulo2 = document.getElementById ("titulo 2")
    const parrafo1 = document.getElementById ("parrafo1")
    console.log (parrafo1)
    titulo1.textContent= "nuevo titulo"
    parrafo1.innerHTML= "nuevo texto del parrafo"
}

function otrafuncion(){

    const contenedor1 = document.getElementById ("contenedor1")
    const contenedor2 = document.getElementById ("contenedor2")

    contenedor1.textContent= "nuevo titulo"
    contenedor2.innerHTML= "nuevo texto del parrafo"
}
function cambiarRuta(){
    console.log("test")
    const enlace = document.querySelector("a")
    console.log(enlace)
    enlace.setAttribute("href","https://www.youtube.com")
}
function otrafuncion(){
    const caja = document.querySelector ("a")
    caja.style.color = "red";
}


function ocultar(){
    contenedor.classList.toggle("oculto");
}


function cambiar(){
    contenedor.classList.toggle("secundaria")
    contenedor.style.marginLeft= "400px"
}

function Mover(){
    contenedor.style.marginLeft= "0px"
    contenedor.style.backgroundcolor = "yellow"
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = 'Soy un nuevo DIV';
    document.body.appendChild(nuevoDiv);
}

