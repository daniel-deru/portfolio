import express from "express"
import cors from "cors"
import path from "path"

const server = express()
const __dirname = path.resolve(path.dirname(""))

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, "build")))

server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})