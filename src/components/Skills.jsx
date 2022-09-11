import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import SASS from '../assets/sass.png';
import StyledComponents from '../assets/styled-components.png';
import Tailwind from '../assets/tailwind.png';
import JavaScript from '../assets/javascript.png';
import Webpack from '../assets/webpack.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.png';
import TypeScript from '../assets/typescript.png';
import Node from '../assets/node.png';
import MongoDB from '../assets/mongoDB.png';
import Skill from './Skill';

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-screen h-full bg-color-primary container-mobile relative z-10"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-color-secondary">
            Skills
          </p>
          <p className="py-6">These are the technologies I am familar with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <Skill skillImg={HTML} skillText="HTML" altText="HTML Icon" />
          <Skill skillImg={CSS} skillText="CSS" altText="CSS Icon" />
          <Skill skillImg={SASS} skillText="SASS" altText="SASS Icon" />
          <Skill
            skillImg={StyledComponents}
            skillText="Styled Components"
            altText="Styled Components Icon"
          />
          <Skill
            skillImg={Tailwind}
            skillText="Tailwind"
            altText="Tailwind Icon"
          />
          <Skill
            skillImg={JavaScript}
            skillText="JavaScript"
            altText="JavaScript Icon"
          />
          <Skill
            skillImg={Webpack}
            skillText="Webpack"
            altText="Webpack Icon"
          />
          <Skill skillImg={ReactImg} skillText="React" altText="React Icon" />
          <Skill skillImg={Redux} skillText="Redux" altText="Redux Icon" />
          <Skill
            skillImg={TypeScript}
            skillText="TypeScript"
            altText="TypeScript Icon"
          />
          <Skill
            skillImg={Node}
            skillText="Node/Express"
            altText="Node/Express Icon"
          />
          <Skill
            skillImg={MongoDB}
            skillText="MongoDB"
            altText="MongoDB Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
