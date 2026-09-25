import { FaArrowRight, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "@/components/Footer";

const iconMap = {
  linkedin: <FaLinkedin className="h-6 w-6 text-white" />,
  github: <FaGithub className="h-6 w-6 text-white" />,
  instagram: <FaInstagram className="h-6 w-6 text-white" />,
  email: <FaEnvelope className="h-6 w-6 text-white" />
};

export default function ContactPage({ contact, dictionary, language = "en" }) {
  const content = dictionary?.contactPage || {};

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 z-0 h-full w-full">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/last.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black/80" />
      </div>

      <div className="relative z-20 flex min-h-screen flex-col">
        <div className="relative w-full px-4 pb-16 pt-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm">
              {content.eyebrow || "Contact →"}
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              {content.title || contact.title}
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 drop-shadow-md md:text-lg">
              {content.description || contact.subtitle}
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24">
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            {contact.items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block transform rounded-[24px] border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-all duration-500 group-hover:from-purple-500/10 group-hover:via-purple-500/20 group-hover:to-pink-500/10 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                    {iconMap[item.icon] || iconMap.email}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
                    {item.label}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                    {item.value}
                  </p>
                  <div className="absolute bottom-0 right-0 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <FaArrowRight className="h-4 w-4 text-purple-400" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <Footer dictionary={dictionary} lang={language} />
      </div>
    </main>
  );
}
