"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarEstudiante = exports.actualizarEstudiante = exports.insertarEstudiante = void 0;
const insertarEstudiante = function (estudiante, arregloEstudiantes) {
    //instrucciones para agregar(create) el estudiante al arreglo de estudiante metodo array en js permite insertar un elemnto al arreglo
    arregloEstudiantes.push(estudiante);
};
exports.insertarEstudiante = insertarEstudiante;
const actualizarEstudiante = function (indice, listaEstudiante, nombre, apellido) {
    // instrucciones para actualizar el estudiante que se encuentra en el indice indicando en el parametro
};
exports.actualizarEstudiante = actualizarEstudiante;
const borrarEstudiante = function (indice, listaEstudiante) {
    // instrucciones para eliminar un elemento del arreglo que esten em el indice del parametro
    listaEstudiante.splice(indice, 1);
};
exports.borrarEstudiante = borrarEstudiante;
