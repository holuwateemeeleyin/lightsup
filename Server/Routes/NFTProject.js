const express = require('express')
const router = express.Router()
const multer = require("multer")
const { NFTProject } = require('../Models/NFTProject')
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")


router.post('/add', upload.single("image"), async (req, res)=> {
    // console.log(req.file);
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        let nftProject = new NFTProject({
            name: req.body.name,
            price:req.body.price,
            supply:req.body.supply,
            date:req.body.date,
            website: req.body.website,
            discord:req.body.discord,
            twitter:req.body.twitter,
            description:req.body.description,
            image: result.secure_url,
            cloudinary_id: result.public_id,
            promote:req.body.promote
        });

        await nftProject.save();
        res.json(nftProject)
    }
    catch (err){
        console.log(err);
    }
});



// Get list of NFT projects posted
router.get('/get-nfts', (req,res)=> {
    NFTProject.find({}, (err, nftProject)=>{
        if (err) return res.status(400).send(err)
        res.status(200).send(nftProject)
    })
})


//DELETE
router.delete('/delete-nft', (req,res)=>{
    let id=req.query.id;
    NFTProject.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

// router.delete('/delete-nft/:id', async(req,res) => {
//     await NFTProject.findByIdAndDelete(req.params.id)
    
//     try{
//       res.status(204).json({
//           status : 'Success',
//           data : {}
//       })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
// })
module.exports = router