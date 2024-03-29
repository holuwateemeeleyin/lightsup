const path = require('path')
const dotenv =require ('dotenv')
dotenv.config({path: path.resolve(__dirname, './.env')})


const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_I = 10

const AdminSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:1,
        trim:true
    },
    adminId:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    token: {
        type:String
    }
})


AdminSchema.pre('save', function(next){
    var admin = this;

    if(admin.isModified('password')){
        bcrypt.genSalt(SALT_I, function(err, salt){
            if(err) return next(err)

            bcrypt.hash(admin.password, salt, function(err, hash) {
                if(err) return next(err)
                admin.password = hash;
                next()
            })
        })
    } else {
        next()
    }
})

// Compare the password entered and the stored hash password
AdminSchema.methods.comparePassword = function(adminPassword,cb){
    bcrypt.compare(adminPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    })
}


// Generate token when entered the right password
AdminSchema.methods.generateToken = function(cb){
    var admin = this;
    var token = jwt.sign(admin._id.toHexString(), process.env.SECRET);
    // store the token inside the admin
    admin.token = token;
    admin.save(function (err, admin) {
        if(err) return cb(err)
        // if its not an error send null and the admin
        cb(null, admin)
    })
}


// creating a method that will be checking the token
AdminSchema.statics.findByToken = function (token, cb){
    var admin = this;
    // since we are getting the token from the browser
    // the token contains the admin._id and the hash
    // if we decode the token, we will get the admin._id

    // the verify returns the adminId if the token is correct
    jwt.verify(token,process.env.SECRET, function(err, decode){
        // if everything gets decoded correctly, we want to grab the admin id
        //we will be finding the admin by ID and by token
        admin.findOne({"_id":decode, "token":token}, function(err, admin){
            if(err) return cb(err)
            // if everything goes okay, it will return null as an error and the actual admin
            cb(null, admin)
        })
    })
}

// deleting the token

AdminSchema.methods.deleteToken = function(token,cb){
    var admin = this;

    admin.update({$unset:{token:1}}, (err, admin)=>{
        if(err) return cb(err)
        cb(null, admin)
    })
}


const Admin = mongoose.model('Admin', AdminSchema)
module.exports = {Admin}