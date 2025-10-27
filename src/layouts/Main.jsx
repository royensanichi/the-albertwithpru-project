import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div data-theme={"light"} className="relative">
      {isHome && <NavBar />}
      <Outlet />
      <div className="bg-[#2A374A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
