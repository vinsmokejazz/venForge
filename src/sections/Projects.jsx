import { useState } from "react"
import { myProjects } from "../constants"

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    })
  }

  return (
    <section className="c-space my-20 px-4 " id="projects">
      <p className="head-text flex justify-center">Featured Projects</p>

      {/* Centered container */}
      <div className="flex justify-center">
        <div className="mt-12 gap-5 w-full max-w-2xl relative">
          {/* Project Card */}
          <div className="flex flex-col gap-5 relative sm:p-8 p-6 shadow-2xl shadow-black-500 rounded-xl bg-dark-800">
            {/* Spotlight Image */}
            <div className="absolute top-0 right-0 w-full h-64 opacity-40">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Logo */}
            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 text-white-600 my-5 z-10">
              <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
              <p className="animatedText ">{currentProject.desc}</p>
              <p className="animatedText ">{currentProject.subdesc}</p>
            </div>

            {/* Tech Stack & Live Site */}
            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
              <a
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-7">
              <button
                className="arrow-btn "
                onClick={() => handleNavigation('previous')}
              >
                <img src="/assets/left-arrow.png" alt="left arrow" className="w-5 h-5" />
              </button>
              <button
                className="arrow-btn "
                onClick={() => handleNavigation('next')}
              >
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects