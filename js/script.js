
/* SLIDER */
let slider = document.querySelector("#slider")
let contador = 1


function cargarSlider(){


    slider.style.backgroundImage = `url("${arrayJuegos[contador].img[0]}")`
    contador++

    if(contador >= 9){

        contador = 0

    }
 
    
}

setInterval(cargarSlider, 7000)


/* GRILLA */

let primeraseccion = document.querySelector("#primeraseccion")
let grilla = document.querySelector("#grilla")

mostrarproductos()

function mostrarproductos(){

    for(let i = 0; i < arrayJuegosRecientes.length; i++){

        grilla.innerHTML +=
        `<figure>

        <img src="${arrayJuegosRecientes[i].img[0]}" alt="${arrayJuegosRecientes[i].titulo}">
        <figcaption>

            <h3>${arrayJuegosRecientes[i].titulo}</h3>
            <p>${arrayJuegosRecientes[i].descripcionCorta}</p>    
            <a href="Index-Productos.html?id=${arrayJuegosRecientes[i].id}">Ver más</a>

        </figcaption>
    </figure>`

    }

}


/* CONTACTO */

let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let celular = document.querySelector("#celular")
let email = document.querySelector("#email")
let asunto = document.querySelector("#asunto")
let txtarea = document.querySelector("#txtarea")
let boton = document.querySelector("#boton")
let terminos = document.querySelector("#terminos")
let terminos2 = document.querySelector(".terminos2")
let formulario = document.querySelector("#formulario")
let imagen = document.querySelector("#imagen")
let img = ["img/2.jpg"]

nombre.addEventListener("blur", validarNombre)
apellido.addEventListener("blur", validarApellido)
celular.addEventListener("blur", validarCelular)
email.addEventListener("blur", validarEmail)
asunto.addEventListener("blur", validarAsunto)
txtarea.addEventListener("blur",validarArea)
boton.addEventListener("click", validarTerminos)
document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault()
  });


cargarImagenForm()

function cargarImagenForm(){

    imagen.style.backgroundImage = `url("${img[0]}")`

}



function validarNombre(){

    let nombreIngreso = nombre.value
    let letra = nombreIngreso.charAt(0)

    nombre.nextElementSibling.textContent = ""
    
    if(nombreIngreso.length == 0){

        nombre.nextElementSibling.textContent = "* Debe escribirse un nombre"
        nombre.nextElementSibling.style.color = "red"

    }else if(letra == letra.toLowerCase()){

        nombre.nextElementSibling.textContent = "* La primera letra debe comenzar en mayuscula"
        nombre.nextElementSibling.style.color = "red"
        nombre.focus()
        nombre.value = ""

    }else{


        nombre.nextElementSibling.textContent = "Nombre Valido"
        nombre.nextElementSibling.style.color = "green"
        apellido.focus()

    }

    for(let i = 1; i < nombreIngreso.length; i++){

        if(!isNaN(nombreIngreso.charAt(i))){

            nombre.nextElementSibling.textContent = "* No puede haber numeros "
            nombre.nextElementSibling.style.color = "red"
            nombre.focus()
            nombre.value = ""

        }else if(nombreIngreso.charAt(i) == nombreIngreso.charAt(i).toUpperCase()){

            nombre.nextElementSibling.textContent = "* Solo puede estar en mayuscula la primera letra "
            nombre.nextElementSibling.style.color = "red"
            nombre.focus()
            nombre.value = ""

        }
    }
}



function validarApellido(){

    let apellidoIngreso = apellido.value
    let letra = apellidoIngreso.charAt(0)

    apellido.nextElementSibling.textContent = ""
    
    if(apellidoIngreso.length == 0){

        apellido.nextElementSibling.textContent = "* Debe escribirse un apellido"
        apellido.nextElementSibling.style.color = "red"

    }else if(letra == letra.toLowerCase()){

        apellido.nextElementSibling.textContent = "* La primera letra debe comenzar en mayuscula"
        apellido.nextElementSibling.style.color = "red"
        apellido.focus()
        apellido.value = ""

    }else{

       
        apellido.nextElementSibling.textContent = "Apellido Valido"
        apellido.nextElementSibling.style.color = "green"
        celular.focus()

    }

    for(let i = 1; i < apellidoIngreso.length; i++){

        if(!isNaN(apellidoIngreso.charAt(i))){

            apellido.nextElementSibling.textContent = "* No puede haber numeros "
            apellido.nextElementSibling.style.color = "red"
            apellido.focus()
            apellido.value = ""

        }else if(apellidoIngreso.charAt(i) == apellidoIngreso.charAt(i).toUpperCase()){

            apellido.nextElementSibling.textContent = "* Solo puede estar en mayuscula la primera letra "
            apellido.nextElementSibling.style.color = "red"
            apellido.focus()
            apellido.value = ""
        }

    }
}



