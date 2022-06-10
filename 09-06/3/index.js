const http = require('http')
const fs = require('fs')
const { removeListener } = require('process')

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL('http://localhost:3000' + pedido.url)
  let camino = 'public' + url.pathname
  if (camino == 'public/')
    camino = 'public/index.html'
  encaminar(pedido, respuesta, camino)
})

servidor.listen(3000) 
console.log('Servidor Iniciado')


function encaminar(pedido, respuesta, camino) {
  //console.log(camino)
  switch (camino) {
    case 'public/getNumber': {
        //console.log('PEDIDO: ' + pedido + ' RESPUESTA: ' + respuesta);
      recuperar(pedido, respuesta)
      break
    }
    default: {
      fs.stat(camino, error => {
        if (!error) {
          fs.readFile(camino, (error, contenido) => {
            if (error) {
              respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
              respuesta.write('Error interno')
              respuesta.end()
            } else {
              const vec = camino.split('.')
              const extension = vec[vec.length - 1]
              const mimearchivo = mime[extension]
              respuesta.writeHead(200, { 'Content-Type': mimearchivo })
              respuesta.write(contenido)
              respuesta.end()
            }
          })
        } else {
          respuesta.writeHead(404, { 'Content-Type': 'text/html' })
          respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
          respuesta.end()
        }
      })
    }
  }
}


function recuperar(pedido, respuesta) {
  let info = ''

  pedido.on('data', datosparciales => {
    info += datosparciales
  })

  
  pedido.on('end', () => {
    const formulario = new URLSearchParams(info)
    console.log(formulario.toString());
    respuesta.writeHead(200, { 'Content-Type': 'text/html' })
    const pagina =
      `<!doctype html>
      <html>
      <head></head>
      <body>
       
       
        <div align="center">   
        <h3>${evaluarPrimos(formulario.get('r1'), formulario.get('r2'))}</h3>
        <br>
        <a href="index.html">Retornar</a>
        </div>
     </body>
     </html>
     `
    respuesta.end(pagina)
  })

}



//Server Functions END
function evaluarPrimos(RA, RB){
    let primoArray = [];

  for(let x = RA; x<RB; x++){
    if(esPrimo(x)){
       primoArray.push(x);
    }
  }

  return descomponerCifras(primoArray)

}

function descomponerCifras(numeros){
  let primoArrayI = [];
  let primoArrayD = [];
  let primoArrayT = [];

  let primoArrayIndex = [];
  let primoArrayP = [];
  for(let x in numeros){
      if(numeros[x] > 9){
        primoArrayI.push(numeros[x]%10);
      }
      if(numeros[x] > 9){
        primoArrayD.push(Math.floor(numeros[x]/10));
      }
  }

  for(let x in primoArrayI){
    primoArrayT[x] = primoArrayD[x] + primoArrayI[x];
   // console.log(primoArrayT[x]);
  }
  delete primoArrayD, primoArrayI;

  for(let x in primoArrayT){
    if(esPrimo(primoArrayT[x])){
        primoArrayP.push(primoArrayT[x]);
        primoArrayIndex.push(numeros[x]); //
    }
  }
  delete primoArrayT;

  let primoArrayIndex_ = primoArrayIndex.map(function (x) { 
    return parseInt(x, 10); 
  });
  

  
  return retornarPrimos(primoArrayIndex_, primoArrayP, numeros)
  
}

function retornarPrimos(indiceNumerico, sumaNumerica, numeros){

  

  
    numeros = numeros.filter(numero => indiceNumerico.includes(numero));
 
   //Arreglar que tiene minimo 10

    return '<br>Numeros<br>' + numeros.join('<br>') + '<br>Su Suma de Cifras<br>'+ sumaNumerica.join(' ');
  


  
}

function esPrimo(numero) {
  if (numero == 0 || numero == 1) return 0;

  if (numero == 4) return 0;
  for (let x = 2; x <numero / 2; x++) {
    // Si es divisible por cualquiera de estos números, no es primo
    if (numero % x == 0) return 0;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return numero;
}