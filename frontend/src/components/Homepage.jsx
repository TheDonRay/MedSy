import '../styles/homepage.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Homepage() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // define functions to the pages that it would redirect to here 
    
    return (
        <div className="homepage">
            {/* Animated background particles */}
            <div className="bg-grid" />
            <div className="glow-orb glow-orb-1" />
            <div className="glow-orb glow-orb-2" />
            <div className="glow-orb glow-orb-3" />

            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-brand">
                    <span className="nav-icon">&#9883;</span>
                    <span className="nav-title">MedSy</span>
                </div>
                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#ai-insights">AI Insights</a>
                    <a href="#tech">Tech Stack</a>
                    <button className="nav-cta">Get Started</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={`hero ${isVisible ? 'hero-visible' : ''}`}>
                <div className="hero-badge">AI-Powered Medical Advisor</div>
                <h1 className="hero-title">
                    Know What You Feel. {' '}
                    <span className="gradient-text">Understand What You Take.</span>
                </h1>
                <p className="hero-subtitle">
                   Track symptoms. Log medications. Understand your health.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary">
                        <span>Start Tracking</span>
                        <span className="btn-arrow">&rarr;</span>
                    </button>
                    <button className="btn-secondary">Learn More</button>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">AI</span>
                        <span className="stat-label">Powered Insights</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Medication Tracking</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Free to Use</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <div className="section-header">
                    <span className="section-tag">Features</span>
                    <h2 className="section-title">
                        Everything you need to{' '}
                        <span className="gradient-text">manage your health</span>
                    </h2>
                    <p className="section-desc">
                        Powerful tools designed to keep you informed and in control of your medications and well-being.
                    </p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon feature-icon-blue">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                                <polyline points="17 21 17 13 7 13 7 21" />
                                <polyline points="7 3 7 8 15 8" />
                            </svg>
                        </div>
                        <h3>Medication Search</h3>
                        <p>
                            Search any medicine and instantly view its side effects,
                            usage details, and important safety information.
                        </p>
                    </div>
                    <div className="feature-card feature-card-highlight">
                        <div className="feature-icon feature-icon-purple">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93L12 22l-.75-12.07A4.001 4.001 0 0112 2z" />
                            </svg>
                        </div>
                        <h3>AI Insights</h3>
                        <p>
                            Get intelligent, personalized explanations about your
                            medications and potential drug interactions.
                        </p>
                        <span className="card-badge">Popular</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon feature-icon-cyan">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <h3>Symptom Logging</h3>
                        <p>
                            Log symptoms with severity ratings and notes. Track patterns
                            over time to share with your doctor.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon feature-icon-green">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="3" y1="9" x2="21" y2="9" />
                                <line x1="9" y1="21" x2="9" y2="9" />
                            </svg>
                        </div>
                        <h3>Health Dashboard</h3>
                        <p>
                            A clean overview of your medications, symptoms, and insights
                            — everything at a glance.
                        </p>
                    </div>
                    {/* <div className="feature-card">
                        <div className="feature-icon feature-icon-orange">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <h3>Reminders</h3>
                        <p>
                            Set personalized medication reminders so you never miss a
                            dose. Stay on schedule effortlessly.
                        </p>
                    </div> */}
                    <div className="feature-card">
                        <div className="feature-icon feature-icon-pink">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                            </svg>
                        </div>
                        <h3>Ask Questions</h3>
                        <p>
                            Chat naturally with AI about your treatments and receive
                            clear, helpful answers in real time.
                        </p>
                    </div>
                </div>
            </section>

            {/* AI Insights Section */}
            <section className="ai-section" id="ai-insights">
                <div className="ai-content">
                    <span className="section-tag">AI-Powered</span>
                    <h2 className="section-title">
                        Intelligence that{' '}
                        <span className="gradient-text">works for you</span>
                    </h2>
                    <p className="section-desc">
                        Powered by advanced AI from Anthropic Claude and OpenAI,
                        MedSy translates complex medical data into insights you
                        can actually understand.
                    </p>
                    <ul className="ai-list">
                        <li>
                            <span className="ai-check">&#10003;</span>
                            Understand potential drug interactions
                        </li>
                        <li>
                            <span className="ai-check">&#10003;</span>
                            Get personalized insights from symptom logs
                        </li>
                        <li>
                            <span className="ai-check">&#10003;</span>
                            Ask questions in natural language
                        </li>
                        <li>
                            <span className="ai-check">&#10003;</span>
                            Save important insights for later reference
                        </li>
                    </ul>
                </div>
                <div className="ai-visual">
                    <div className="ai-card">
                        <div className="ai-card-header">
                            <span className="ai-dot ai-dot-green" />
                            <span>MedSy AI</span>
                        </div>
                        <div className="ai-card-body">
                            <div className="ai-msg ai-msg-user">
                                What are the side effects of Ibuprofen?
                            </div>
                            <div className="ai-msg ai-msg-bot">
                                <div className="ai-typing">
                                    Common side effects include nausea, dizziness,
                                    and stomach pain. Serious but rare effects
                                    include allergic reactions and GI bleeding.
                                    Always take with food to reduce stomach
                                    irritation.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-section" id="tech">
                <div className="section-header">
                    <span className="section-tag">Technology</span>
                    <h2 className="section-title">
                        Built with{' '}
                        <span className="gradient-text">modern tech</span>
                    </h2>
                </div>
                <div className="tech-grid">
                    <div className="tech-pill">React.js</div>
                    <div className="tech-pill">Node.js</div>
                    <div className="tech-pill">Express</div>
                    <div className="tech-pill">Claude API</div>
                    <div className="tech-pill">OpenAI</div>
                    <div className="tech-pill">PostgreSQL</div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-glow" />
                <h2 className="cta-title">
                    Ready to take control of your health?
                </h2>
                <p className="cta-desc">
                    Join MedSy and start understanding your medications like never before.
                </p>
                <button className="btn-primary btn-lg">
                    <span>Get Started Free</span>
                    <span className="btn-arrow">&rarr;</span>
                </button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="nav-icon">&#9883;</span>
                        <span className="nav-title">MedSy</span>
                    </div>
                    <p className="footer-text">
                        Your intelligent health companion. Track, understand, and manage your medications with AI.
                    </p>
                </div>
                <div className="footer-bottom">
                    <span>&copy; 2026 MedSy. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
}
