const express = require('express')
const server = express()
server.get('/home',function(request,response){
    response.send("api allredy now").status(200)

})

server.listen(3000, function(){
console.log("server listen on http://localhost:3000")
})