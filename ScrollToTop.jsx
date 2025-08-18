import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Yuxarı scroll üçün müxtəlif metodlar
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
  }, [pathname]);

  return null;
};

export default ScrollToTop;
