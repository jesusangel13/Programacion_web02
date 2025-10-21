let personas = []

function Limpiar() {
    document.getElementById('txtNombre').value = ''
    document.getElementById('txtApellido').value = ''
    document.getElementById('txtEdad').value = ''
}

function mostrarElementos() {
    document.getElementById('Elementos').innerHTML = ''
    for (let i = 0; i < personas.length; i++) {
        let p = personas[i]
        document.getElementById('Elementos').innerHTML +=
            (i + 1) + ". " + p.nombre + " " + p.apellido + " - Edad: " + p.edad + "<br>"
    }
}

function guardarElementos(event) {
    event.preventDefault()
    let nombre = document.getElementById('txtNombre').value
    let apellido = document.getElementById('txtApellido').value
    let edad = document.getElementById('txtEdad').value

    personas.push({ nombre: nombre, apellido: apellido, edad: edad })

    console.log(personas)
    Limpiar()
    mostrarElementos()
}
