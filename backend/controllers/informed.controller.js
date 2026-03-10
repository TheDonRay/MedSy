const { HelperMedicineRecommendation } = require('../controllers/analyzesymptoms.controller.js');  
const { externalAPI } = require('../services/RxNormAPI.services.js'); 

const inforMedication = async (req, res) => {   
    // remember to get the users response here as such 
    const { userSymptoms } = req.body;  

    const medicineRecieved = await HelperMedicineRecommendation(userSymptoms); 
    // call the external service function here to the medicine  
    const callexternalAPI = await externalAPI(medicineRecieved); 
    res.status(200).json({ 
        Data: callexternalAPI
    }); 
};  


module.exports = inforMedication; 