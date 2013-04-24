var http = require('http')
var fs = require('fs')

var html = fs.readFileSync('./index.html').toString()


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type': 'text/html'})
  res.end(html)
}).listen(80)
