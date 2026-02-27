const database = require('../model/symptoms.model.js');  
// incorporate the AI implementation as well here as well -> read docs.  
const OpenAi = require('openai'); 
const client = new OpenAi({ 
    apiKey: process.env.openaiKEY
});

const analyzeSymptoms = async (req, res) => { 

    const { userSymptoms } = req.body;  
    // some error handling 
    if (!userSymptoms) { 
        res.status(400).json({ 
            error: 'No symptoms mentioned'
        });  
        return; 
    } 

    // this is going to hold the mongodb as well for stored symptoms as well. 
    try {   
        console.log(`User entered the following symptoms: ${userSymptoms}`)
        // recieved input and insert into mongoDB database then send to the AI afterwards. 
        return res.status(200).json({ 
            Symptoms: "logged successfully, and kept track of"
        }); 
    } catch (error) { 
        console.error('There was an error retrieving the user symptoms', error); 
        res.status(500).json({ 
            Error: error
        }); 
        return; 
    }
} 

module.exports = analyzeSymptoms; 