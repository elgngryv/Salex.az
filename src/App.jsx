import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/page";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
