import JokeWebpack from '../assets/joke-webpack.jpeg';
import Javascript from '../assets/javascript.png';
import Webpack from '../assets/webpack.png';
import Galaxy from '../assets/galaxy.jpeg';
import Crypto from '../assets/crypto.jpeg';
import ReactImg from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Sass from '../assets/sass.png';
import Tailwind from '../assets/tailwind.png';
import Portfolio from '../assets/portfolio.png';
import WorkoutBuddy from '../assets/workout-buddy.jpeg';
import Node from '../assets/node.png';
import MongoDB from '../assets/mongoDB.png';
import Project from './Project';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full sm:h-screen bg-color-primary container-mobile relative z-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-color-secondary">
            Projects
          </p>
          <p className="py-6">Check out my recent projects</p>

          {/* Container */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Grid Item 1 */}
            <Project
              backgroundImage={JokeWebpack}
              name="Don't Laugh Challenge"
              techOneImg={Javascript}
              techOneAlt="JavaScript icon"
              techTwoImg={Webpack}
              techTwoAlt="Webpack icon"
              demoLink="https://dontlaughchallengewithwebpack.netlify.app/"
              codeLink="https://github.com/tony-zg/webpack-joke-app"
            />

            {/* Grid Item 2 */}
            <Project
              backgroundImage={Galaxy}
              name="Galaxy Travel"
              techOneImg={ReactImg}
              techOneAlt="React icon"
              techTwoImg={Firebase}
              techTwoAlt="Firebase icon"
              demoLink="https://glxtravel.netlify.app"
              codeLink="https://github.com/tony-zg/galaxy-travel"
            />

            {/* Grid Item 3 */}
            <Project
              backgroundImage={Crypto}
              name="Coin Search"
              techOneImg={ReactImg}
              techOneAlt="React icon"
              techTwoImg={Sass}
              techTwoAlt="Sass icon"
              demoLink="https://coinsearchcrypto.netlify.app"
              codeLink="https://github.com/tony-zg/crypto-app"
            />

            {/* Grid Item 4 */}
            <Project
              backgroundImage={Portfolio}
              name="Portfolio"
              techOneImg={ReactImg}
              techOneAlt="React icon"
              techTwoImg={Tailwind}
              techTwoAlt="Tailwind icon"
              demoLink="https://tonyzg.com"
              codeLink="https://github.com/tony-zg/portfolio"
            />

            {/* Grid Item 5 */}
            <Project
              backgroundImage={WorkoutBuddy}
              name="Workout Buddy"
              techOneImg={ReactImg}
              techOneAlt="React icon"
              techTwoImg={Node}
              techTwoAlt="Node/Express icon"
              techThreeImg={MongoDB}
              techThreeAlt="MongoDB icon"
              demoLink="https://tonyzg.com"
              codeLink="https://github.com/tony-zg/portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
