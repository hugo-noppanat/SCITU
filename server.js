const http = require('http');
// hostname is IPv4
const hostname = '192.168.43.246'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
  })

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })