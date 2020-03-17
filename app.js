let tareas = require('./tareas');
let accion = process.argv[2];
let chalk = require('chalk');
//console.log(tareas.leer()[2])
//console.log(process.argv[2])

switch(accion){
    case 'listar':
        console.log('tareas por ejecutar:')
        let mistareas = tareas.leer()
        //console.log(mistareas.length);
        mistareas.forEach(function(tarea){
            console.log (chalk.blue.underline(tarea.titulo) +": "+ chalk.cyan(tarea.estado));
        });

    break
    // reemplazar ciclo for por forEach: done!

    case undefined : console.log(chalk.red.bgWhite('Debes ingresar un comando: listar, crear, etc!!'));
    break

    case 'crear':
    let tareaNueva = {
        titulo: process.argv[3],
        estado: 'pendiente'
    }
    tareas.guardarTarea(tareaNueva)
    //console.log('creaste una nueva tarea:  ' + tareaNueva.titulo +':   ' + tareaNueva.estado);
    break
    // corregir crear para que no haga duplicados!!
    //console.log(process.argv[3]);



    case 'filtrar':

            let estadoActual = process.argv[3]
            let filtradas =  tareas.filtrarPorEstado(estadoActual);

            console.log(chalk.red.bold.bgWhite('Estas son tus tareas pendientes:'));

            filtradas.forEach(function(tarea){
                console.log(chalk.blue.underline(tarea.titulo) + chalk.blue(': ') + (chalk.cyan(tarea.estado)));

            })
            //console.log(filtradas) = escribe todo el array de una.
        break

        case 'cambEstado':
            let tareaCambiada = {
                titulo: process.argv[3],
                estado: process.argv[4]
            }
            tareas.cambiarTarea(tareaCambiada)
            break

            case 'borrar':
            let tareaBorrada = process.argv[3];
            tareas.borrarTarea(tareaBorrada);
            
            break

            default: console.log(chalk.red.bgWhite('Argumento no valido!!'));

        }
        

//modificacion pata test git  ¡¡¡¡
//falta borrar, borrar terminados, Help y shortcuts
//chalk instalar

//inicializar proyecto de Node

// npm install

// tareas terminadas
