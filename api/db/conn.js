import mongoose from 'mongoose'
const connectDB =  async ()=>{

  try {
      const conn = await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@booking-app.rxten.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
      console.log(`Database is Connected!`)
  }catch(error){
      console.error(`Error: ${error} `)
      process.exit(1) //passing 1 - will exit the proccess with error
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected')
})

mongoose.connection.on('connected', () => {
  console.log('mongoDB connected!')
})


export default connectDB