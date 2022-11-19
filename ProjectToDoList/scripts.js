let inputPrincipal = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

class Item{
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea){
        let inputItem= document.createElement("input")
        inputItem.setAttribute("type","text")
        inputItem.setAttribute("disabled","true")
        //inputItem.disabled = true
        inputItem.classList.add("item-input") //("item-input")
        inputItem.value = nuevaTarea
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("botonEditar")
        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("botonRemover")
        newDiv.appendChild(inputItem)
        newDiv.appendChild(botonEditar)
        newDiv.appendChild(botonRemover)
        container.appendChild(newDiv)
        botonEditar.addEventListener("click", function(){
        inputItem.disabled = !inputItem.disabled
        if(inputItem.disabled == false){
            this.innerHTML="<i class='fas fa-lock-open'></i>"
            } else {this.innerHTML="<i class='fas fa-lock'></i>"}
        })
        botonRemover.addEventListener("click", function(){
            newDiv.remove()
        })

    }
}

function chequearInput(){
    if(inputPrincipal.value == "" ){
        alert("Ingrese una tarea para comenzar")
    } else new Item(inputPrincipal.value)
}

botonAgregar.addEventListener("click",chequearInput)