import "../styles/getstartedpage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetStartedPage() {
  const [InputText, SetInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputHandler = (event) => {
    SetInputText(event.target.value);
  };

  const analyzebtn = async () => {
    // start of with a base case here as such
    if (InputText === "") {
      alert("Please enter how you feel");
      return;
    }
    //button to take the input data and send the data to the backend here as such
    try {
      setLoading(true);
      // set up the response to actually send to the backend. 
      const sendToBackend = await fetch(`http://localhost:7687/api/v1/analyzesymptom`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userSymptoms: InputText }),
      });
      // handle some validation if data was sent to the backend here as such
      if (!sendToBackend.ok) {
        alert("Error Analzying");
        console.log("Error sending data to the backend");
        return;
      }
      //set up the wait time for the response
      const data = await sendToBackend.json();

      if (!data) {
        throw new Error("Error getting data from the backend");
      }
      console.log("Successful, data recieved:", data);

    } catch (error) { 
        console.error('There was an error sending data to the backend', error); 
        alert('Error Analyzing'); 
        return; 
    } finally { 
        setLoading(false); 
    }
  };

  return (
    <div className="getstarted-page">
      <div className="bg-grid" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <nav className="navbar">
        <div className="nav-brand">
          <span className="nav-icon">&#9883;</span>
          <span className="nav-title">MedSy</span>
        </div>
        <div className="nav-links">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Home
          </a>
          <a
            href="/learnmore"
            onClick={(e) => {
              e.preventDefault();
              navigate("/learnmore");
            }}
          >
            Learn More
          </a>
          <button className="nav-cta" onClick={() => navigate("/getstarted")}>
            Get Started
          </button>
        </div>
      </nav>

      <div className="getstarted-container">
        <div className="getstarted-header">
          <span className="gs-badge">AI Health Analysis</span>
          <h1 className="gs-title">
            How are you <span className="gradient-text">feeling today?</span>
          </h1>
          <p className="gs-subtitle">
            Describe your symptoms and our AI will help you understand what you
            might be experiencing and give back a possible medicine to counter
            those symptoms.
          </p>
        </div>

        <div className="symptom-card">
          <div className="symptom-input-wrapper">
            <label className="symptom-label">Describe your symptoms</label>
            <textarea
              className="symptom-textarea"
              value={InputText}
              onChange={inputHandler}
              placeholder="e.g. I have a headache and feel nauseous after taking my medication..."
            />
          </div> 
          {/*TODO: here add the loading state when user presses the Analyze symptoms. */}
          <button onClick={analyzebtn} className="gs-send-btn" disabled={loading}>
            <span>Analyze Symptoms</span>
            <span className="gs-btn-arrow">&rarr;</span>
          </button>
        </div>

        <div className="gs-features">
          <div className="gs-feature-pill">AI-Powered</div>
          <div className="gs-feature-pill">Instant Analysis</div>
          <div className="gs-feature-pill">100% Free</div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="nav-icon">&#9883;</span>
            <span className="nav-title">MedSy</span>
          </div>

          <div className="footer-disclaimer">
            <div className="disclaimer-header">
              <span className="disclaimer-icon">&#9888;</span>
              <span className="disclaimer-label">Medical Disclaimer</span>
            </div>
            <p className="footer-text">
              MedSy is intended for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making any health-related decisions. Never disregard professional medical advice or delay seeking it based on information from this platform. In the event of a medical emergency, contact your local emergency services immediately.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 MedSy. All rights reserved.</span>
          <span className="footer-bottom-note">For informational purposes only &mdash; not a substitute for professional medical advice.</span>
        </div>
      </footer>
    </div>
  );
}
