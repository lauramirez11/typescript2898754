import { Estudiante } from "./Estudiantes";
import recorrerEstudiantes from "./recorrerEstudiantes";
import { insertarEstudiante, actualizarEstudiante, borrarEstudiante } from "./operaciones";



//definiendo objetos(literales) estudiantes
const estudiante1 : Estudiante ={
nombre : "Laura",
apellido : "ramirez",
edad : 18,
tipoIdentificacion: "CC",
numeroIdentificacion: 1023374211,
}

const estudiante2 : Estudiante= {
    nombre : "Maria",
    apellido : "lopez",
    edad : 19,
    tipoIdentificacion: "TI",
    numeroIdentificacion: 2023374212,
}

const estudiante3 : Estudiante= {
    nombre : "Pedro",
    apellido : "Garcia",
    tipoIdentificacion: "CE",
    numeroIdentificacion: 3023374213,
}
const estudiante4 : Estudiante  = {
    nombre : "Juan",
    apellido : "Perez",
    edad : 20,
    tipoIdentificacion: "CC",
}
// arreeglo de estudiantes
const listaEstudiante : Estudiante[] = [estudiante1, estudiante2,]

// recorrer estudiantes
recorrerEstudiantes(listaEstudiante);

//operaciones con arreglo
console.log("----------")
console.log("antes de insertar")
insertarEstudiante(estudiante2, listaEstudiante)
console.log(listaEstudiante)
console.log("----------")
console.log("antes de insertar")
/*actualizarEstudiante(1, listaEstudiante, "chicho", "serna")
console.log(listaEstudiante)*/

console.log("----------")
console.log("antes de borrar")
console.log(listaEstudiante)
borrarEstudiante(1, listaEstudiante)
console.log("----------")
console.log("despues de borrar")
console.log(listaEstudiante)




