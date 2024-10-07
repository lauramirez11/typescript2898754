import { Estudiante } from "./Estudiantes";

function recorrerEstudiantes(arregloEstudiantes: Estudiante[]){
arregloEstudiantes.forEach(function(elemento){
    console.log(elemento);
    console.log("---------")
});
}
export default recorrerEstudiantes;