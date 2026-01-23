import { motion } from "motion/react";
import { useState } from "react";
import {
  Mail,
  Linkedin,
  FileText,
  Send,
  MapPin,
  Calendar,
  Target,
} from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "service_o12ph6g",
        "template_i9rqtgg",
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: `${formData.name} <${formData.email}>`,
          name: formData.name,
          company: formData.company || "Inconnue",
          message: formData.message,
        },
        "_BqGVfxP6dLWREn-Q",
      );

      toast.success("✅ Message envoyé !");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("❌ Erreur lors de l'envoi");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-blue-500 text-sm uppercase tracking-[0.3em] mb-4">
            Contact
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Me contacter</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Je suis actuellement à la recherche d'une alternance en marketing.
            N'hésitez pas à me contacter pour échanger sur vos opportunités.
          </p>
        </motion.div>

        {/* Alternance Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 p-8 bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-blue-400" size={28} />
            <h2 className="text-2xl font-bold">Objectif Alternance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                <MapPin className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Domaines ciblés</p>
                <p className="text-gray-200">
                  Marketing, Social Media, Content Marketing, Prospection,
                  Management
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                <Calendar className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Disponibilité</p>
                <p className="text-gray-200">Septembre 2026</p>
              </div>
            </div>
            {/* <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                <FileText className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Rythme</p>
                <p className="text-gray-200">3j/2j ou 1 sem/1 sem</p>
              </div>
            </div> */}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8">Envoyez-moi un message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-800 focus:border-blue-500 px-0 py-3 text-gray-100 focus:outline-none transition-colors"
                  placeholder="Jean Dupont"
                  disabled={isSending}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-800 focus:border-blue-500 px-0 py-3 text-gray-100 focus:outline-none transition-colors"
                  placeholder="jean.dupont@exemple.fr"
                  disabled={isSending}
                />
              </div>

              {/* Entreprise */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-800 focus:border-blue-500 px-0 py-3 text-gray-100 focus:outline-none transition-colors"
                  placeholder="Votre entreprise"
                  disabled={isSending}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-gray-800 focus:border-blue-500 px-0 py-3 text-gray-100 focus:outline-none transition-colors resize-none"
                  placeholder="Parlez-moi de votre offre d'alternance..."
                  disabled={isSending}
                />
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={isSending}
                className={`cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 font-medium ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSending ? "Envoi..." : "Envoyer le message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Informations de contact
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Je suis disponible pour échanger sur vos opportunités
                d'alternance. N'hésitez pas à me contacter par email ou via
                LinkedIn.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:nathanbru37@gmail.com"
                className="group flex items-center gap-4 p-5 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="text-blue-400" size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-gray-200 font-medium">
                    nathanbru37@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nathanbru"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="text-blue-400" size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    LinkedIn
                  </p>
                  <p className="text-gray-200 font-medium">
                    linkedin.com/in/nathanbru
                  </p>
                </div>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}downloads/CV_Nathan_Bru.pdf`}
                download
                className="group flex items-center gap-4 p-5 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-violet-500/50 transition-all duration-300 w-full"
              >
                <div className="p-3 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors">
                  <FileText className="text-violet-400" size={22} />
                </div>

                <div className="text-left">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    CV
                  </p>
                  <p className="text-gray-200 font-medium">Voir mon CV</p>
                </div>
              </a>
            </div>

            {/* CTA Box */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-500/5 to-violet-500/5 border border-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                Prêt à collaborer ?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Je suis motivé, créatif et prêt à m'investir pleinement dans
                votre équipe. Contactez-moi dès aujourd'hui pour discuter de vos
                besoins en alternance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
