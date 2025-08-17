import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/page";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import SuggestionsPage from "./Pages/SuggestionsPage/page";
import ContactPage from "./Pages/ContactPage/page";
import AboutPage from "./Pages/AboutPage/page";
import SolutionsPage from "./Pages/SolutionsPage/page";
import axios from "axios";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Components/theme-provider";

import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./Admin/Components/Layouts/AdminLayout";
import PublicLayout from "./Components/Layout/PublicLayout";
import Package from "./Admin/Components/package";
import Login from "./Admin/Login";
// import CompanyMenu from "./Admin/Company/CompanyMenu";
import DataManagement from "./Admin/Company/DataManagement";
import Dashboard from "./Admin/Company/DashboardButton";
import AnalyticsDashboard from "./Admin/AnalyticsDashboard";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  }, [pathname]);

  return null;
}

const AppContent = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(!localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      setLoading(false);
      return;
    }

    setLoading(true);
    axios
      .post(`https://api.selnaz.com:9098/selnaz/user`)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", res.data);
          setToken(res.data);
          axios.defaults.headers.common["Authorization"] = `Bearer ${res.data}`;
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            {/* Public routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/SuggestionsPage" element={<SuggestionsPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/AboutPage" element={<AboutPage />} />
              <Route path="/SolutionsPage" element={<SolutionsPage />} />
            </Route>
            {/* Admin routes */}
            <Route path="/admin" element={<Login />} />{" "}
            {/* Birbaşa admin = Login */}
            <Route path="/admin/*" element={<AdminRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="Package" element={<Package />} />
                <Route
                  path="company/datamanagement"
                  element={<DataManagement />}
                />
                <Route path="company/dashboard" element={<Dashboard />} />
                <Route
                  path="company/AnalyticsDashboard"
                  element={<AnalyticsDashboard />}
                />
                {/* Başqa admin səhifələr buraya əlavə oluna bilər */}
              </Route>
            </Route>
          </Routes>
        </main>
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
