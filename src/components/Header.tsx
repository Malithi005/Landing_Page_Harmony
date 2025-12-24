import { ThemeToggle } from './ThemeToggle';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/4ceca3fdbc561f05acd1121972535447b7b79a9b.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 px-2 sm:px-0">
      {/* Glass morphism container */}
      <div className="max-w-7xl mx-auto">
        {/* Outer glow layer */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
        
        {/* Main glass container with multiple layers */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.12),0_20px_60px_0_rgba(0,0,0,0.15),0_0_80px_0_rgba(139,92,246,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),0_20px_60px_0_rgba(0,0,0,0.5),0_0_80px_0_rgba(139,92,246,0.3)]">
          {/* Base frosted glass layer */}
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-md" />
          
          {/* Secondary glass layer for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/20 dark:from-white/10 dark:via-white/5 dark:to-transparent" />
          
          {/* Shimmer effect on top edge */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent" />
          
          {/* Content */}
          <div className="relative backdrop-blur-2xl px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo with glass effect */}
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-xl flex items-center justify-center">
                  <img src={logoImage} alt="Harmony Logo" className="w-full h-full object-contain drop-shadow-lg" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                    Harmony
                  </span>
                  <span className="text-[10px] text-gray-600 dark:text-gray-300">AI</span>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {['Features', 'How it Works', 'About'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="relative px-4 py-2 text-sm rounded-xl text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all duration-700 group"
                  >
                    <span className="relative z-10">{item}</span>
                    {/* Glass hover effect with multiple layers */}
                    <div className="absolute inset-0 bg-white/40 dark:bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent dark:from-white/20 dark:to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 rounded-xl border border-white/50 dark:border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                
                {/* Glass button with enhanced layers */}
                <button className="hidden md:block relative group overflow-hidden px-5 py-2 rounded-xl text-sm shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-100 group-hover:opacity-90 transition-opacity duration-700" />
                  <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-xl opacity-60" />
                  <span className="relative z-10 text-white font-medium drop-shadow-sm">Get Started</span>
                </button>

                {/* Mobile menu button with glass effect */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden relative group overflow-hidden p-2 rounded-xl transition-all duration-700"
                >
                  {/* Base glass layer */}
                  <div className="absolute inset-0 bg-white/50 dark:bg-white/10 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30 dark:from-white/20 dark:to-white/5 group-hover:from-white/80 group-hover:to-white/40 dark:group-hover:from-white/25 dark:group-hover:to-white/10 transition-all duration-700" />
                  <div className="absolute inset-0 rounded-xl border border-white/50 dark:border-white/30" />
                  <Menu className="w-5 h-5 relative z-10" />
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden pt-3 mt-3 border-t border-white/40 dark:border-white/30 space-y-1">
                {['Features', 'How it Works', 'About'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="relative block px-4 py-2 rounded-xl transition-all duration-700 text-sm text-gray-800 dark:text-gray-100 overflow-hidden group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {/* Glass layers */}
                    <div className="absolute inset-0 bg-white/50 dark:bg-white/10 backdrop-blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30 dark:from-white/20 dark:to-white/5 group-hover:from-white/80 group-hover:to-white/40 dark:group-hover:from-white/25 dark:group-hover:to-white/10 transition-all duration-700" />
                    <div className="absolute inset-0 rounded-xl border border-white/40 dark:border-white/25" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <span className="relative z-10">{item}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}