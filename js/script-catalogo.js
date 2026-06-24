
/* FILTRADO */


let generos = document.querySelector("#generos")
let texto = document.querySelector("#texto")

texto.addEventListener("keyup", filtradoTexto)
generos.addEventListener("change", mostrarFiltrado)

filtradoGeneros()

function filtradoGeneros(){

    for(let i = 0; i < arrayGeneros.length; i++){

        generos.innerHTML += `<option value = "${arrayGeneros[i]}"> ${arrayGeneros[i]} </option>`

    }

}


function mostrarFiltrado(){

    grilla.innerHTML = ""
    let valor = generos.value

    arrayFiltradoGrilla = []

    for(let i = 0; i < arrayJuegos.length; i++){

        if(arrayJuegos[i].genero == valor){

            arrayFiltradoGrilla.push(arrayJuegos[i])
            btn_numeros.innerHTML = ""

        }else if(valor == "todos"){

            cambiarGrilla()
            arrayFiltradoGrilla = []
            mostrarBotones()
            break

        }

    }

   
    mostrarproductos()

}

function filtradoTexto(){

    arrayFiltradoGrilla = []
    grilla.innerHTML = ""
    

    let nombre = texto.value.toLowerCase()

    for(let i = 0; i < arrayJuegos.length; i++){

        if((arrayJuegos[i].titulo.toLowerCase().includes(nombre)) && nombre != ""){

            arrayFiltradoGrilla.push(arrayJuegos[i])
            generos.value = "todos"

            btn_numeros.innerHTML = ""

        }else if(nombre == ""){

            cambiarGrilla()
            arrayFiltradoGrilla = []
            mostrarBotones()
            break

        }

    }

    
    mostrarproductos()


}


let radios = document.querySelectorAll(`input[name="modosjuego"]`)


for(let i = 0; i < radios.length; i++){

    radios[i].addEventListener("change", filtradoModosJuego)

}

function filtradoModosJuego(){

    grilla.innerHTML = ""

    arrayFiltradoGrilla = []

    let valorRadios = document.querySelector(`input[name="modosjuego"]:checked`).value

    for(let i = 0; i < arrayJuegos.length; i++){

        if(arrayJuegos[i].modojuego == valorRadios){

            arrayFiltradoGrilla.push(arrayJuegos[i])
            btn_numeros.innerHTML = ""

        }else if(valorRadios == "Todos"){

            cambiarGrilla()
            arrayFiltradoGrilla = []
            mostrarBotones()
            break

        }

    }

   
    mostrarproductos()

}



/* GRILLA */

let primeraseccion = document.querySelector("#primeraseccion")
let grilla = document.querySelector("#grilla")
let btn_numeros = document.querySelector("#btn_numeros")

cambiarGrilla()

function mostrarproductos(){

    for(let i = 0; i < arrayFiltradoGrilla.length; i++){

        grilla.innerHTML +=
        `<figure>

        <img src="${arrayFiltradoGrilla[i].img[0]}" alt="${arrayFiltradoGrilla[i].titulo}">
        <figcaption>

            <h3>${arrayFiltradoGrilla[i].titulo}</h3>
            <p>${arrayFiltradoGrilla[i].descripcionCorta}</p>    
            <a href="index-Productos.html?id=${arrayFiltradoGrilla[i].id}">Ver más</a>

        </figcaption>
    </figure>`

    }

}



mostrarBotones()

function mostrarBotones(){

    btn_numeros.innerHTML = ""
    let contador = 1

    for(let i = 0; i < arrayBotones.length; i++){

        btn_numeros.innerHTML +=

        `<img src="${arrayBotones[i].img[contador]}" alt="" id="${arrayBotones[i].id}">`
        contador = 0

    }

    let btn1 = document.querySelector("#btn1")

    btn1.addEventListener("click", cambiarGrilla)

    let btn2 = document.querySelector("#btn2")

    btn2.addEventListener("click", cambiarGrilla2)

    let btn3 = document.querySelector("#btn3")

    btn3.addEventListener("click", cambiarGrilla3)

}




function cambiarGrilla(){

    arrayFiltradoGrilla = []
    btn_numeros.innerHTML = ""
    let contador = 1

    for(let i = 0; i < 9; i++){

        arrayFiltradoGrilla.push(arrayJuegos[i])

    }

    
    for(let i = 0; i < arrayBotones.length; i++){

        btn_numeros.innerHTML +=

        `<img src="${arrayBotones[i].img[contador]}" alt="" id="${arrayBotones[i].id}">`
        contador = 0

    }

    grilla.innerHTML = ""
    mostrarproductos()

    let btn1 = document.querySelector("#btn1")

    btn1.addEventListener("click", cambiarGrilla)

    let btn2 = document.querySelector("#btn2")

    btn2.addEventListener("click", cambiarGrilla2)

    let btn3 = document.querySelector("#btn3")

    btn3.addEventListener("click", cambiarGrilla3)



}



function cambiarGrilla2(){

    arrayFiltradoGrilla = []
    btn_numeros.innerHTML = ""
    let contador = 0
    let cont = 0

    for(let i = 9; i < 18; i++){

        arrayFiltradoGrilla.push(arrayJuegos[i])

    }

    for(let i = 0; i < arrayBotones.length; i++){

        btn_numeros.innerHTML +=

        `<img src="${arrayBotones[i].img[contador - cont]}" alt="" id="${arrayBotones[i].id}">`
        contador ++
        cont = contador
        cont = contador - (2 - cont)

    }

    

    grilla.innerHTML = ""
    mostrarproductos()

    let btn1 = document.querySelector("#btn1")

    btn1.addEventListener("click", cambiarGrilla)

    let btn2 = document.querySelector("#btn2")

    btn2.addEventListener("click", cambiarGrilla2)

    let btn3 = document.querySelector("#btn3")

    btn3.addEventListener("click", cambiarGrilla3)

    

}




function cambiarGrilla3(){

    arrayFiltradoGrilla = []
    btn_numeros.innerHTML = ""
    let contador = 0
    let cont = 0

    for(let i = 18; i < 27; i++){

        arrayFiltradoGrilla.push(arrayJuegos[i])

    }

    for(let i = 0; i < arrayBotones.length; i++){

        btn_numeros.innerHTML +=

        `<img src="${arrayBotones[i].img[contador - cont]}" alt="" id="${arrayBotones[i].id}">`
        contador ++
        cont ++
        cont = contador - (cont - 1)

    }

    grilla.innerHTML = ""
    mostrarproductos()

    let btn1 = document.querySelector("#btn1")

    btn1.addEventListener("click", cambiarGrilla)

    let btn2 = document.querySelector("#btn2")

    btn2.addEventListener("click", cambiarGrilla2)

    let btn3 = document.querySelector("#btn3")

    btn3.addEventListener("click", cambiarGrilla3)

}






