function ejecutarFuncion(funcion, pos, listaFunciones){
    var resultado = false;
    console.log("EJECUTANDO FUNCION: " + funcion.name);
    try
    {
        if(funcion()){
            mostrarMensajeCorrecto(funcion.name);
            resultado = true;
        }else{
            mostrarMensajeErroneo(funcion.name);
        }
    }catch (exception){
        console.error("ERROR AL EJECUTAR LA FUNCION: " + exception);
    }
    return resultado;
}

function mostrarMensajeCorrecto(nombreFuncion){
    console.log("LAS VARIABLES SE HAN DECLARADO CORRECTAMENTE: " + nombreFuncion);
}

function mostrarMensajeErroneo(nombreFuncion){
    console.error("LAS VARIABLES NO SE HAN DECLARADO CORRECTAMENTE: " + nombreFuncion);
}

function comprobarFunciones(funciones){
    var todoCorrecto = funciones.every(ejecutarFuncion);
    if(todoCorrecto){
        alert("HAS COMPLETADO CORRECTAMENTE EL EJERCICIO");
    }else{
        alert("NO SE HA COMPLETADO EL EJERCICIO");
    }
}