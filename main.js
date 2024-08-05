let tareas = [];

function agregarTarea(descripcion) {
    const nuevaTarea = {
        descripcion: descripcion,
        completada: false,
    }
    tareas.push(nuevaTarea);
}

function listarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let listaTareas = "";
        tareas.forEach((tarea, index) => {
            listaTareas += `${index + 1}. ${tarea.descripcion} [${tarea.completada ? "Completada" : "Pendiente"}]\n`;
        });
        alert(listaTareas);
    }
}
function completarTarea() {
    listarTareas();
    const indice = parseInt(prompt("Ingrese el número de la tarea que desea marcar como completada:")) - 1;
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        alert("Tarea marcada como completada.");
    } else {
        alert("Índice de tarea no válido.");
    }
}
function eliminarTarea() {
    listarTareas();
    const indice = parseInt(prompt("Ingrese el número de la tarea que desea eliminar:")) - 1;
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        alert("Tarea eliminada.");
    } else {
        alert("Índice de tarea no válido.");
    }
}
function menu() {
    let opcion;
    do {
        opcion = prompt("TO-DO-LIST - Por favor seleccione una opción:\n1. Agregar tarea\n2. Listar tareas\n3. Marcar tarea como completada\n4. Eliminar tarea\n5. Salir");
        switch(opcion) {
            case "1":
                const descripcion = prompt("Ingrese la descripción de la tarea:");
                agregarTarea(descripcion);
                break;
            case "2":
                listarTareas();
                break;
            case "3":
                completarTarea();
                break;
            case "4":
                eliminarTarea();
                break;
            case "5":
                alert("Saliendo...");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
        }
    } while(opcion !== "5");
}

menu();