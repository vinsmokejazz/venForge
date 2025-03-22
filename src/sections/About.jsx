import { useState } from 'react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const email = 'vinsmokejazz@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email.trim());
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 h-full">
        {/* Introduction Card */}
        <div className="xl:col-span-1 md:row-span-2">
          <div className="grid-container">
            <img 
              src="assets/grid1.png" 
              alt="Venu Prasad - Full Stack & Blockchain Developer" 
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text 
            text-transparent ">
              Hi, I'm Venu Prasad
            </h2>
            <p className="grid-subtext">
              I'm a digital craftsman, fusing the power of the full stack with innovative blockchain 
              tech to create seamless, next-gen web experiences.
            </p>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="xl:col-span-2 md:row-span-2">
          <div className="grid-container">
            <img 
              src="assets/grid2.png" 
              alt="Tech Stack" 
              className="w-full sm:h-[276px] h-fit object-contain"
            />
           
           
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-cyan-400 bg-clip-text text-transparent">
              Tech Arsenal
            </h2>
            <p className="grid-subtext">
              I develop modern, scalable web applications with Next.js, PostgreSQL and MERN stack,
              while harnessing Solana's potential for decentralized solutions, using Three.js for
              immersive visual experiences.
            </p>
          </div>
        </div>

        {/* Passion Card */}
        <div className="xl:col-span-2 md:row-span-2">
          <div className="grid-container">
            <img 
              src="assets/grid3.png" 
              alt="Creative Passion - Coding, Art, 3D Modeling" 
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <h2 className="text-2xl font-bold bg-gradient-to-r to-orange-400 from-pink-500 bg-clip-text text-transparent">
              Creative Fusion
            </h2>
            <p className="text-gray-400 text-justify">
              I blend technical expertise with artistic expression through coding, 3D modeling, 
              and digital art. Constantly exploring the synergy between blockchain innovation 
              and creative design, I bring imagination to every project.
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="xl:col-span-1 md:row-span-1">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="Contact Venu Prasad"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="flex flex-col items-center mt-auto space-y-3">
              <p className="text-gray-400 text-lg font-medium">Let's Connect</p>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                         hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Copy email address"
              >
                <img 
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                  alt={hasCopied ? "Email copied" : "Copy email"} 
                  className="h-5 w-5 transition-transform hover:scale-110"
                />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent
                               font-medium text-lg hover:brightness-110 transition-all">
                  {email}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;