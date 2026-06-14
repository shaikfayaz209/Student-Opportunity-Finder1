const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.json({
            success: true,
            message: "User Registered Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({
        email,
        password
    });

    if(user){

        res.json({
            success: true,
            message: "Login Successful"
        });

    } else {

        res.json({
            success: false,
            message: "Invalid Credentials"
        });

    }

});

module.exports = router;