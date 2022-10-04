const mongoose = require('mongoose')

const NFTProjectSchema = new mongoose.Schema ({
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
    description:{
        type: String
    },
    image:{
        type: String
    },
    promote:{
        type:Boolean,
        default:false
    },
    cloudinary_id :{
        type:String
    }
})

const NFTProject = mongoose.model('NFTProjects', NFTProjectSchema )
module.exports = {NFTProject}