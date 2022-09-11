import { Link } from 'react-scroll';

const MobileMenu = ({ nav, handleClick }) => {
  return (
    <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-screen h-screen bg-color-primary center flex-col'
      }
    >
      <li className="py-6 text-4xl">
        <Link
          onClick={handleClick}
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
      <li className="py-6 text-4xl">
        <Link
          onClick={handleClick}
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
      <li className="py-6 text-4xl">
        <Link
          onClick={handleClick}
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
      <li className="py-6 text-4xl">
        <Link
          onClick={handleClick}
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
      <li className="py-6 text-4xl">
        <Link
          onClick={handleClick}
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
  );
};

export default MobileMenu;
