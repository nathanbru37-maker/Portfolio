import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  TrendingUp,
  BarChart3,
  Target,
  MessageSquare,
  Lightbulb,
  Users,
  PenTool,
  Globe,
  Mail,
  Search,
  Image as ImageIcon,
  Calendar
} from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const hardSkills = [
    { icon: TrendingUp, name: 'SEO/SEA' },
    { icon: Target, name: 'Stratégie Marketing' },
    { icon: BarChart3, name: 'Google Analytics' },
    { icon: MessageSquare, name: 'Social Media' },
    { icon: PenTool, name: 'Content Marketing' },
    { icon: Globe, name: 'Community Management' },
    { icon: Mail, name: 'Email Marketing' },
    { icon: Search, name: 'Market Research' },
    { icon: ImageIcon, name: 'Création Visuelle' },
    { icon: Calendar, name: 'Event Marketing' },
  ];

  const softSkills = [
    { icon: Lightbulb, name: 'Créativité' },
    { icon: Users, name: 'Travail d\'équipe' },
  ];

  return (
    <section id="competences" ref={ref} className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-blue-500 text-sm uppercase tracking-[0.3em] mb-4">Compétences</p>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Mon expertise
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Des compétences développées à travers mes expériences professionnelles 
            et mes projets académiques.
          </p>
        </motion.div>

        {/* Hard Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-300">Hard Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {hardSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.03 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-900/30 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 aspect-square">
                    <Icon className="text-blue-400" size={24} />
                    <p className="text-xs text-center text-gray-300 font-medium leading-tight">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-300">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-900/30 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105 aspect-square">
                    <Icon className="text-violet-400" size={24} />
                    <p className="text-xs text-center text-gray-300 font-medium leading-tight">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
