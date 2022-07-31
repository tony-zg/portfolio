import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="full-screen bg-color-primary container-mobile">
      {/* Container */}
      <div className="max-w-[900px] flex flex-col justify-center h-full mx-auto lg:ml-[20%]">
        <p className="text-color-secondary">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-color-teritiary">
          Tony Guan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Junior Front End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Specialising in building exceptional digital experiences. Currently, I
          am focused on building responsive web applications.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-color-secondary hover:border-color-secondary rounded">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
