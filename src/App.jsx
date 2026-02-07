import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure this import is correct
import Navbar from './components/Navbar.jsx';  // Import Navbar Component
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home.jsx";
import Research from "./pages/Research.jsx";
import MetabolicCluster from "./components/MetabolicCluster.jsx";
import CardiovascularCluster from "./components/CardiovascularCluster.jsx";
import NeurologicalCluster from "./components/NeurologicalCluster.jsx";
import People from "./pages/People.jsx";
import Publications from "./pages/Publications.jsx";
import News from "./pages/News.jsx";
import Events from "./pages/Events.jsx";
import Careers from "./pages/Careers.jsx";
import LoadingScreen from "./components/LoadingScreen";
import Footer from './components/Footer.jsx';
import WorkshopNY from "./pages/WorkshopNY"; // No aliasing for NY Workshop

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure the loading screen stays visible for at least 3 seconds
    const minLoadTime = 3200;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadTime);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/metabolic" element={<MetabolicCluster />} /> {/* Add the new route */}
        <Route path="/research/cardiovascular" element={<CardiovascularCluster />} />
        <Route path="/research/neurological" element={<NeurologicalCluster />} />
        <Route path="/people" element={<People />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
