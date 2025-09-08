import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Faq from "../components/faq/Faq";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";
import Klaim from "../components/klaim/Klaim";
import Insight from "../components/Insight/Insight";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      {/* <div className="bg-gray-800 pt-20">
      <Insight/>
      </div> */}
      <div className="bg-soft-white pt-50">
      <Testimonial />
      </div>
      <div className="bg-gray-300 pt-20">
      <Klaim/>
      </div>
      {/* <div className="bg-soft-white pt-0">
        <WorkProcess />
      </div> */}
      {/* <Portfolio /> */}
      <Faq />
      {/* <div className="bg-gray-900">
        <WorkTogether />
      </div> */}
      {/* <div className="blog-background">
        <Blog />
      </div> */}
      {/* <div className="bg-soft-white">
        <Profession />
      </div> */}
      {/* <HappyClients /> */}
      <Contact />
    </div>
  );
};

export default Home;