// add mongodb schema here below 

//extenal medicine function here as such 
const { MedicineProperties } = require('../services/MedicineProperties.services.js'); 

const externalAPI = async (medicineAdvised) => {
  const endpoints = new URLSearchParams({
    name: medicineAdvised,
  });
  // made the URL here as such
  const URL = `https://rxnav.nlm.nih.gov/REST/drugs.json?${endpoints}`;

  // implement try and catch case here as such
  try {
    // set up the fetch request here such that it gets sent to the frontend UI and manipulating that data
    const getMedicalData = await fetch(URL);

    if (!getMedicalData.ok) {
      throw new Error(`HTTP error: ${getMedicalData.status}`);
    }
    // returns an
    const resFromExternalAPI = await getMedicalData.json();

    if (!resFromExternalAPI) {
      throw new Error("No data recieved from the external API");
    }

    // TODO: going to map this data to like object then export that.
    const groups = resFromExternalAPI.drugGroup?.conceptGroup ?? [];

    const rxcuiData = groups
      .filter((group) => group.conceptProperties)
      .flatMap((group) =>
        group.conceptProperties.map((concept) => ({
          rxcui: concept.rxcui,
          name: concept.name,
          synonym: concept.synonym ?? null,
        })),
      );

    if (rxcuiData.length === 0) {
      throw new Error("No data received from the external API");
    }
    console.log("Medical Information recieved:", rxcuiData);
    // call the function here to export it with the data  
    const structuredData = await MedicineProperties(rxcuiData); 
    return structuredData;  
  } catch (error) {
    console.log("Error recieving data from the backend", error);
    return false;
  }
};

module.exports = { externalAPI };
