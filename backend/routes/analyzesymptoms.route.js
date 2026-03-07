const express = require("express");
const analyzesymp = express.Router();
const analyzecontroller = require("../controllers/analyzesymptoms.controller.js");

// here we want to call the controller but notice we have two functions so we need to let the controller know which function to call when we hit this endpoint here. 
analyzesymp.post("/analyzesymptom", analyzecontroller.analyzeSymptoms);

module.exports = analyzesymp;
