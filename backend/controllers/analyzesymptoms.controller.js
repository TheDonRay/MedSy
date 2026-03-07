const database = require("../model/symptoms.model.js");
// incorporate the AI implementation as well here as well -> read docs.
const OpenAi = require("openai");
const client = new OpenAi({
  apiKey: process.env.openaiKEY,
});

const HelperMedicineRecommendation = async (userSymptoms) => {
  const AIsymptomAnalysis = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "you are a medical advisor given the symptoms a user describes prescribe just one medicine for it no explanation needed. Response should be one word",
      },
      {
        role: "user",
        content: `Here is the users symptoms: ${userSymptoms}`,
      },
    ],
  });
  const medicineRec = AIsymptomAnalysis.choices[0].message.content;
  console.log("Medicine returned was", medicineRec);
  return medicineRec;
};

const analyzeSymptoms = async (req, res) => {
  const { userSymptoms } = req.body;
  // some error handling
  if (!userSymptoms) {
    res.status(400).json({
      error: "No symptoms mentioned",
    });
    return;
  }

  // this is going to hold the mongodb as well for stored symptoms as well.
  try {
    const newSymptoms = new database({
      symptoms: userSymptoms,
    });
    // finally save that here as such
    await newSymptoms.save();
    console.log("User Symptoms have been Successfully saved to mongodb");

    // call the function here after saving
    const MedicineRecommendation =
      await HelperMedicineRecommendation(userSymptoms);
    // return data back to the frontend here as such
    return res.status(200).json({
      Symptoms: "logged successfully, and kept track of",
      MedicineAdvised: MedicineRecommendation,
    });
  } catch (error) {
    console.error("There was an error retrieving the user symptoms", error);
    res.status(500).json({
      Error: error,
    });
    return;
  }
};

module.exports = { analyzeSymptoms, HelperMedicineRecommendation };
