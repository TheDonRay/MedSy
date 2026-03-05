const database = require("../model/symptoms.model.js");
// incorporate the AI implementation as well here as well -> read docs.
const OpenAi = require("openai");
const client = new OpenAi({
  apiKey: process.env.openaiKEY,
});

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
    // recieved input and insert into mongoDB database then send to the AI afterwards.
    const AIsymptomAnalysis = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "you are a medical advisor given the symptoms a user describes prescribe one potential medicine to help the symptoms go away",
        },
        {
          role: "user",
          content: `Here is the users symptoms: ${userSymptoms}`,
        },
      ],
    });

    // some validation to check now as such:
    if (!AIsymptomAnalysis) {
      throw new Error("Error analyzing users symptoms");
    }

    return res.status(200).json({
      Symptoms: "logged successfully, and kept track of",
      SymptomAnalysis: AIsymptomAnalysis.choices[0].message.content,
    });
  } catch (error) {
    console.error("There was an error retrieving the user symptoms", error);
    res.status(500).json({
      Error: error,
    });
    return;
  }
};

module.exports = analyzeSymptoms;
