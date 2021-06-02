const fs = require("fs");
const color = require("colors");
const crearArchivoP = (base, listar, limite) => {
  return new Promise((resolve, reject) => {
    let salida, consola = "";

    for (let i = 0; i <= limite; i++){
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.rainbow} ${base * i}\n`;
    }
    
    if(listar)
      console.log(consola);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    resolve(`Tabla-${base}.txt`);
  });
};

const crearArchivo = async (base = 5, listar = false, limite = 10) => {
  try {
    const nombreArchivo = await crearArchivoP(base, listar, limite);
    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
