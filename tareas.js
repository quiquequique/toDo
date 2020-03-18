let chalk = require('chalk');
const fs = require('fs');
let tareas = {
    archivo: 'tareas.json',
    leer: function() {
        let string = fs.readFileSync(this.archivo, 'utf-8');

        return JSON.parse(string)
    },
    // crear funcion que escribe array en el JSON
    escribirJson: function(tareas) {

        let tareasJson = JSON.stringify(tareas, null, ' ')
        fs.writeFileSync(this.archivo, tareasJson)


    },
    // GUARDAR TAREA
    // 1.traer todas las tareas
    // 2. verifica si la tarea ya exista
    //guardar el nuevo array de tareas pisando el viejo

    guardarTarea: function (tareaNueva){
        let todasLasTareas = this.leer()
        let yaExiste = todasLasTareas.some(tarea => {
            return JSON.stringify(tareaNueva) == JSON.stringify(tarea);
            //[2, 5, 8, 1, 4].some(elem => elem > 10);  // false ademas no se pueden comparar objetos sin pasarlos  a string ya lo entendere
            //[12, 5, 8, 1, 4].some(elem => elem > 10); // true
        });
        if(yaExiste){
            console.log(chalk.red.bold.underline('ERROR  !!') + '  ' + chalk.blue('Esta tarea ya fue creada'));
        }else{todasLasTareas.push(tareaNueva)
            this.escribirJson(todasLasTareas)
            console.log(chalk.blue.underline('creaste una nueva tarea:') +'  ' + chalk.cyan('Nueva tarea:  ' + tareaNueva.titulo +':   ' + 'Estado:  ' + tareaNueva.estado));
            };

    },

    cambiarTarea: function (tareaCambiada){     //cambia el estado de la tarea 
        let todasLasTareas = this.leer();
        let indexOfTareaCambiada = todasLasTareas.findIndex(i => i.titulo == tareaCambiada.titulo);
        todasLasTareas.splice(indexOfTareaCambiada, 1, tareaCambiada);
        this.escribirJson(todasLasTareas);

        },
            //Ej. de metodo splice!!
            //languages.splice(1, 1, 'Python');
            //[{hello: 'world',foo: 'bar'};{hello: 'stevie',foo: 'baz']
            //var indexOfStevie = myArray.findIndex(i => i.hello === "stevie");


    borrarTarea: function (tareaBorrada){     //borra tarea
        let todasLasTareas = this.leer();
        let indexOfTareaBorrada = todasLasTareas.findIndex(i => i.titulo == tareaBorrada);
        if (indexOfTareaBorrada > -1){
            todasLasTareas.splice(indexOfTareaBorrada, 1);
            this.escribirJson(todasLasTareas);
            console.log(chalk.blue.underline('La tarea: ' + tareaBorrada )+ chalk.cyan('  a sido eliminada!!'));
        }else{
            console.log(chalk.red.bold.underline('La tarea no existe!!!'));
        }
// mod para test git kjhsofg c psofivu proitu v  ertovauport voriv roit v  jjfffjfj


                },

    filtrarPorEstado: function (estadoActual){
        let todasLasTareas = this.leer()
        return todasLasTareas.filter(function(cadaTarea){
           return cadaTarea.estado == estadoActual
        })
    }
}
// agregar borrar, cambiar estado, help

module.exports = tareas;
