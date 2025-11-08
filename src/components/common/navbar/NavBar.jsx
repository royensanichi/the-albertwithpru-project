import { useEffect, useState } from "react";
import logo from "../../../assets/albertwithpru128.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Tentang Saya", url: "profile" },
  { id: 3, name: "Klaim", url: "klaim" },
  { id: 5, name: "FAQ", url: "faq" },
  { id: 6, name: "Kontak Langsung", url: "contact" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-120}
      activeStyle={{
        backgroundColor: "#ED1B2E",
        color: "white",
      }}
      className="hover:text-picto-primary px-5 py-3 mx-1"
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`sticky top-0 ${
          position > 50
            ? "bg-soft-white border-b border-gray-300"
            : "bg-white border-white"
        } z-50 transition-all duration-1000`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        <div className="navbar flex justify-between mx-auto content">
          {/* LEFT SIDE */}
          <div className="flex items-center justify-between">
            {/* Dropdown mobile */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold bg-white text-black"
              >
                {menu}
                <li className="mt-2">
                  <button
                    onClick={() => navigate("/quicksurvey")}
                    className="btn btn-primary w-full text-white"
                  >
                    Quick Survey
                  </button>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <Link
              href="#introduction"
              to="introduction"
              smooth={true}
              duration={900}
              className="flex items-center border-0 lg:max-xxl:ps-5"
            >
              <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
              <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
                #<span style={{ color: "#13c4b5f6" }}>Albert</span>
                <span
                  className={window.innerWidth < 500 ? "text-sm" : "text-lg"}
                >
                  With
                </span>
                <span style={{ color: "#ED1B2E" }}>Prudential</span>
              </p>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:flex items-center gap-3">
            <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
              {menu}
            </ul>

            {/* Tombol Quick Survey */}
            <button
              onClick={() => navigate("/quicksurvey")}
              className="hidden lg:block btn btn-primary text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-red-600 transition"
            >
              Quick Survey
            </button>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default NavBar;
