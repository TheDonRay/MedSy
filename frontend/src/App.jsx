import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import GetStartedPage from "./components/GetStartedPage.jsx"; 
import LearnMorePage from "./components/LearnMorePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/getstarted" element={<GetStartedPage />} />  
        <Route path="/learnmore" element={<LearnMorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