function validarCelular(){

    let celularIngreso = celular.value

    if(celularIngreso.length == 0){

        celular.nextElementSibling.textContent = "* Debe ingresar un numero telefonico"
        celular.nextElementSibling.style.color = "red"

    }else if (celularIngreso.length > 9){

        celular.nextElementSibling.textContent = "* No puede tener mas de 9 digitos"
        celular.nextElementSibling.style.color = "red"
        celular.focus()
        celular.value = ""

    }else{

        celular.nextElementSibling.textContent = "Numero Valido"
        celular.nextElementSibling.style.color = "green"
        email.focus()

    }

    for(let i = 1; i < celularIngreso.length; i++){

        if(isNaN(celularIngreso.charAt(i))){

            celular.nextElementSibling.textContent = "* No puede haber letras "
            celular.nextElementSibling.style.color = "red"
            celular.focus()
            celular.value = ""
        }
    }

}




function validarEmail(){

    let mailIngreso = email.value
    let posicionarroba = mailIngreso.indexOf("@")
    let posicionpunto = mailIngreso.lastIndexOf(".")

    email.nextElementSibling.textContent = ""

    if(mailIngreso.length == 0){

        email.nextElementSibling.textContent = "* Debe ingresar un mail"
        email.nextElementSibling.style.color = "red"

    }else if(posicionarroba == -1){

        email.nextElementSibling.textContent = "* Debe haber una @"
        email.nextElementSibling.style.color = "red"
        email.focus()
        email.value = ""

    }else if(posicionarroba != mailIngreso.lastIndexOf("@")){

        email.nextElementSibling.textContent = "* No puede haber mas de una @"
        email.nextElementSibling.style.color = "red"
        email.focus()
        email.value = ""

    }else if(mailIngreso.charAt(posicionarroba + 1) == ""){

        email.nextElementSibling.textContent = "* Debe haber contenido despues de la @"
        email.nextElementSibling.style.color = "red"
        email.focus()
        email.value = ""

    }else if(posicionpunto == -1){
        
        email.nextElementSibling.textContent = "* Debe haber un punto despues de la @"
        email.nextElementSibling.style.color = "red"
        email.focus()
        email.value = ""

    }else if(mailIngreso.charAt(posicionpunto + 1) == ""){

        email.nextElementSibling.textContent = "* Debe haber contenido despues del punto"
        email.nextElementSibling.style.color = "red"
        email.focus()
        email.value = ""

    }else{

        email.nextElementSibling.textContent = "Mail Valido"
        email.nextElementSibling.style.color = "green"
        asunto.focus()

    }

}




function validarAsunto(){

    let asuntoIngreso = asunto.value
    let letra = asuntoIngreso.charAt(0)

    asunto.nextElementSibling.textContent = ""
    
    if(asuntoIngreso.length == 0){

        asunto.nextElementSibling.textContent = "* Debe escribirse un asunto"
        asunto.nextElementSibling.style.color = "red"

    }else if(letra == letra.toLowerCase()){

        asunto.nextElementSibling.textContent = "* La primera letra debe comenzar en mayuscula"
        asunto.nextElementSibling.style.color = "red"
        asunto.focus()
        asunto.value = ""

    }else{


        asunto.nextElementSibling.textContent = "Asunto Valido"
        asunto.nextElementSibling.style.color = "green"
        txtarea.focus()

    }

    for(let i = 1; i < asuntoIngreso.length; i++){

        if(!isNaN(asuntoIngreso.charAt(i))){

            asunto.nextElementSibling.textContent = "* No puede haber numeros "
            asunto.nextElementSibling.style.color = "red"
            asunto.focus()
            asunto.value = ""

        }else if(asuntoIngreso.charAt(i) == asuntoIngreso.charAt(i).toUpperCase()){

            asunto.nextElementSibling.textContent = "* Solo puede estar en mayuscula la primera letra "
            asunto.nextElementSibling.style.color = "red"
            asunto.focus()
            asunto.value = ""

        }
    }
}




function validarArea(){

    let txtareaIngreso = txtarea.value

    txtarea.nextElementSibling.textContent = ""
    
    if(txtareaIngreso.length == 0){

        txtarea.nextElementSibling.textContent = "* Debe escribirse un texto"
        txtarea.nextElementSibling.style.color = "red"

    }else if(txtareaIngreso.length < 20){

        txtarea.nextElementSibling.textContent = "* Debe ser mayor de 20 caracteres"
        txtarea.nextElementSibling.style.color = "red"
        txtarea.focus()
        txtarea.value = ""

    }else{

        txtarea.nextElementSibling.textContent = "Mensaje Valido"
        txtarea.nextElementSibling.style.color = "green"

    }
}


function validarTerminos(){

    if(terminos.checked == false){

        terminos2.nextElementSibling.textContent = "* Tiene que aceptar los terminos y condiciones"
        terminos2.nextElementSibling.style.color = "red"

    }else{

        terminos2.nextElementSibling.textContent = ""

    }

}
