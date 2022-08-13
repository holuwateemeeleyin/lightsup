const express = require('express')
const router = express.Router()
const { Eth } = require('../Models/Eth')
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")


// Adding a new NFTProject
router.post('/add-ethproject', upload.single('ethImage'), async (req, res) =>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        // res.json(result)

        let ethProject = new Eth({
            name: req.body.name,
            price:req.body.price,
            supply:req.body.supply,
            date:req.body.date,
            website: req.body.website,
            discord:req.body.discord,
            twitter:req.body.twitter,
            description:req.body.description,
            ethImage: result.secure_url,
            cloudinary_id: result.public_id,
            promote:req.body.promote
        });

        await ethProject.save();
        res.json(ethProject)

    } catch (err) {
        console.log(err);
    }
})


// Get list of NFT projects posted
router.get('/get-ethNFTs', (req,res)=> {
    Eth.find({}, (err, eth)=>{
        if (err) return res.status(400).send(err)
        res.status(200).send(eth)
    })
})


//DELETE
router.delete('/delete-ethnft', (req,res)=>{
    let id=req.query.id;
    Eth.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

module.exports = router