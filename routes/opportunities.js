const express = require("express");
const router = express.Router();

const Opportunity =
require("../models/Opportunity");

router.get("/", async (req,res)=>{

    const data =
    await Opportunity.find();

    res.json(data);

});

router.post("/", async (req,res)=>{

    const opportunity =
    new Opportunity(req.body);

    await opportunity.save();

    res.json({
        success:true,
        message:"Opportunity Added"
    });

});

module.exports = router;