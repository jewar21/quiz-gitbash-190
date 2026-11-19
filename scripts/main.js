// TIPOS DE DATOS
/*
 - string
 - number
 - boolean
 - undefine --> Que no tiene valor
 - null --> Ausencia intencional de valor
*/

// let estudiante = "Tatiana"
// let edad = 18
// let matricula = true

// console.log(typeof estudiante);
// console.log(typeof edad);
// console.log(typeof matricula);

// if (edad >= 18) {
//     console.log("Es mayor de edad");

// } else {
//     console.log("NO es mayor de edad");
// }

// function saludar() {
//     console.log("Hola, vamos a desayunar!!");
// }

// saludar();

// function saludarEstudiante(nombre) {
//     console.log("Hola, " + nombre);
// }

// saludarEstudiante("Juan");
// saludarEstudiante("Yisus");
// saludarEstudiante("Maria");

// function sumar(num1, num2) {
//     return num1 + num2;
// }

// let resultado = sumar(-5, -9);
// console.log(resultado);

// ------ PRIMER CONTACTO CON EL DOM -------
// const titulo = document.querySelector(".hero h1");
// console.log(titulo);

// ------ LOADER -------
const loader = document.querySelector("#loader");
const website = document.querySelector("#website");

function showPage() {
    // Ocultar el spinner
    loader.classList.add("hide");
    // Mostrar la landing
    website.classList.add("show");
    // Habilitando la interacción con la web
    website.removeAttribute("inert");

    console.log("Landing cargada correctamente");

    setTimeout(() => {
        loader.remove();
    }, 700);
    
}

setTimeout(showPage, 3000);

