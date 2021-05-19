import express from 'express'
const router = express.Router()
import {db} from '../db/db'
router.get('/getAllHotels',async(req,res)=>{
    try {
        
        const {rows}= await db.query('SELECT * FROM HOTELS',[])
        res.send(rows)
        
    } catch (error) {
        console.error(error,req)
    } 

})
router.get('/getHotel/:id',async(req,res)=>{
    try {
        
        const {rows}= await db.query('SELECT * FROM HOTELS WHERE ID = $1',[req.params.id])
        res.send(rows)
    } catch (error) {
        console.error(error)
    }
})

router.post('/addHotels',async(req,res)=>{ 
    try {
     const response =  await db.query('INSERT INTO hotels (name,location,price_range) VALUES($1,$2,$3)',[req.body.name,req.body.location,req.body.price_range])
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})
router.put('/update',async(req,res)=>{
    try {
     const response =  await db.query('UPDATE hotels SET name=$1, location=$2, price_range=$3 WHERE ID=$4',[req.body.name,req.body.location,req.body.price_range,req.body.id])
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})
router.delete('/deleteHotel/:id',async(req,res)=>{
    try {
     const response =  await db.query('DELETE FROM hotels WHERE  ID=$1',[req.params.id])
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})
export {router}