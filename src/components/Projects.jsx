import Galaxy from '../assets/galaxy.jpeg';
import Crypto from '../assets/crypto.jpeg';
import ReactImg from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Sass from '../assets/sass.png';
import Tailwind from '../assets/tailwind.png';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-color-primary"
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
          <div
            style={{ backgroundImage: `url(${Galaxy})` }}
            className="shadow-lg  group container rounded flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl font-bold text-gray-700 tracking-wider text-center">
                Galaxy Travel
              </div>
              <div className="pt-4 flex justify-center">
                <img className="w-[40px]" src={ReactImg} alt="React icon" />
                <img
                  className="w-[40px] ml-4"
                  src={Firebase}
                  alt="Firebase icon"
                />
              </div>
              <div className="pt-4 text-center">
                <a
                  href="https://deluxe-tapioca-6b9ca1.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/tony-zg/galaxy-travel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div
            style={{ backgroundImage: `url(${Crypto})` }}
            className="shadow-lg  group container rounded flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl font-bold text-gray-700 tracking-wider text-center">
                Coin Search
              </div>
              <div className="pt-4 flex justify-center">
                <img className="w-[40px]" src={ReactImg} alt="React icon" />
                <img className="w-[40px] ml-4" src={Sass} alt="Firebase icon" />
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://glittery-praline-aa7466.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/tony-zg/crypto-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div
            style={{ backgroundImage: `url(${Galaxy})` }}
            className="shadow-lg  group container rounded flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl font-bold text-gray-700 tracking-wider text-center">
                Portfolio
              </div>
              <div className="pt-4 flex justify-center">
                <img className="w-[40px]" src={ReactImg} alt="React icon" />
                <img
                  className="w-[40px] ml-4"
                  src={Tailwind}
                  alt="Firebase icon"
                />
              </div>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/tony-zg/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
