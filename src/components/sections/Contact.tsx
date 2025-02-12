import RevealOnScroll from "../RevealOnScroll";

const Contact = () => {
  return (
    <section id="contact" className="sections-common-style py-20">
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="relative">
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                name="msg"
                id="msg"
                placeholder="Your Message..."
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Submit
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
