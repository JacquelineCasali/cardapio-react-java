import { FaGithub } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import { Link } from "react-router-dom";
import projects from "../json/Projects.json"
export default function Projects() {

  return (
    <>
     
      <section className="  flex flex-col flex-wrap items-center  bg-white-100 pt-7 pb-10 sm:px-6 lg:px-8  "  >
        {/* <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl p-20  lg:max-w-none lg:py-30"> */}
        <div className="relative  text-center mb-6 ">
          <h2
            className=" font-handwriting text-3xl font-semibold text-center  md:text-center   mb-4  text-green-800
   "     >    Projetos        </h2>
          <p className="relative  text-xl text-gray-400 py-6 sm:text-2xl md:text-3xl" >
            Alguns dos projetos Desenvolvidos.
          </p>
          <div className="absolute left-24 top-0 z-0  h-10 w-44 rounded-lg bg-green-600/10 lg:ml-14 md:ml-20    " />
        </div>

        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 px-6 ">
          {projects.map((project) => (
            <div key={project.title} className="group relative ">
              <div className=" relative h-full w-full overflow-hidden border-b-8 border-green-600/75 bg-white  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={project.image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            <div>

           
              <div className=" flex justify-end items-center   mt-5 mb-8  text-xl font-semibold text-green-500 no-underline hover:underline ">
                <h3 >
                  <a href={project.link} target="_blank">
                    {project.title}
                  </a>
                </h3>
                <div className="flex items-center gap-4 mr-2 w-1/2 justify-end">
                  <Link
                    className="rounded-full hover:-translate-y-2 hover:scale-125 hover:text-blue-600 duration-75 bottom-2"
                    to={project.link}
                    target="_blank"
                  >
                    <VscGlobe
                      className="transition ease-in-out delay-150     "
                      size={32}
                    />
                  </Link>

                  <Link
                    className="rounded-full hover:-translate-y-2 hover:scale-125 hover:text-blue-600 duration-75 bottom-2"
                    to={project.git}
                    target="_blank"
                  >
                    <FaGithub
                      className="transition ease-in-out delay-150     "
                      size={32}
                    />
                  </Link>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div>
        </div> */}
      </section>

      <div className="absolute right-0 -mt-[6px] h-3 w-full rounded-l-full bg-gradient-to-r from-green-700 to-green-400 md:w-full" />
    </>
  );
}
