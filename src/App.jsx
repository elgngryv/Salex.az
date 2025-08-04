import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/page";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import FooterElem from "./Components/Layout/FooterElem";
import { X } from "lucide-react";
import SuggestionsPage from "./Pages/SuggestionsPage/page";
import ContactPage from "./Pages/ContactPage/page";
import AboutPage from "./Pages/AboutPage/page";
import SolutionsPage from "./Pages/SolutionsPage/page";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SuggestionsPage" element={<SuggestionsPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/SolutionsPage" element={<SolutionsPage />} />
      </Routes>
      <div className="relative">
        <Footer />
        <FooterElem />
      </div>
    </div>
  );
}

export default App;
