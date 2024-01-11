import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())



const flowersSchema = new mongoose.Schema({
    name:String,
    image: String,
    price:Number,

  });

  const flowersModel = mongoose.model('myFlowers', flowersSchema);      

app.get('/', async (req, res) => {

    const flowers = await flowersModel.find({})        

  res.send(flowers)
})
app.get('/:id', async (req, res) => {
    const {id} = req.params
    const flower = await flowersModel.findById(id)  
    res.send(flower)
  })
 
  app.post('/',async (req, res) => {
    const {name,image,price} = req.body
    const newFlower = new flowersModel({name,image,price})
    await newFlower.save();
    res.send('Got a POST request')
  })

  
  app.put('/:id', (req, res) => {
    res.send('Got a PUT request at /user')
  })

  
  app.delete('/:id', async (req, res) => {
    const {id} = req.params
    const flower = await flowersModel.findByIdAndDelete(id)  
    res.send('item deleted')
  })

mongoose.connect(process.env.SECRET_KEY)
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})