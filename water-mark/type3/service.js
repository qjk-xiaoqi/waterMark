const http = require('http')
const url = require('url')

http
  .createServer((req, res) => {
    const parseUrl = url.parse(req.url)
    if (parseUrl.pathname === '/img') {
      res.end('你输了')
    }
  })
  .listen(8000)
