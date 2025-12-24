import { Video, Activity, Music, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Video,
    number: '01',
    title: 'Capture',
    description: 'Upload a video or use your webcam to capture your emotional state',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    color: 'blue'
  },
  {
    icon: Activity,
    number: '02',
    title: 'Analyze',
    description: 'Our AI engine analyzes facial expressions and emotional patterns in real-time',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    color: 'purple'
  },
  {
    icon: Music,
    number: '03',
    title: 'Enjoy',
    description: 'Receive perfect recommendations or generate custom music tailored to you',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    color: 'orange'
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background - removed conflicting gradients */}
      <div className="absolute inset-0 p-[0px]">
        {/* Subtle top blend to match Features section */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-100/20 via-purple-100/10 to-transparent dark:from-purple-900/10 dark:via-purple-900/5 dark:to-transparent pointer-events-none" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-2.5 mb-4 sm:mb-6 rounded-full bg-white/80 dark:bg-white/15 backdrop-blur-xl border border-white/50 dark:border-white/30 shadow-lg">
            <span className="text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold">
              🚀 Simple Process
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-300 dark:via-pink-300 dark:to-orange-300 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto px-4">
            Three simple steps to transform your emotional state into the perfect soundtrack
          </p>
        </div>
        
        {/* Modern Timeline Design */}
        <div className="relative max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0
                }}
              >
                {/* Mobile Design */}
                <div className="md:hidden group">
                  <div className="relative p-5 sm:p-6 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-700 ease-out shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 overflow-hidden">
                    {/* Gradient overlay */}
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.gradient}`} />
                    
                    {/* Step number - large background */}
                    <div className={`absolute top-4 right-4 text-6xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-10`}>
                      {step.number}
                    </div>
                    
                    <div className="relative z-10">
                      {/* Icon and title row */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} p-[2px] flex-shrink-0`}>
                          <div className="w-full h-full rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl flex items-center justify-center">
                            <step.icon className="w-7 h-7" 
                              style={{ 
                                stroke: step.color === 'blue' ? 'rgb(59, 130, 246)' : 
                                       step.color === 'purple' ? 'rgb(168, 85, 247)' : 
                                       'rgb(251, 146, 60)',
                                fill: 'none',
                                strokeWidth: 2
                              }} 
                            />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} mb-2`}>
                            <span className="text-xs font-bold text-white">
                              STEP {step.number}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed pl-[72px]">
                        {step.description}
                      </p>
                      
                      {/* Animated accent bar */}
                      <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${step.gradient} rounded-full transition-all duration-1000 ease-out`} />
                    </div>
                  </div>
                </div>

                {/* Desktop Design */}
                <div className="hidden md:flex flex-row items-center gap-6 group">
                  {/* Number & Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className={`relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${step.gradient} p-[2px] sm:p-[3px] group-hover:scale-110 transition-all duration-700 ease-out`}>
                      <div className="w-full h-full rounded-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl flex items-center justify-center transition-all duration-700 ease-out">
                        <step.icon className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 transition-all group-hover:scale-110 duration-700 ease-out`} 
                          style={{ 
                            stroke: step.color === 'blue' ? 'rgb(59, 130, 246)' : 
                                   step.color === 'purple' ? 'rgb(168, 85, 247)' : 
                                   'rgb(251, 146, 60)',
                            fill: 'none',
                            strokeWidth: 2
                          }} 
                        />
                      </div>
                    </div>
                    
                    {/* Connecting line - desktop */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-purple-500/30 to-transparent" />
                    )}
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 w-full p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-700 ease-out group-hover:shadow-2xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-3">
                      <h3 className="text-2xl sm:text-3xl font-bold transition-all duration-500 ease-out">{step.title}</h3>
                      <div className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r ${step.gradient} bg-opacity-20 backdrop-blur-sm`}>
                        <span className={`text-xs sm:text-sm font-semibold text-gray-900 dark:text-white`}>
                          Step {step.number}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed transition-all duration-500 ease-out">
                      {step.description}
                    </p>
                    
                    {/* Animated accent bar */}
                    <div className={`mt-3 sm:mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${step.gradient} rounded-full transition-all duration-1000 ease-out`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}