const express=require('express')
let app=express()
let PORT=3000
let dbConnection=require('./database/database')
let mgConfig=require('./database/scema')

app.use(express.json())
app.post('/fetch',async (req,res)=>{
   let query=''
})
app.post('/SignIn',async (req,res)=>{
    
})

app.listen(PORT,async()=>{
    try {
        await dbConnection()
        console.log(`Port ${PORT}`)
    }catch(error){
        console.log(error)
    }
})