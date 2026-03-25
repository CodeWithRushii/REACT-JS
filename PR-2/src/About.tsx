export default function About() {
    return (
        <div id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-20"></div>
                        <div className="relative bg-white rounded-3xl p-2 shadow-xl">
                            <img
                                src="/src/assets/about-students.jpg"
                                alt="Students learning"
                                className="rounded-2xl w-full"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <p className="text-blue-700 text-sm font-semibold">
                                    • ABOUT EDULEARN •
                                </p>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
                                Empowering learners worldwide with
                                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    quality education
                                </span>
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We are dedicated to providing accessible, high-quality education that transforms lives.
                                With innovation and passion at our core, EduLearn helps you build skills that matter
                                for your personal and professional growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {[
                                { num: "15+", label: "Years of Excellence" },
                                { num: "50K+", label: "Students Enrolled" },
                                { num: "95%", label: "Success Rate" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        {stat.num}
                                    </div>
                                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}