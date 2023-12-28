import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import logo from "../../assets/images/2.png"

function Navbar() {
  return (
    <div className="navigation">
      <img className="logo" src={logo} alt="" />
      <a href="#home">
        <AiOutlineHome className="icon " />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#certificates">
        <GrCertificate className="icon" />
      </a>
      <a href="#skillsdescription">
        <GiSkills className="icon" />
      </a>
      <a href="#projects">
        <MdOutlineWeb className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
