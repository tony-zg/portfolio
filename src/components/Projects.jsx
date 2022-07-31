import Galaxy from '../assets/galaxy.jpeg';
import Crypto from '../assets/crypto.jpeg';
import ReactImg from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Sass from '../assets/sass.png';
import Tailwind from '../assets/tailwind.png';
import Project from './Project';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full sm:h-screen bg-color-primary container-mobile py-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-color-secondary">
            Projects
          </p>
          <p className="py-6">Check out my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid Item 1 */}
          <Project
            backgroundImage={Galaxy}
            techOneImg={ReactImg}
            techOneAlt="React icon"
            techTwoImg={Firebase}
            techTwoAlt="Firebase icon"
            demoLink="https://deluxe-tapioca-6b9ca1.netlify.app"
            codeLink="https://github.com/tony-zg/galaxy-travel"
          />

          {/* Grid Item 2 */}
          <Project
            backgroundImage={Crypto}
            techOneImg={ReactImg}
            techOneAlt="React icon"
            techTwoImg={Sass}
            techTwoAlt="Sass icon"
            demoLink="https://glittery-praline-aa7466.netlify.app"
            codeLink="https://github.com/tony-zg/crypto-app"
          />

          {/* Grid Item 3 */}
          <Project
            backgroundImage={Crypto}
            techOneImg={ReactImg}
            techOneAlt="React icon"
            techTwoImg={Tailwind}
            techTwoAlt="Tailwind icon"
            demoLink=""
            codeLink="https://github.com/tony-zg/portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
