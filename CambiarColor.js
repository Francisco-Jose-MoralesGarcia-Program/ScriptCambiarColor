const fs = require('fs');
const path = require('path');
var Jimp = require('jimp'); 
var colors = require('colors');
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
async function RandomImage(pathimage,PathNameExit) { 
    var image = await Jimp.read(pathimage);
    image.color([ { apply: 'hue', params: [getRandomInt(-360,360)] },{ apply: 'mix', params: [['#ffff00'],[getRandomInt(10,40)]]} ,]);
     image.write(PathNameExit);
}  


async function RandomImages(maximo , name_fileExit , ruta_archivo , ruta_archivo_salida)
{ 
    var porciento10 = false;
    var porciento20 = false;
    var porciento30 = false;
    var porciento40 = false;
    var porciento50 = false;
    var porciento60 = false;
    var porciento70 = false;
    var porciento80 = false;
    var porciento90 = false;
    var porciento100 = false;
    
    for (let i = 1; i <= maximo; i++) 
    {
    await RandomImage(ruta_archivo,path.join(ruta_archivo_salida+"/"+name_fileExit+i+'.png')); 
    // Progreso al 10%
    if(i >= maximo * 0.10 && porciento10 == false)
    {
        porciento10 = true;
        console.log("-10% de imagenes generadas");
    }
     // Progreso al 20%
    if(i >= maximo * 0.20 && porciento20 == false)
    {
        porciento20 = true;
        console.log("-20% de imagenes generadas");
    }
     // Progreso al 30%
    if(i >= maximo * 0.30 && porciento30 == false)
    {
        porciento30 = true;
        console.log("-30% de imagenes generadas");
    }
     // Progreso al 40%
    if(i >= maximo * 0.40 && porciento40 == false)
    {
        porciento40 = true;
        console.log("-40% de imagenes generadas");
    }
     // Progreso al 50%
    if(i >= maximo * 0.50 && porciento50 == false)
    {
        porciento50 = true;
        console.log("-50% de imagenes generadas");
    }
     // Progreso al 60%
    if(i >= maximo * 0.60 && porciento60 == false)
    {
        porciento60 = true;
        console.log("-60% de imagenes generadas");
    }
     // Progreso al 70%
    if(i >= maximo * 0.70 && porciento70 == false)
    {
        porciento70 = true;
        console.log("-70% de imagenes generadas");
    }
    // Progreso al 80%
    if(i >= maximo * 0.80 && porciento80 == false)
    {
        porciento80 = true;
        console.log("-80% de imagenes generadas");
    }
     // Progreso al 90%
     if(i >= maximo * 0.90 && porciento90 == false)
     {
         porciento90 = true;
         console.log("-90% de imagenes generadas");
     }
     // Progreso al 100%
     if(i == maximo  && porciento100 == false)
     {
         porciento100 = true;
         console.log("-100% de imagenes generadas");
     }
}
}
function main(){
console.log(colors.red.underline('Iniciando Script de generacion de imagenes'));
var parametros = process.argv.slice(2);
var maximo = parametros[1];
var name_fileExit = parametros[0];
var ruta_archivo = parametros[2];
var ruta_archivo_salida = parametros[3];
if(name_fileExit , maximo ,   ruta_archivo , ruta_archivo_salida  == null)
{
    console.log(colors.green.underline("La sintaxis del comando no es correcta necesitas:"));
    console.log("-Un prefijo para las imagenes");
    console.log("-Un maximo de imagenes");
    console.log("-Una ruta para la imagen original");
    console.log("-Una ruta para la salida de archivos");
}else
{
    console.log(colors.green.underline("Se generaran este numero de imagenes:")+maximo);
    console.log(colors.green.underline("Se generaran imagenes con el prefijo:")+name_fileExit);
    console.log(colors.green.underline("Se generaran de la imagen:")+ruta_archivo);
    console.log(colors.green.underline("Se generaran en la ruta:")+ruta_archivo_salida);
    console.log(colors.green.underline("Se generaran imagenes en un tiempo estimado de:")+timeStimaid.toFixed(2) + " minutos");
    RandomImages(maximo,name_fileExit,ruta_archivo,ruta_archivo_salida);
}

}

main();
