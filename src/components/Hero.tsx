import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="accueil"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-blue-500 text-sm uppercase tracking-[0.3em] mb-6">
            Étudiant Marketing Bac+2
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
        >
          Nathan Bru
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 font-light mb-6">
            Recherche alternance en{" "}
            <span className="text-blue-500 font-normal">Marketing Digital</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Passionné par le growth marketing et la digitalisation, je
            recherche une alternance pour contribuer au développement d'une
            marque ambitieuse.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("experiences")}
            className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-sm font-medium"
          >
            Voir mes expériences
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-gray-700 text-gray-300 rounded-full hover:border-gray-500 hover:text-gray-100 transition-all duration-300 text-sm font-medium"
          >
            Me contacter
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => scrollToSection("competences")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
