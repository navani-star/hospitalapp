const express=require('express')
const mongoose=require('mongoose')
const cors= require('cors')

const app=express()

app.use(cors())
app.use(express.json())

//mongoose connected MongoDb
mongoose.connect('mongodb://127.0.0.1:27017/school')
.then(()=>{
    console.log('MongoDb Connected')
}).catch((err)=>{
   console.log(err)
})
//create schema
const patientschema=new mongoose.Schema({
    finame:String,
    Lname:String,
    Mname:String,
    fname:String,
    address:String,
    gender:String,
    name:String,
    speciality:String,
    fees:String,
    date:String,
    dob:String,
    pincode:String,
    email:String,
    number:String

})
//create collection
const Patient =mongoose.model( 'Patient',patientschema)

// Post Data(data submit)
app.post('/patient',async(req,res)=>{
    try{
        const patient =new Patient(req.body)
        await patient.save()
        res.status(201).send(patient)

    }catch(err){
        res.status(400).send(err)

    }
})

//get method 
app.get('/patient',async(req,res)=>{
    try{
        const patient=await Patient.find()
        res.status(200).send(patient)

    }catch(err){
        res.status(500).send(err)
    }
})

//get specific id data 
app.get('/patient/:id',async(req,res)=>{
    try{
        const patient =await Patient.findById(req.params.id)
        res.status(200).json(patient)

    }catch(err){
        res.status(500).send(err)

    }
})

//Put Method -(update data on specific id)
app.put('/update/:Id',async(req,res)=>{
    try{
    const patient =await Patient.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(patient)

    }catch(err){
        res.status(500).send(err)
    }
})
//Delete Data Specific ID
app.delete('/delete/:Id',async(req,res)=>{
    try{
        await Patient.findByIdAndDelete(req.params.id)
        res.status(200).json({message:'Data Deleted'})

    }catch(err){
        res.status(500).send(err)
    }
})

app.listen(8000,()=>{
    console.log('8000 is running')
})