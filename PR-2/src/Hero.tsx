export default function Hero() {
    return (
        <div id="home"
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(/src/assets/hero-education.jpg)` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <p className="text-white/90 text-sm font-medium">
                                • LEARN & GROW •
                            </p>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
                            Unlock Your
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Potential Through
                            </span>
                            Education
                        </h1>

                        <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                            Discover world-class courses designed to help you master new skills and advance your career in the digital age.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <span>Explore Courses</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </button>
                            <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
                                <span>Watch Demo</span>
                                <span>▶</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-8 mt-12 text-white/60">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white/20"></div>
                                    ))}
                                </div>
                                <span className="text-sm">50K+ Students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1,2,3,4,5].map(i => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                                <span className="text-sm">4.9 Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}