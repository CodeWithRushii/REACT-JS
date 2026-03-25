export default function Why() {
    return (
        <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <p className="text-green-700 text-sm font-semibold">
                                    • WHY EDULEARN •
                                </p>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
                                Because The Right Education
                                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                    Begins with Trust
                                </span>
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                EduLearn is your trusted partner in finding quality courses crafted
                                for lasting knowledge and career success.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Expert Instructors",
                                    desc: "Learn from industry professionals with real-world experience"
                                },
                                {
                                    title: "Industry-Recognized Certificates",
                                    desc: "Earn credentials that employers value and respect"
                                },
                                {
                                    title: "Flexible Learning Schedule",
                                    desc: "Study at your own pace, anytime and anywhere"
                                },
                                {
                                    title: "Hands-on Projects & Labs",
                                    desc: "Apply your knowledge with practical exercises"
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="bg-gradient-to-br from-green-500 to-blue-500 w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0">
                                        <span className="text-white font-bold text-lg">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <span>Enroll Now</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl opacity-20"></div>
                        <div className="relative bg-white rounded-3xl p-2 shadow-xl">
                            <img
                                src="/src/assets/why-education.jpg"
                                alt="Why EduLearn"
                                className="rounded-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}