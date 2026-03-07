# MedSy

**Track medications, log symptoms, and understand drug information with AI-assisted insights.**

## Overview

MedSy is an intelligent health companion application that helps users manage their medications, monitor symptoms, and gain deeper understanding of their treatments through AI-powered insights. Whether you're managing chronic conditions, tracking multiple prescriptions, or simply want to stay informed about your medications, MedSy provides the tools you need. 

MedSy uses an external medical API from the National Library of Medicine to retrieve medication data, which is then analyzed using AI to provide educational insights. 

**Disclaimer**: MedSy is intended for educational purposes only. Any medical information provided should always be verified and confirmed by a licensed physician or healthcare professional.

## Features

### 🔔 Medication Tracking

- Search your medicine.
- View its side effects and details.
- Get real insight to its side effects and usage.

### 🤖 AI-Assisted Insights

- Get intelligent explanations about your medications
- Understand potential drug interactions
- Receive personalized insights based on your symptom logs
- Ask questions about your treatment in natural language

### 📱 User-Friendly Interface

- Clean, intuitive design for easy daily use
- Quick-add functionality for medications and symptoms
- Dashboard view of your health overview
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/MedSy.git
cd MedSy
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Configure your `.env` file with necessary API keys:

```
ANTHROPIC_API_KEY=your_api_key_here
DATABASE_URL=your_database_url
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technology Stack

- **Frontend**: React.js / Next.js
- **Backend**: Node.js / Express
- **Database**: PostgreSQL / MongoDB
- **AI Integration**: Anthropic Claude API
- **OpenAi Integration**: ChatGpt
- **Styling**: Tailwind CSS / CSS Modules

## Usage

### Adding a Medication

1. Click the "Add Medication" button on the dashboard
2. Enter medication name, dosage, and frequency
3. Set reminder times (optional)
4. Save to your medication list

### Logging Symptoms

1. Navigate to the "Symptoms" tab
2. Click "Log New Symptom"
3. Select or type your symptom
4. Rate severity (1-10 scale)
5. Add notes if needed
6. Submit the entry

### Getting AI Insights

1. Go to the "Insights" section
2. Ask questions about your medications or symptoms
3. View AI-generated explanations and recommendations
4. Save important insights for later reference

~ Lets keep on building.
