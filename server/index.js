require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    // origin : process.env.FRONTEND_URL,
    origin : process.env.VERCEL_URL,
    credentials : true,
    methods: ['GET', 'POST'],         // Allow these HTTP methods
    allowedHeaders: ['Content-Type'], 
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
