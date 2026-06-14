const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    company: String
});

module.exports = mongoose.model("Opportunity", opportunitySchema);