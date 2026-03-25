export default function Footer() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-5 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">E</span>
                            </div>
                            <span className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">EduLearn</span>
                        </div>
                        
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                            EduLearn offers thoughtfully designed courses, guided by a commitment to quality,
                            accessibility, and transformative learning experiences.
                        </p>
                        
                        <div className="flex gap-4">
                            <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                <span className="text-sm">📧</span>
                            </button>
                            <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                <span className="text-sm">🐦</span>
                            </button>
                            <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                <span className="text-sm">📘</span>
                            </button>
                            <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                <span className="text-sm">💼</span>
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Platform</h3>
                        <ul className="space-y-3">
                            {['Home', 'Courses', 'About', 'Blog', 'Contact'].map((item) => (
                                <li key={item} className="group">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
                        <ul className="space-y-3">
                            {['Help Center', 'Career Guide', 'Student Stories', 'Partner Programs'].map((item) => (
                                <li key={item} className="group">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Get in Touch</h3>
                        <div className="space-y-4">
                            <a href="mailto:hello@edulearn.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                                <span className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-sm">📧</span>
                                <span>hello@edulearn.com</span>
                            </a>
                            <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                                <span className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-sm">📞</span>
                                <span>+1 (555) 123-4567</span>
                            </a>
                        </div>
                        
                        <div className="mt-6">
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                                Subscribe Newsletter
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
                        <div className="flex items-center gap-2">
                            <span>Powered by</span>
                            <span className="text-white font-semibold">EduLearn Platform</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                        <div>
                            © 2025 EduLearn. All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}