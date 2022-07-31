import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <h1>
        <a href="/">
          <img src={Logo} alt="Logo" className="w-[50px]" />
        </a>
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            className="nav-link-hover"
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link-hover"
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-link-hover"
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="nav-link-hover"
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="nav-link-hover"
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu*/}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] rounded-r">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/tonyzg"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} color="#fff" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/tony-zg"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} color="#fff" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-r">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} color="#fff" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
