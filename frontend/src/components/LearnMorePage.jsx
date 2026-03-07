import "../styles/learnmorepage.css";
import { useNavigate } from "react-router-dom";

export default function LearnMorePage() {
  const navigate = useNavigate();

  return (
    <div className="learnmore-page">
      <div className="bg-grid" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />

      <nav className="navbar">
        <div className="nav-brand">
          <img src="/newlogo.png" alt="MedSy Logo" className="nav-icon" />
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

      {/* Hero */}
      <div className="lm-hero">
        <span className="lm-badge">Learn More</span>
        <h1 className="lm-title">
          How <span className="gradient-text">MedSy</span> Works
        </h1>
        <p className="lm-subtitle">
          Understand how our AI-powered platform keeps you informed and in
          control of your health journey.
        </p>
      </div>

      {/* How It Works */}
      <section className="lm-section">
        <h2 className="lm-section-title">
          Simple. Powerful. <span className="gradient-text">Intelligent.</span>
        </h2>
        <div className="lm-steps">
          <div className="lm-step">
            <div className="lm-step-number">01</div>
            <h3>Describe Your Symptoms</h3>
            <p>
              Enter how you're feeling in plain language. Our AI understands
              natural, conversational descriptions — no medical jargon needed.
            </p>
          </div>
          <div className="lm-step">
            <div className="lm-step-number">02</div>
            <h3>AI Analyzes Your Input</h3>
            <p>
              Powered by Claude and OpenAI, MedSy processes your input to
              surface relevant insights about your medications and symptoms.
            </p>
          </div>
          <div className="lm-step">
            <div className="lm-step-number">03</div>
            <h3>Understand Your Health</h3>
            <p>
              Receive clear, actionable information about your symptoms and
              medications — translated from complex medical data into plain
              English.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="lm-features-section">
        <div className="lm-features-section-inner">
          <h2 className="lm-section-title">
            Everything You <span className="gradient-text">Need</span>
          </h2>
          <div className="lm-features-grid">
            <div className="lm-feature-card">
              <div className="lm-feature-icon">💊</div>
              <h3>Medication Search</h3>
              <p>
                Instantly look up any medication — side effects, dosage,
                interactions, and warnings explained in plain language.
              </p>
            </div>
            <div className="lm-feature-card">
              <div className="lm-feature-icon">🤖</div>
              <h3>AI Insights</h3>
              <p>
                Get personalized health insights powered by the latest AI models
                from Anthropic Claude and OpenAI.
              </p>
            </div>
            <div className="lm-feature-card">
              <div className="lm-feature-icon">📊</div>
              <h3>Symptom Tracking</h3>
              <p>
                Log symptoms over time and track patterns to share meaningful,
                organized data with your healthcare provider.
              </p>
            </div>
            <div className="lm-feature-card">
              <div className="lm-feature-icon">🔒</div>
              <h3>Private & Secure</h3>
              <p>
                Your health data stays private. We never sell or share your
                personal information with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lm-cta">
        <div className="lm-cta-glow" />
        <h2 className="lm-cta-title">Ready to take control of your health?</h2>
        <p className="lm-cta-desc">
          Join MedSy and start understanding your medications like never before
          — completely free.
        </p>
        <button
          className="btn-primary btn-lg"
          onClick={() => navigate("/getstarted")}
        >
          <span>Get Started Free</span>
          <span className="btn-arrow">&rarr;</span>
        </button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/newlogo.png" alt="MedSy Logo" className="nav-icon" />
            <span className="nav-title">MedSy</span>
          </div>

          <div className="footer-disclaimer">
            <div className="disclaimer-header">
              <span className="disclaimer-icon">&#9888;</span>
              <span className="disclaimer-label">Medical Disclaimer</span>
            </div>
            <p className="footer-text">
              MedSy is intended for informational purposes only and does not
              constitute medical advice, diagnosis, or treatment. Always consult
              a qualified healthcare professional before making any
              health-related decisions. Never disregard professional medical
              advice or delay seeking it based on information from this
              platform. In the event of a medical emergency, contact your local
              emergency services immediately.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 MedSy. All rights reserved.</span>
          <span className="footer-bottom-note">
            For informational purposes only &mdash; not a substitute for
            professional medical advice.
          </span>
        </div>
      </footer>
    </div>
  );
}
