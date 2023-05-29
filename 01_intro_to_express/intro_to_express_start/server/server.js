const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

//we need to have express listen to requests
app.listen(9000,() => {
    console.log("App is running on port:9000")
})

app.get("/",(request,response) => {
//upon http request^ responds^
    // response.send("Hello Marinating penguin") // this is like print
    response.json({message:"My message"})
})

app.get("/another",(request,response) => {

    response.json({message:"My anotha message"})
})

