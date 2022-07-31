import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="side-bar bg-[#0A66C2] ">
          <a
            className="flex justify-between items-center w-full"
            href="https://linkedin.com/in/tonyzg"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin <FaLinkedin size={30} color="#fff" />
          </a>
        </li>
        <li className="side-bar bg-[#333333]">
          <a
            className="flex justify-between items-center w-full"
            href="https://github.com/tony-zg"
            target="_blank"
            rel="noreferrer"
          >
            Github <FaGithub size={30} color="#fff" />
          </a>
        </li>
        <li className="side-bar bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            Resume <BsFillPersonLinesFill size={30} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
