import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <SidebarItem
          sideBarColor="bg-[#0A66C2]"
          itemHref="https://linkedin.com/in/tonyzg"
          text="Linkedin"
          icon={<FaLinkedin size={30} color="#fff" />}
        />

        <SidebarItem
          sideBarColor="bg-[#333333]"
          itemHref="https://github.com/tony-zg"
          text="Github"
          icon={<FaGithub size={30} color="#fff" />}
        />

        <SidebarItem
          sideBarColor="bg-[#6fc2b0]"
          itemHref="mailto:tonyzg06@gmail.com"
          text="Email"
          icon={<HiOutlineMail size={30} color="#fff" />}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
