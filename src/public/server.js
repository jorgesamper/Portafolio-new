const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Obtiene la ruta completa del archivo solicitado
  let filePath = path.join(__dirname, 'code', req.url);

  // Si la URL es solo una barra, sirve el archivo index.html
  if (req.url === '/') {
    filePath = path.join(__dirname, 'code', 'index.html');
  }

  // Lee el archivo solicitado
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Maneja los errores, por ejemplo, si el archivo no existe
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Archivo no encontrado');
    } else {
      // Determina el tipo de contenido según la extensión del archivo
      const extname = path.extname(filePath);
      let contentType = 'text/html';

      if (extname === '.css') {
        contentType = 'text/css';
      }

      // Establece el encabezado de respuesta y envía el contenido del archivo
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
