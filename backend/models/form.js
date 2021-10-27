const mongoose=require('mongoose');
const formEl=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    nameSurname:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }

})
const formDat=mongoose.model('form',formEl);
module.exports=formDat;