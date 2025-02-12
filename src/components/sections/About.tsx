import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const skills = {
    frontend: ["React", "TypeScript", "TailwindCSS"],
    backend: ["Node", "MongoDB", "MySQL", "GraphQL"],
  };

  return (
    <section id="about" className="sections-common-style py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate dev with expoerise in building scalable web apps and
              creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      key={index}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      key={index}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education 📚</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech </strong> - RK University (2021 - 2024)
                </li>
                <li>
                  <strong>Diploma </strong> - Govt. Polytechnic, Jamnagar (2018
                  - 2021)
                </li>
                <li>
                  <strong>10th </strong> - Shree Satya Sai Vidhyalaya, Jamnagar
                  (2017 - 2018)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience 💼</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Enginner at Gateway Group Of Companies (Dec 2022 -
                    Present)
                  </h4>
                  <p>Develope and maintain the MERN stack applications</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Internship at Gateway Group Of Companies (Dec 2022 - Aug
                    2023)
                  </h4>
                  <p>
                    Assisted in building front-end components and integration of
                    Rest APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
