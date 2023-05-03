let mongoose=require('mongoose')
let port='mongodb://127.0.0.1:27017/Human_Resource'
mongoose.set("strictQuery")
let dbConnection = async ()=>{
    try {
        console.log('trying')
        await mongoose.connect(port)
        console.log('done',port)
    } catch (error) {
        console.log(error)
    }
}

module.exports=dbConnection