
// external service here which sends data to rxNorm API.  Remember that we are calling this external function from another controller.  
const externalAPI = async (medicineAdvised) => {  
    
    // define the function here    
    const exampledatatoreturn = { 
        data: medicineAdvised
    }; 
    return exampledatatoreturn;  
} 

module.exports = { externalAPI }; 