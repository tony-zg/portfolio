const Skill = ({ skillImg, skillText, altText }) => {
  return (
    <div className="box-shadow">
      <img
        className="w-20 h-20 mx-auto mt-4 rounded-md"
        src={skillImg}
        alt={altText}
      />
      <p className="my-4">{skillText}</p>
    </div>
  );
};

export default Skill;
