export default function Explore() {
    return (
        <div className="relative h-screen w-full bg-cover bg-center"
             style={{ backgroundImage: `url(/src/assets/explore-cta.jpg)` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-white/90 text-sm font-semibold">
                            • EXPLORE EDULEARN •
                        </p>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-8">
                        Start Your
                        <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            Learning Journey
                        </span>
                        Today
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
                        Join thousands of students worldwide who are already transforming their careers with our expert-led courses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12">
                        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <span>Browse All Courses</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                        <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
                            <span>Download Brochure</span>
                            <span>⬇</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/60">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">500+</div>
                            <p className="text-sm">Courses</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">50K+</div>
                            <p className="text-sm">Students</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">1000+</div>
                            <p className="text-sm">Instructors</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">95%</div>
                            <p className="text-sm">Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}