
let parametros = window.location.search
let idRecibido = new URLSearchParams(parametros).get("id")
idRecibido = Number(idRecibido)


let productoseleccionado

obtenerID()

function obtenerID(){

    
    for(let i = 0; i < arrayJuegos.length; i++){
        
        if(arrayJuegos[i].id == idRecibido){

            productoseleccionado = arrayJuegos[i] 
            break

        }
    
    
    }

    if(!productoseleccionado){

        productoseleccionado = arrayJuegos[0]

    }

}



let imagenprincipal = document.querySelector("#imagenprincipal")
let imagenchica = document.querySelector("#imagenchica")
let detalleProducto = document.querySelector("#detalleproducto")
let novedades = document.querySelector("#novedades")



for(let i = 1; i < productoseleccionado.img.length; i++){

    let img = document.createElement("img")
    img.setAttribute("src", productoseleccionado.img[i])
    img.setAttribute("alt", `Captura de ${productoseleccionado.titulo}`)
    img.setAttribute("tabindex", "0")

    if(i === 1){

        img.classList.add("active")

    }

    imagenchica.insertAdjacentElement("beforeend", img)
    img.addEventListener("click", mostrarimagenes)
    img.addEventListener("keydown", function(event){

        if(event.key === "Enter" || event.key === " "){

            event.preventDefault()
            mostrarimagenes.call(this)

        }

    })

}

imagenprincipal.innerHTML = `<img src="${productoseleccionado.img[1]}" alt="Captura principal de ${productoseleccionado.titulo}">`

detalleProducto.innerHTML = `
<p class="eyebrow">Edición digital</p>
<h2> ${productoseleccionado.titulo} </h2>
<p>${productoseleccionado.descripcion}</p>
<div class="product-meta">
<span> <small>Precio</small> <b>$${productoseleccionado.precio}</b> </span>
<span> <small>Género</small> <b>${productoseleccionado.genero}</b> </span>
<span> <small>Modo</small> <b>${productoseleccionado.modojuego}</b> </span>
</div>
`

let resultado = ""

function randomizar (min, max){

    resultado = Math.floor(Math.random() * (max - min + 1) + min)
    return resultado
    


}

randomizar(0,26)


function cargarNovedades(){

    novedades.innerHTML = `<h2> Recomendamos... </h2>

        <img src="${arrayJuegos[resultado].img[0]}" alt="${arrayJuegos[resultado].titulo}">

         <a href="index-Productos.html?id=${arrayJuegos[resultado].id}">Ver info...</a>
        
    `
    novedades.classList.add("visible")

    setTimeout(ocultarNovedades, 5000)

}

function ocultarNovedades(){

    novedades.classList.remove("visible")

}

setTimeout(cargarNovedades, 1500)


function mostrarimagenes(){

    let atributo = this.getAttribute("src")
    let imagenActiva = imagenprincipal.querySelector("img")

    imagenActiva.setAttribute("src", atributo)
    imagenchica.querySelectorAll("img").forEach(function(imagen){

        imagen.classList.remove("active")

    })
    this.classList.add("active")
    
}



let accionesProducto = document.createElement("div")
accionesProducto.setAttribute("class", "accionesProducto")
detalleProducto.insertAdjacentElement("beforeend", accionesProducto)

let div = document.createElement("div")
accionesProducto.insertAdjacentElement("beforeend", div)
div.setAttribute("class", "calificacion")
div.setAttribute("aria-label", `Calificación: ${productoseleccionado.calificacion.length} de 5 estrellas`)

let contador = 0

for(let i = 0; i < productoseleccionado.calificacion.length; i++){

    
    mostrarcalificacion()
    contador ++

}

function mostrarcalificacion(){

    div.innerHTML += 
    `<img id="estrellas" src="${productoseleccionado.calificacion[contador]}" alt="">`

}

let div2 = document.createElement("div")
accionesProducto.insertAdjacentElement("beforeend", div2)
div2.setAttribute("class", "btn")


div2.innerHTML = `<button type="button" id="boton2">Comprar ahora</button>`









