import express from "express"
const router = express.Router()

import Hotel from "../models/Hotel"

router.post('/', async(req,res)=>{
  const newHotel = new Hotel(req.body)

  try{
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  }catch(err){
    res.status(500).json(err)
  }
})

router.put('/:id', async(req,res)=>{
  try{
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedHotel)
  }catch(err){
    res.status(500).json(err)
  }
}