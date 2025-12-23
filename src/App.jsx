import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Training from "./pages/Training.jsx";
import TrainingSession from "./pages/TrainingSession.jsx";
import Membership from "./pages/Membership.jsx";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:sessionSlug" element={<TrainingSession />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
