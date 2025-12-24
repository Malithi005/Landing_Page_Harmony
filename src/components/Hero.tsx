import { Sparkles, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated liquid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-purple-50 to-transparent dark:from-gray-950 dark:via-purple-950/30 dark:to-transparent" />
      
      {/* Morphing blobs */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl animate-morph animate-float-slow" />
      <div className="absolute top-40 right-20 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-pink-400/20 to-orange-400/20 dark:from-pink-600/10 dark:to-orange-600/10 rounded-full blur-3xl animate-morph animate-float-slow" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 mb-6 sm:mb-8 rounded-full bg-white/80 dark:bg-white/15 backdrop-blur-xl border border-white/50 dark:border-white/30 shadow-xl shadow-purple-500/20">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold">
            AI-Powered Music Experience
          </span>
        </div>
        
        {/* Main heading with glass effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-4">
          <span className="inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
              Music that
            </span>
          </span>
          <br />
          <span className="inline-block relative">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-300 dark:via-pink-300 dark:to-orange-300 bg-clip-text text-transparent">
              Feels You
            </span>
            {/* Underline effect */}
            <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-orange-600/30 blur-xl" />
          </span>
        </h1>
        
        {/* Glass description card */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-white/15 backdrop-blur-2xl border border-white/50 dark:border-white/30 shadow-2xl shadow-purple-500/20">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed">
            Harmony interprets your emotional patterns and beat preferences
            to recommend the perfect song from over <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">100 million tracks</span>
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          {/* Primary glass button */}
          <button className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl w-full sm:w-auto shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-shimmer" 
                 style={{ backgroundSize: '200% 100%' }} />
            <div className="absolute inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl" />
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-white text-sm sm:text-base">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="white" />
              <span>EXPERIENCE HARMONY</span>
            </span>
          </button>
          
          {/* Secondary glass button */}
          <button className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 transition-all shadow-lg hover:shadow-xl shadow-blue-500/10 w-full sm:w-auto">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-sm sm:text-base">
              Learn More →
            </span>
          </button>
        </div>

        {/* Floating music visualizer bars */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-12 sm:mt-16">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 sm:w-2 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
              style={{
                height: `${30 + Math.random() * 40}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.6 + Math.random() * 0.4}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}