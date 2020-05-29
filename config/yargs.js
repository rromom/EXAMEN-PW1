let opc = {
    archivo: {
        require: true,
        alias: 'f',
        desc: 'Archivo CSV con datos a procesar',
    },
    anio: {
        alias: 'y',
        default: '1960',
        desc: 'Año que del que se busca información'
    },
    pais: {
        alias: 'c',
        default: 'ECU',
        desc: 'Código del país que se requiere información'
    }
}
const argv = require('yargs')
    .command('mostrar', 'Imprime en pantalla el resultado de la búsqueda', opc)
    .command('guardar', 'Genera un archivo con el resultado de la búsqueda', opc)
    .help()
    .demandCommand(1)
    .alias('h', 'help')
    .argv;


module.exports = {
    argv
}