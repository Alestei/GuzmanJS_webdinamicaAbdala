const http = require('http')
const fs = require('fs')

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
    case 'public/getPPT': {
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
    console.log(formulario)
    respuesta.writeHead(200, { 'Content-Type': 'text/html' })
    const pagina =
      `<!doctype html>
      <html>
      <head></head>
      <body>
       
       
        <div align="center">   
        <h3>${cWin(formulario.get('S'))}</h3>
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


function RPS(){
  let RN = Math.floor(Math.random() * 3);
  
  if(RN == 0){
     return 'Piedra';
  }
  
  if(RN == 1){
    return 'Papel';
  }

  if(RN == 2){
    return 'Tijera';
  }

}

function cWin(uSelect){
  let SOP = RPS(); let WIN = false; let emp = false;

if(uSelect == 'Piedra' && SOP == 'Tijera' ){
    WIN = true;
  }

if(uSelect == 'Tijera' && SOP == 'Papel'){
    WIN = true;
}

if(uSelect == 'Papel' && SOP == 'Piedra' ){
    WIN = true;
}

if(uSelect == SOP){
  emp = true; 
}


//////
if(emp == true){
  return 'Elegiste: ' + uSelect + '<br>La maquina eligio: ' + SOP + '<br> Han empatado!';
}

if(WIN == true){
  return 'Elegiste: ' + uSelect + '<br>La maquina eligio: ' + SOP + '<br> Has ganado';
}else{
  return 'Elegiste: ' + uSelect + '<br>La maquina eligio: ' + SOP + '<br> Has perdido';
}

}