import { Smile, Zap, Sparkles, Sliders, Headphones, Brain } from 'lucide-react';

const features = [
  {
    icon: Smile,
    title: 'Emotion Detection',
    description: 'Advanced AI analyzes your facial expressions to detect emotional states in real-time',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    delay: '0s'
  },
  {
    icon: Brain,
    title: 'Smart AI Engine',
    description: 'Neural networks learn your preferences to deliver increasingly accurate recommendations',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    delay: '0.1s'
  },
  {
    icon: Zap,
    title: 'Spotify Integration',
    description: 'Seamlessly connects with Spotify to access millions of tracks instantly',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    delay: '0.2s'
  },
  {
    icon: Sparkles,
    title: 'Smart Recommendations',
    description: 'Get personalized song suggestions that perfectly match your current vibe',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    delay: '0.3s'
  },
  {
    icon: Sliders,
    title: 'Dual Modes',
    description: 'Choose automatic emotion analysis or manually select your mood preference',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    delay: '0.4s'
  },
  {
    icon: Headphones,
    title: 'AI Music Generation',
    description: 'Experience custom AI-generated music tailored to your emotions',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    delay: '0.5s'
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements - removed conflicting gradients */}
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Smooth gradient transition to next section - extended and more subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-purple-100/10 to-purple-100/20 dark:from-transparent dark:via-purple-900/5 dark:to-purple-900/10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-2.5 mb-4 sm:mb-6 rounded-full bg-white/80 dark:bg-white/15 backdrop-blur-xl border border-white/50 dark:border-white/30 shadow-lg">
            <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold">
              ✨ Why Choose Harmony
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
              Powered by Emotion AI
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto px-4">
            Experience music like never before with cutting-edge artificial intelligence
          </p>
        </div>
        
        {/* Bento grid layout with glass cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: 'fade-in-up 0.6s ease-out forwards',
                animationDelay: feature.delay,
                opacity: 0
              }}
            >
              {/* Glass card */}
              <div className="relative h-full p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Floating icon with gradient */}
                <div className="relative mb-4 sm:mb-5 lg:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center group-hover:bg-transparent">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner element */}
                <div className={`absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-4">
          {[
            { number: '100M+', label: 'Songs Available' },
            { number: '99.8%', label: 'Accuracy Rate' },
            { number: '<0.5s', label: 'Response Time' }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 text-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/10"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}