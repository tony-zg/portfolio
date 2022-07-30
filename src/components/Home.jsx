import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[900px] px-10 flex flex-col justify-center h-full mx-auto lg:ml-[20%]">
        <p className="text-[#3FC1C9]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
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
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3FC1C9] hover:border-[#3FC1C9] rounded">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
