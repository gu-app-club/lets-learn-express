var express = require('express')
var app = express()

function onRouteHit(request, response) {
  response.send('Hello World')
}

app.get('/', onRouteHit)

app.listen(3000, function() {
  console.log("Our server is listening to localhost:3000")
})
