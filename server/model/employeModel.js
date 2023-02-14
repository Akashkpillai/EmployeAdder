const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    idNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    image:[
        
    ]
})

const Employe = mongoose.model('Employe', orderSchema);
module.exports = Employe;