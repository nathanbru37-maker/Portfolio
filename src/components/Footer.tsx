import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-[#0a0a0a] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2026 Nathan Bru. Tous droits réservés.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Étudiant en Marketing - Recherche Alternance
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:nathanbru37@gmail.com"
              className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail
                size={18}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nathanbru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
