import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-color-primary">
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
      <MobileMenu nav={nav} handleClick={handleClick} />

      {/* Social icons */}
      <Sidebar />
    </div>
  );
};

export default Navbar;
