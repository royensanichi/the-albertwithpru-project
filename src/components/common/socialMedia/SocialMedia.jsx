import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  // { icon: faFacebookF, link: "#!" },
  // { icon: faDribbble, link: "#!" },
  { icon: faInstagram, link: "https://www.instagram.com/albertsany/" },
  // { icon: faWhatsapp, link: "https://wa.me/6287883916216?text=Hello, Saya ingin berkonsultansi dengan Anda!" },
  // { icon: faLinkedin, link: "#!" },
  // { icon: faBehance, link: "#!" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
      target="_blank"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
