const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#3FC1C9]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-width-[1000px] w-full grid grid-cols-1 md:grid-cols-2 sm:gap-y-18 gap-8 px-4">
          <div className="md:text-right text-4xl font-bold">
            <p>👋 I'm Tony, nice to meet you. Please take a look around.</p>
          </div>
          <div className="sm:px-4">
            <p>
              I am a Junior Front-End Developer with 10+ years experience in
              customer service. After being introduced to coding, I would never
              think solving problem is so satisfying. I’m passionate about
              continuous learning, growing and improving my skills so that I can
              deliver high-quality code simultaneously.
            </p>
            <p>
              As a motivated team player, I am very much looking forward to be
              part of an experienced, supportive and like-minded team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
