const express =require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv= require('dotenv');
const auth =require('./Middleware.js')
const app= express()

app.use(express.json())
app.use(cors())

dotenv.config()

const port =process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`${port}`);
})

const uri=process.env.MONGO_CONNECT

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})

const db=mongoose.connection

db.once('open',
()=>{
console.log('connected');
}
)

app.use('/table',require('./routes'))

