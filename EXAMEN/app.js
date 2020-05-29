const chalk = require('chalk');
const argv = require('./config/yargs').argv;
const {
    importCSV,
    saveData,
    getCountryData
} = require('./buscador/buscar')

let comand = argv._[0];

let pais = argv.pais
let anio = argv.anio
let arch = argv.archivo

let menu = async() => {

    data = await importCSV(arch)
    country = getCountryData(data, pais, anio)
    switch (comand) {
        case 'mostrar':
            console.log(chalk.bgGreen(chalk.white(chalk.bold("=========================== RESULTADOS OBTENIDOS ===========================\n"))))
            console.table(country)
            break;
        case 'guardar':
            saveData(country)
            break;
        default:
            console.log(chalk.bgRedBright(chalk.white(chalk.bold("ERROR DE OPCION"))));
            break;
    }
}
menu().then().catch(err => console.log(err.name))