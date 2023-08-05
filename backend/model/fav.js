const mongoose=require('mongoose')

const favSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dir:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    gerne:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Favorite',favSchema)