const Project = ({
  backgroundImage,
  name,
  techOneImg,
  techOneAlt,
  techTwoImg,
  techTwoAlt,
  demoLink,
  codeLink
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="shadow-lg  group container rounded center mx-auto content-div"
    >
      {/* Hover effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <div className="text-2xl font-bold text-gray-700 tracking-wider text-center">
          {name}
        </div>
        <div className="pt-4 flex justify-center">
          <img className="w-[40px]" src={techOneImg} alt={techOneAlt} />
          <img className="w-[40px] ml-4" src={techTwoImg} alt={techTwoAlt} />
        </div>
        <div className="pt-4 text-center">
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:opacity-70">
              Demo
            </button>
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:opacity-70">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
