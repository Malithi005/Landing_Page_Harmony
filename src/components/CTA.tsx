import { Sparkles, ArrowRight, Zap, Heart } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background blobs - removed conflicting gradients */}
      <div className="absolute inset-0">
        {/* Smooth gradient blend to Footer */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-purple-100/20 dark:from-transparent dark:to-purple-900/10 pointer-events-none" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Main glass card */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] bg-white/70 dark:bg-white/15 backdrop-blur-2xl border border-white/50 dark:border-white/30 p-6 sm:p-12 lg:p-16 xl:p-20 shadow-2xl shadow-purple-500/30">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
          
          {/* Floating decorative elements */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-2xl animate-float" />
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 opacity-20 blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 rounded-full bg-white/80 dark:bg-white/20 backdrop-blur-xl border border-white/50 dark:border-white/30 animate-float shadow-lg">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold">
                Start Your Journey
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
                Feel the Music,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-300 dark:via-pink-300 dark:to-orange-300 bg-clip-text text-transparent">
                Love the Vibe
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-100 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Experience personalized music recommendations powered by emotion AI.
              Let your feelings guide your soundtrack.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14 lg:mb-16 px-4">
              <button className="group relative overflow-hidden px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-700 ease-out hover:scale-105 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-white text-base sm:text-lg">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-all duration-500 ease-out" />
                  <span className="transition-all duration-300 ease-out">LAUNCH HARMONY</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                </span>
              </button>
              
              <button className="group px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-700 ease-out hover:scale-105 shadow-lg w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2 text-base sm:text-lg">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-all duration-500 ease-out" />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300 ease-out">
                    Learn More
                  </span>
                </span>
              </button>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {[
                { icon: '🎵', text: '100M+ Songs' },
                { icon: '⚡', text: 'Real-time Analysis' },
                { icon: '🎨', text: 'AI Generated Music' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-700 ease-out hover:scale-105"
                >
                  <div className="text-2xl sm:text-3xl mb-2 transition-transform duration-500 ease-out hover:scale-110">{item.icon}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom floating cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8">
          <div className="p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 hover:scale-105 transition-all duration-700 ease-out shadow-lg shadow-green-500/10">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-out hover:rotate-12 shadow-md">
                <span className="text-xl sm:text-2xl">✓</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Free to Start</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  No credit card required. Experience Harmony's magic instantly.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 hover:scale-105 transition-all duration-700 ease-out shadow-lg shadow-blue-500/10">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-out hover:rotate-12 shadow-md">
                <span className="text-xl sm:text-2xl">🔒</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Privacy First</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Your emotional data stays private and secure, always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}