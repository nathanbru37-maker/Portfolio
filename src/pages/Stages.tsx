import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export default function Stages() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  const stages = [
    {
      company: 'TechStart Agency',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop',
      location: 'Paris',
      period: 'Janvier 2024 - Juin 2024',
      role: 'Assistant Marketing Digital',
      shortDescription: 'Agence spécialisée en marketing digital et stratégies de croissance pour startups tech.',
      fullDescription: 'TechStart Agency est une agence parisienne en pleine croissance, spécialisée dans l\'accompagnement des startups technologiques dans leur stratégie de marketing digital et de growth hacking.',
      missions: [
        'Gestion complète des réseaux sociaux (Instagram, LinkedIn, Twitter) avec augmentation de 35% de l\'engagement moyen',
        'Création de contenus visuels et rédactionnels pour les campagnes marketing de 5 clients différents',
        'Analyse des performances avec Google Analytics et création de rapports mensuels détaillés',
        'Participation à la stratégie SEO/SEA et optimisation des campagnes Google Ads',
        'Support à l\'équipe créative pour la production de contenus vidéo et graphiques'
      ],
      skills: ['Community Management', 'Google Analytics', 'Canva', 'Content Marketing', 'SEO/SEA', 'Google Ads'],
      achievements: [
        '+35% d\'engagement sur les réseaux sociaux',
        '15+ campagnes publicitaires gérées',
        'Contribution à l\'acquisition de 3 nouveaux clients majeurs'
      ]
    },
    {
      company: 'EcoLife Solutions',
      logo: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=400&fit=crop',
      location: 'Lyon',
      period: 'Mars 2023 - Août 2023',
      role: 'Stagiaire Marketing & Communication',
      shortDescription: 'Entreprise innovante dans les solutions écologiques et durables pour les particuliers.',
      fullDescription: 'EcoLife Solutions développe et commercialise des produits écologiques innovants destinés aux particuliers soucieux de leur impact environnemental.',
      missions: [
        'Participation active à l\'élaboration de la stratégie de communication digitale annuelle',
        'Conception, rédaction et envoi de newsletters hebdomadaires avec un taux d\'ouverture moyen de 28%',
        'Gestion du planning éditorial sur les réseaux sociaux et création de contenus engageants',
        'Organisation et support logistique lors d\'événements professionnels et salons écologiques',
        'Réalisation d\'une étude de satisfaction client et présentation des résultats à la direction'
      ],
      skills: ['Mailchimp', 'Communication', 'Event Marketing', 'Branding', 'Étude de marché', 'Réseaux sociaux'],
      achievements: [
        '28% de taux d\'ouverture sur les newsletters',
        'Participation à 4 salons professionnels majeurs',
        'Croissance de 20% de la communauté Instagram'
      ]
    },
    {
      company: 'Mode & Tendances',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
      location: 'Marseille',
      period: 'Juillet 2022 - Décembre 2022',
      role: 'Assistant Commercial & Marketing',
      shortDescription: 'Boutique de mode tendance spécialisée dans les collections urbaines et streetwear.',
      fullDescription: 'Mode & Tendances est une boutique marseillaise reconnue pour sa sélection pointue de marques streetwear et son approche innovante de la relation client.',
      missions: [
        'Animation quotidienne des réseaux sociaux (Instagram, TikTok) pour promouvoir les nouvelles collections',
        'Accueil et conseil clientèle personnalisé avec focus sur l\'expérience client et la fidélisation',
        'Participation aux opérations de merchandising et mise en valeur des produits en magasin',
        'Création de contenus photo et vidéo pour les réseaux sociaux et le site web',
        'Support aux ventes et participation aux objectifs commerciaux mensuels'
      ],
      skills: ['Relation Client', 'Vente', 'Social Media', 'Merchandising', 'Photographie', 'TikTok'],
      achievements: [
        'Contribution à +15% de CA sur le trimestre',
        '2000+ nouveaux followers sur Instagram',
        'Création de 50+ contenus visuels'
      ]
    },
  ];

  const toggleStage = (index: number) => {
    setExpandedStage(expandedStage === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-blue-500 text-sm uppercase tracking-[0.3em] mb-4">Parcours</p>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Mes expériences
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Un parcours riche en apprentissages et en missions concrètes 
            dans le domaine du marketing digital.
          </p>
        </motion.div>

        {/* Stages List */}
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                {/* Main Card Content */}
                <div className="grid md:grid-cols-[200px,1fr] gap-6 p-6">
                  {/* Company Logo */}
                  <div className="relative h-48 md:h-auto rounded-xl overflow-hidden bg-gray-800">
                    <img
                      src={stage.logo}
                      alt={stage.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-100">
                        {stage.company}
                      </h3>
                      
                      <p className="text-base text-blue-400 font-medium mb-4">
                        {stage.role}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{stage.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{stage.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed">
                        {stage.shortDescription}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleStage(index)}
                      className="mt-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium self-start"
                    >
                      {expandedStage === index ? (
                        <>
                          Voir moins
                          <ChevronUp size={16} />
                        </>
                      ) : (
                        <>
                          Voir plus
                          <ChevronDown size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedStage === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-800 p-6 bg-gray-900/20">
                        <div className="space-y-8">
                          {/* Full Description */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-gray-200">
                              À propos de l'entreprise
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                              {stage.fullDescription}
                            </p>
                          </div>

                          {/* Missions */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-gray-200">
                              Missions principales
                            </h4>
                            <ul className="space-y-3">
                              {stage.missions.map((mission, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex gap-3 text-gray-400"
                                >
                                  <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                                  <span className="leading-relaxed">{mission}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-gray-200">
                              Réalisations clés
                            </h4>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {stage.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4"
                                >
                                  <p className="text-sm text-blue-300">{achievement}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Skills */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-gray-200">
                              Compétences développées
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {stage.skills.map((skill, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="px-4 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
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
  );
}
