const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear()

// const [ , , arg3] = process.argv;
// const [ , base = 5] = arg3.split('=');

const base = argv.base;
const listar = argv.listar;
const limite = argv.hasta;

crearArchivo(base , listar, limite)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, ' creada !!!') )
    .catch((err) => console.log(err));
