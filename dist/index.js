"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recorrerEstudiantes_1 = __importDefault(require("./recorrerEstudiantes"));
const operaciones_1 = require("./operaciones");
//definiendo objetos(literales) estudiantes
const estudiante1 = {
    nombre: "Laura",
    apellido: "ramirez",
    edad: 18,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 1023374211,
};
const estudiante2 = {
    nombre: "Maria",
    apellido: "lopez",
    edad: 19,
    tipoIdentificacion: "TI",
    numeroIdentificacion: 2023374212,
};
const estudiante3 = {
    nombre: "Pedro",
    apellido: "Garcia",
    tipoIdentificacion: "CE",
    numeroIdentificacion: 3023374213,
};
const estudiante4 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    tipoIdentificacion: "CC",
};
// arreeglo de estudiantes
const listaEstudiante = [estudiante1, estudiante2,];
// recorrer estudiantes
(0, recorrerEstudiantes_1.default)(listaEstudiante);
//operaciones con arreglo
console.log("----------");
console.log("antes de insertar");
(0, operaciones_1.insertarEstudiante)(estudiante2, listaEstudiante);
console.log(listaEstudiante);
console.log("----------");
console.log("antes de insertar");
/*actualizarEstudiante(1, listaEstudiante, "chicho", "serna")
console.log(listaEstudiante)*/
console.log("----------");
console.log("antes de borrar");
console.log(listaEstudiante);
(0, operaciones_1.borrarEstudiante)(1, listaEstudiante);
console.log("----------");
console.log("despues de borrar");
console.log(listaEstudiante);
