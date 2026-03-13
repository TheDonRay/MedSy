//TODO: Update this mongoDB schema model here

const mongoose = require("mongoose");

const storedSymptoms = new mongoose.Schema({
  symptoms: {
    required: true,
    type: [String],
  },
});

module.exports = mongoose.model("symptoms", storedSymptoms);
