const express = require("express");
const cors = require("cors");
const supabase = require("./supabase");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Student Opportunity Finder Backend Running");
});

// Get All Opportunities
app.get("/api/opportunities", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("opportunities")
            .select("*");

        if (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            });
        }

        res.status(200).json({
            success: true,
            opportunities: data
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

// Register User
app.post("/api/auth/register", async (req, res) => {

    const { name, email, password } = req.body;

    try {

        const { data, error } = await supabase
            .from("users")
            .insert([
                {
                    name,
                    email,
                    password
                }
            ]);

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

// Login User
app.post("/api/auth/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .eq("password", password)
            .single();

        if (error || !data) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
            user: data
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
app.get("/test", (req, res) => {
  res.json({
    message: "Test route working"
  });
});