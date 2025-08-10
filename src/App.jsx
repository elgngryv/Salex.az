import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/page";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
// import FooterElem from "./Components/Layout/FooterElem";
import SuggestionsPage from "./Pages/SuggestionsPage/page";
import ContactPage from "./Pages/ContactPage/page";
import AboutPage from "./Pages/AboutPage/page";
import SolutionsPage from "./Pages/SolutionsPage/page";
import axios from "axios";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Components/theme-provider";

const AppContent = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) return;

    axios
      .post(`https://api.selnaz.com:9098/selnaz/user`)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", res.data);
          setToken(res.data);
          axios.defaults.headers.common["Authorization"] = `Bearer ${res.data}`;
        } else {
          console.warn("Token cavabda tapılmadı!");
        }
      })
      .catch((err) => {
        console.error("Token alına bilmədi:", err);
      });
  }, [token]);

  if (!token) {
    return <div>Yüklənir...</div>;
  }

  return (
    <ThemeProvider>
  
      <div className="flex flex-col min-h-screen">
        {/* Header yuxarıda */}
        <Header />

        {/* Main hissə flex-grow ilə böyüyür */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SuggestionsPage" element={<SuggestionsPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/SolutionsPage" element={<SolutionsPage />} />
          </Routes>
        </main>

        {/* Footer aşağıda yapışıq */}
        <Footer />
        {/* <FooterElem /> */}
      </div>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
