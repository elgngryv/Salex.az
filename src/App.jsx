import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/page";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import FooterElem from "./Components/Layout/FooterElem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="relative">
        <Footer />
        <FooterElem />
      </div>
    </>
  );
}

export default App;
