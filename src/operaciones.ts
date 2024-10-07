import { Estudiante } from './Estudiantes';
export const insertarEstudiante = function (estudiante: Estudiante, arregloEstudiantes: Estudiante[]){
    //instrucciones para agregar(create) el estudiante al arreglo de estudiante metodo array en js permite insertar un elemnto al arreglo
arregloEstudiantes.push(estudiante);
}
export const actualizarEstudiante = function (indice: number, listaEstudiante: Estudiante[], nombre: string, apellido: string){
    // instrucciones para actualizar el estudiante que se encuentra en el indice indicando en el parametro
}

export const borrarEstudiante = function( indice:number, listaEstudiante: Estudiante[]){
    // instrucciones para eliminar un elemento del arreglo que esten em el indice del parametro
    listaEstudiante.splice(indice,1);
}

