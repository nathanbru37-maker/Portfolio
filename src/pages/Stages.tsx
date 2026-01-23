import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Briefcase,
} from "lucide-react";

export default function Stages() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  const stages = [
    {
      company: "Cedeo",
      logo: `${import.meta.env.BASE_URL}images/cedeo.webp`,
      location: "La Riche",
      period: "2023 - 2025 ",
      role: "Stagiaire",
      shortDescription:
        "Leader dans le domaine du Chauffage - Plomberie - Electricité",
      fullDescription:
        "Cedeo est un magasin principalement dédié aux professionnels, qui prône la rapidité et l'efficacité.",
      missions: [
        "Gestion complète des arrivage du matin et mise en rayon",
        "Gestion des commandes clients / fournisseurs",
        "Analyse des résultats (CA, nombre de clients) sur différentes périodes : quotidienne, hebdomadaire, mensuels",
        "Rangement et réaménagement d'une partie du magasin / dépôt",
        "Vérification complète des produits afin d'éviter les péremptions et autres anomalies",
      ],
      skills: [
        "Passage et réception de commandes",
        "Analyse de performance",
        "Création de visuels",
        "Esprit critique",
        "Mise en rayon",
        "Relationnel avec clients pro",
      ],
      achievements: [
        "Création d'un événement entier > mailing, visuels, cadeau, relationnel",
        "Objectif atteint mensuellement",
        "Passage et réception des commandes réussies ",
      ],
    },
    {
      company: "Francois Gautard Immobilier",
      logo: `${import.meta.env.BASE_URL}images/Gautard.webp`,
      location: "Tours",
      period: "Octobre 2023 - Novembre 2023",
      role: "Stagiaire",
      shortDescription:
        "Une entreprise qui cherche la satisfaction client à tout prix.",
      fullDescription:
        "Francois Gautard Immobilier souhaite transmettre une expertise de la relation client.",
      missions: [
        "Participation active aux visites immobilières - appartement",
        "Planification et suivi des agendas commerciaux",
        "Création de visuels pour les réseaux sociaux et poster",
        "Mise en relation des commerciaux et des clients pour optimiser l’expérience client",
        "Réalisation d'une étude de satisfaction client et présentation des résultats",
      ],
      skills: [
        "Mailing",
        "Communication",
        "Créations de visuels",
        "Management planning",
        "Étude de marché",
        "Réseaux sociaux",
      ],
      achievements: [
        "Satisfaction des commerciaux et des clients",
        "Participation à 1 visite d'appartement",
        "Création de visuels impactants pour les posters",
      ],
    },
    {
      company: "Cooleurs",
      logo: `${import.meta.env.BASE_URL}images/CadresCooleurs.webp`,
      location: "Chambray-Les-Tours",
      period: "Avril 2023 - Mai 2023",
      role: "Stagiaire",
      shortDescription: "Boutique de peinture, papeterie et cadres",
      fullDescription:
        "Cooleurs se distingue de ses concurrents par ses produits de qualité et son professionnalisme.",
      missions: [
        "Mise en rayon - Facing",
        "Accueil et conseil clientèle personnalisé avec focus sur l'expérience client et la fidélisation",
        "Mise en place de l'espace de vente",
        "Argumentation et négociation de vente",
        "Support aux ventes et participation aux objectifs commerciaux mensuels",
      ],
      skills: [
        "Relation Client",
        "Vente",
        "Facing",
        "Merchandising",
        "Négociation",
        "CRM",
      ],
      achievements: [
        "Réagencement et modernisation du rayon Cadres",
        "Optimisation de l'expérience client",
        "Renforcement du professionnalisme du magasin",
      ],
    },
  ];

  const toggleStage = (index: number) => {
    setExpandedStage(expandedStage === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Briefcase size={16} className="text-blue-400" />
            <p className="text-blue-400 text-sm font-medium tracking-wide">
              Mon Parcours
            </p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Expériences Professionnelles
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un parcours riche en apprentissages et en missions concrètes dans le
            domaine du marketing digital.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />

          {/* Stages List */}
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900 shadow-lg shadow-blue-500/50 z-10" />

                {/* Card */}
                <div className="md:ml-20 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
                  {/* Main Content */}
                  <div
                    onClick={() => toggleStage(index)}
                    className="p-6 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      {/* Logo */}
                      <div
                        className="md:w-auto relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden ring-2 ring-gray-800 group-hover:ring-blue-500/50 transition-all duration-300"
                        style={{
                          width:
                            window.innerWidth < 768
                              ? "-webkit-fill-available"
                              : "",
                        }}
                      >
                        <img
                          src={stage.logo}
                          alt={stage.company}
                          className="w-full h-full object-cover object-center max-w-200"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex items-center justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {stage.company}
                          </h3>
                          <p className="text-base text-blue-400 font-medium mb-3">
                            {stage.role}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-blue-400" />
                              <span>{stage.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={14} className="text-blue-400" />
                              <span>{stage.location}</span>
                            </div>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 transition-colors text-sm font-medium flex-shrink-0"
                        >
                          {expandedStage === index ? (
                            <>
                              Réduire
                              <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              Détails
                              <ChevronDown size={16} />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedStage === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-800 bg-gray-950/50 p-8">
                          <div className="space-y-8">
                            {/* Full Description */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <h4 className="text-lg font-semibold mb-3 text-blue-400 flex items-center gap-2">
                                <div className="w-1 h-5 bg-blue-500 rounded-full" />
                                À propos de l'entreprise
                              </h4>
                              <p className="text-gray-300 leading-relaxed pl-4">
                                {stage.fullDescription}
                              </p>
                            </motion.div>

                            {/* Missions */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                                <div className="w-1 h-5 bg-blue-500 rounded-full" />
                                Missions principales
                              </h4>
                              <ul className="space-y-3 pl-4">
                                {stage.missions.map((mission, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    className="flex gap-3 text-gray-300"
                                  >
                                    <span className="text-blue-400 mt-1 flex-shrink-0">
                                      →
                                    </span>
                                    <span className="leading-relaxed">
                                      {mission}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Achievements */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                                <div className="w-1 h-5 bg-blue-500 rounded-full" />
                                Réalisations clés
                              </h4>
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
                                {stage.achievements.map((achievement, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-4 hover:border-blue-400/40 transition-colors"
                                  >
                                    <p className="text-sm text-blue-300 font-medium">
                                      {achievement}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>

                            {/* Skills */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                                <div className="w-1 h-5 bg-blue-500 rounded-full" />
                                Compétences développées
                              </h4>
                              <div className="flex flex-wrap gap-2 pl-4">
                                {stage.skills.map((skill, idx) => (
                                  <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + idx * 0.03 }}
                                    className="px-4 py-2 bg-gray-800/80 hover:bg-gray-800 text-gray-200 text-sm rounded-full border border-gray-700/50 hover:border-gray-600 transition-all cursor-default"
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
