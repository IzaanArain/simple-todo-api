const express=require("express")
require("dotenv").config()
const colors=require("colors")
const todoRoutes=require("./routes/TodoRoutes")
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/dbConnection")
const cors=require("cors")

connectDB()
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/todos/",todoRoutes)
app.use(errorHandler)


app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get("/:name",(req,res)=>{
    res.send(`<h1>Hello World ${req.params.name}</h1>`)
})

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
    console.log(`server running on http://localhost:${PORT}/api/todos/`)
})
