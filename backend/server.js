require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
     res.send("Server is running smmothly! ")
})


app.listen(port, () => {
     console.log(`listening on port ${port} successfully...`)
})
