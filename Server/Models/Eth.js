const mongoose = require('mongoose')

const EthSchema = new mongoose.Schema ({
    name:{
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: String,
    },
    supply:{
        type:Number
    },
    date:{
        type:Date
    },
    website:{
        type:String
    },
    discord:{
        type: String
    },
    twitter:{
        type:String
    },
    image:{
        type: String
    },
    description:{
        type: String
    },
    cloudinary_id :{
        type:String
    },
    promote:{
        type:Boolean,
        default:false
    }
})

const Eth = mongoose.model('EthProjects', EthSchema )
module.exports = {Eth}