import React from "react";

function SkillsSection() {
  return (
    <section className=" bg-[rgb(0,0,0)] py-16 px-8 ">
      
      <div className="skill_head">
        {/* Small Heading "02 Skills" in green and left-aligned */}
        <h3 className="text-xl font-semibold text-green-500 mb-4 text-left">
          02. SKILS
        </h3>

        {/* Main Heading "My Skills" Left-aligned */}
        <h2 className="text-4xl font-semibold mb-6 text-white flex items-center justify-center space-x-4">
  <div className="bg-gray-900 w-20 h-2 rounded-[10px]"></div>
  <span className="my-10">My Skills</span>
  <div className="bg-gray-900 w-20 h-2 rounded-[10px]"></div>
</h2>


      </div>

      <div className="skil_contant">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillCard
          logo="⚛️"
          title="React"
          description="Building dynamic and interactive UIs using React.js."
          animation="animate-spin"
        />
        <SkillCard
          logo={<i className="devicon-nodejs-plain colored text-5xl" />}
          title="Node.js"
          description="Building scalable backend APIs with Node.js and Express."
          animation="animate-bounce"
        />
        <SkillCard
          logo="🍃"
          title="MongoDB"
          description="Managing NoSQL databases with MongoDB efficiently."
          animation="animate-pulse"
        />
        <SkillCard
          logo="📜"
          title="JavaScript"
          description="Proficient in JavaScript for both front-end and back-end."
          animation="animate-wiggle"
        />
        <SkillCard
          logo="🌐"
          title="HTML"
          description="Crafting semantic and accessible web structures using HTML5."
          animation="animate-bounce"
        />
        <SkillCard
          logo="🎨"
          title="CSS"
          description="Designing responsive and visually appealing layouts using CSS3."
          animation="animate-spin"
        />
        <SkillCard
          logo={<i className="devicon-git-plain colored text-5xl" />}
          title="Git"
          description="Version control and collaboration using Git and GitHub."
          animation="animate-bounce"
        />
        <SkillCard
          logo={<i className="devicon-tailwindcss-plain colored text-5xl" />}
          title="Tailwind CSS"
          description="Crafting modern and responsive designs using Tailwind CSS."
          animation="animate-pulse"
        />
      </div>
      </div>
     
    </section>
  );
}

function SkillCard({ logo, title, description, animation }) {
  return (
    <div className="relative bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl overflow-hidden group h-64 flex justify-center items-center">
      {/* Default View (Logo with Animation) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-300 group-hover:opacity-0">
        <div className={`text-6xl mb-2 ${animation}`}>{logo}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      {/* Hover View (Details) */}
      <div className="absolute inset-0 bg-gray-700 text-center flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default SkillsSection;
