import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/page";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import SuggestionsPage from "./Pages/SuggestionsPage/page";
import ContactPage from "./Pages/ContactPage/page";
import AboutPage from "./Pages/AboutPage/page";
import SolutionsPage from "./Pages/SolutionsPage/page";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Components/theme-provider";
import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./Admin/Components/Layouts/AdminLayout";
import PublicLayout from "./Components/Layout/PublicLayout";
import Package from "./Admin/Components/Package/index";
import Login from "./Admin/Login";
import DataManagement from "./Admin/Company/DataManagement";
import Dashboard from "./Admin/Company/DashboardButton";
import AnalyticsDashboard from "./Admin/AnalyticsDashboard";
import Company from "./Admin/Company/Company";
import UserMessage from "./Admin/UserMessage";
import SelnazMessage from "./Admin/SelnazMessage";
import Buttons from "./Admin/Buttons";
import axios from "axios";
import MessagesUser from "./Admin/MessagesUser";

// Token ilə bağlı dəyişənlər
const TOKEN_KEY = "token";
const TOKEN_CREATED_AT_KEY = "token_created_at";
const TOKEN_VALIDITY_MS = 10 * 24 * 60 * 60 * 1000; // 10 gün

// Axios instance
const api = axios.create({
  baseURL: "https://api.selnaz.com:9098",
});

// Yeni token alma funksiyası
const fetchToken = async () => {
  try {
    const res = await axios.post(`${api.defaults.baseURL}/selnaz/user`);
    const newToken = res.data;
    localStorage.setItem(TOKEN_KEY, newToken);
    localStorage.setItem(TOKEN_CREATED_AT_KEY, Date.now().toString());
    api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
    return newToken;
  } catch (err) {
    console.error("Token yenilənmədi:", err);
    throw err;
  }
};

// Mövcud tokeni yoxla və lazım olsa yenilə
const initToken = async () => {
  let token = localStorage.getItem(TOKEN_KEY);
  const createdAt = parseInt(localStorage.getItem(TOKEN_CREATED_AT_KEY), 10);

  if (!token || !createdAt || Date.now() - createdAt > TOKEN_VALIDITY_MS) {
    token = await fetchToken();
  } else {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

// 403 interceptoru
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await fetchToken();
      originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

// ScrollToTop komponenti
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

const AppContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initToken();
      } catch (err) {
        console.error("Token initialization failed", err);
      } finally {
        setLoading(false);
      }
    };
    initialize();
  }, []);

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
            <Route path="/admin" element={<Login />} />
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
                <Route path="company/Company" element={<Company />} />
                <Route path="company/UserMessage" element={<UserMessage />} />
                <Route
                  path="company/SelnazMessage"
                  element={<SelnazMessage />}
                />
                <Route path="company/Buttons" element={<Buttons />} />
                <Route path="MessagesUser" element={<MessagesUser />} />
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
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
