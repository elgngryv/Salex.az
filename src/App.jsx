import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/page";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import FooterElem from "./Components/Layout/FooterElem";
import { X } from "lucide-react";

function App() {
  return (
    <div style={{ overflowX: "visible" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="relative">
        <Footer />
        <FooterElem />
      </div>
    </div>
  );
}

export default App;
