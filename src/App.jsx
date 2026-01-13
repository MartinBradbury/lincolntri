import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Training from "./pages/Training.jsx";
import TrainingSession from "./pages/TrainingSession.jsx";
import Membership from "./pages/Membership.jsx";
import Committee from "./pages/Commitee.jsx";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About.jsx";
import ClubEvents from "./pages/ClubEvents.jsx";
import HeadCoach from "./pages/roles/HeadCoach.jsx";
import Secretary from "./pages/roles/Secretary.jsx";
import Treasurer from "./pages/roles/Treasurer";
import WelfareOfficer from "./pages/roles/WelfareOfficer";
import Chairperson from "./pages/roles/Chairperson";
import MembershipSecretary from "./pages/roles/MembershipSecretary";
import SocialMediaOfficer from "./pages/roles/SocialMediaOfficer";

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
          <Route path="/committee" element={<Committee />} />
          <Route path="/about" element={<About />} />
          <Route path="/clubevents" element={<ClubEvents />} />

          {/* Role Pages */}
          <Route path="/committee/roles/head-coach" element={<HeadCoach />} />
          <Route path="/committee/roles/secretary" element={<Secretary />} />
          <Route path="/committee/roles/treasurer" element={<Treasurer />} />
          <Route
            path="/committee/roles/welfare-officer"
            element={<WelfareOfficer />}
          />
          <Route
            path="/committee/roles/chairperson"
            element={<Chairperson />}
          />
          <Route
            path="/committee/roles/membership-secretary"
            element={<MembershipSecretary />}
          />
          <Route
            path="/committee/roles/social-media-officer"
            element={<SocialMediaOfficer />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
