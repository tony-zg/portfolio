const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full sm:h-screen bg-color-primary container-mobile relative z-10"
    >
      <div className="center flex-col w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-6 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-color-secondary">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-width-[1000px] w-full grid grid-cols-1 md:grid-cols-2 sm:gap-y-18 gap-8 px-4">
          <div className="md:text-right text-2xl md:text-4xl font-bold">
            <p>
              <span className="animate-wave inline-block">👋</span> I'm Tony,
              nice to meet you. Please take a look around.
            </p>
          </div>
          <div className="sm:px-4">
            <p>
              Results-oriented Full-Stack Developer with 3 years of experience,
              specialising in frontend solutions and building robust web
              applications using the MERN stack. Committed to continuous
              learning and applying new technologies to drive product quality
              and business outcomes. Effective team player in agile
              environments, fostering strong collaboration through clear,
              responsible communication.
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
