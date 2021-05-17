import express from 'express'
require('dotenv').config();
import {router as hotelRouter}  from './routes/hotels'
import morgan from 'morgan'
import cors from 'cors'
const server = express()
server.use(morgan("tiny"))
server.use(cors())
server.use(express.json())
server.use('/api',hotelRouter)
server.use('/',(req,res)=>{
    console.log(req.url,'404')
    res.sendStatus(404) 
})
const PORT = process.env.PORT ||5000
server.listen(PORT,()=>{
    console.log('connected')
})