import { Instagram, Linkedin, Github, Mail, Heart } from 'lucide-react';
import logoImage from 'figma:asset/4ceca3fdbc561f05acd1121972535447b7b79a9b.png';

export function Footer() {
  const projectMembers = [
    'R.D.S.Dinal Ranbandara',
    'D.T.D.Weerasinghe',
    'G.Pooja Bachini Fernando',
    'R.A.M.N.Ranaweera',
    'S.Lavan',
    'Mesandu Gunawardhana'
  ];

  const technologies = [
    'React',
    'Python',
    'TensorFlow',
    'Spotify API'
  ];

  const links = [
    { title: 'Product', items: ['Features', 'How it Works', 'Pricing', 'FAQ'] },
    { title: 'Company', items: ['About', 'Blog', 'Careers', 'Press'] },
    { title: 'Resources', items: ['Documentation', 'Help Center', 'API', 'Community'] },
    { title: 'Legal', items: ['Privacy', 'Terms', 'Security', 'Cookies'] }
  ];

  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Smooth blend from CTA section */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-100/20 via-purple-100/10 to-transparent dark:from-purple-900/10 dark:via-purple-900/5 dark:to-transparent pointer-events-none" />
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-background dark:from-transparent dark:via-purple-950/10 dark:to-background" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main footer content with glass effect */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] bg-white/70 dark:bg-white/15 backdrop-blur-2xl border border-white/50 dark:border-white/30 mb-6 sm:mb-8 shadow-xl shadow-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            {/* Brand section */}
            <div className="md:col-span-12 lg:col-span-4">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center p-2">
                  <img src={logoImage} alt="Harmony Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Harmony
                  </span>
                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">Emotion AI</p>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                AI-powered music experience that understands your emotions and delivers the perfect soundtrack for every moment.
              </p>
              
              {/* Social links with glass effect */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {[
                  { icon: Instagram, color: 'from-pink-500 to-orange-500' },
                  { icon: Linkedin, color: 'from-blue-500 to-cyan-500' },
                  { icon: Github, color: 'from-gray-500 to-gray-700' },
                  { icon: Mail, color: 'from-purple-500 to-pink-500' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/80 dark:bg-white/15 backdrop-blur-xl border border-white/50 dark:border-white/30 hover:bg-white/90 dark:hover:bg-white/25 transition-all hover:scale-110 flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  </a>
                ))}
              </div>
            </div>

            {/* Team section */}
            <div className="md:col-span-12 lg:col-span-4">
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg text-gray-900 dark:text-gray-100">Project Team</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {projectMembers.map((member, index) => (
                  <div
                    key={index}
                    className="group p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/25 hover:bg-white/80 dark:hover:bg-white/20 transition-all hover:scale-105 shadow-sm overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-left text-gray-800 dark:text-gray-100 leading-tight break-words">{member}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="md:col-span-12 lg:col-span-4">
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg text-gray-900 dark:text-gray-100">Built With</h4>
              <div className="space-y-2.5 sm:space-y-3">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/25 hover:bg-white/80 dark:hover:bg-white/20 transition-all hover:scale-105 hover:shadow-lg shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">{tech}</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 group-hover:scale-150 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="pt-6 sm:pt-8 border-t border-white/50 dark:border-white/30 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {links.map((column, index) => (
              <div key={index}>
                <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-gray-900 dark:text-gray-100">{column.title}</h5>
                <ul className="space-y-1.5 sm:space-y-2">
                  {column.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5 sm:gap-2 group"
                      >
                        <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="pt-6 sm:pt-8 border-t border-white/50 dark:border-white/30">
            <div className="max-w-md">
              <h5 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base text-gray-900 dark:text-gray-100">Stay Updated</h5>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                Get the latest news and updates from Harmony
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 transition-all text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with glass effect */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-white/15 backdrop-blur-2xl border border-white/50 dark:border-white/30 shadow-lg shadow-blue-500/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <p className="flex items-center gap-2">
              © 2025 Harmony. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 animate-pulse" fill="currentColor" /> by the Harmony Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}