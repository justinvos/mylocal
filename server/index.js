const server = require('./server')

const PORT = process.env.PORT || 3000

console.log("start listening")
server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
