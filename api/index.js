import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/conn.js'

dotenv.config()
const PORT = process.env.PORT || 8000
const mode = process.env.NODE_ENV

const app = express()

connectDB()

app.listen(8000, () => {
  console.log('Server is running on port 8000')
})