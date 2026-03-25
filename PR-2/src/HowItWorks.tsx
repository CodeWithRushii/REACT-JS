export default function HowItWorks() {
    return (
        <div className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <p className="text-orange-700 text-sm font-semibold">
                            • HOW IT WORKS •
                        </p>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
                        Your Path to
                        <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            Learning Success
                        </span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        EduLearn makes starting your educational journey simple, transparent, and effective — every step guided with care and expertise.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            step: "STEP 1",
                            title: "Browse Our Courses",
                            desc: "Explore our diverse catalog of courses across technology, business, design, and more.",
                            image: "/src/assets/step1-browse.jpg",
                            color: "blue"
                        },
                        {
                            step: "STEP 2",
                            title: "Enroll & Learn",
                            desc: "Start learning at your own pace with expert-led video lessons and hands-on projects.",
                            image: "/src/assets/step2-learn.jpg",
                            color: "purple"
                        },
                        {
                            step: "STEP 3",
                            title: "Get Certified",
                            desc: "Complete your course, earn your certificate, and showcase your new skills to employers.",
                            image: "/src/assets/step3-certify.jpg",
                            color: "green"
                        }
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-{item.color}-500 to-{item.color}-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="bg-gradient-to-r from-{item.color}-500 to-{item.color}-600 text-white text-sm px-4 py-2 rounded-full font-semibold inline-block mb-6">
                                    {item.step}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                
                                <div className="relative h-40 overflow-hidden rounded-xl">
                                    <img src={item.image} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                                
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span className="text-sm text-gray-500">Ready to start</span>
                                        </div>
                                        <span className="text-{item.color}-600 font-semibold text-sm">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-6">
                        <div className="text-left">
                            <div className="text-2xl font-bold text-gray-900 mb-1">Ready to get started?</div>
                            <p className="text-gray-600">Join thousands of learners already advancing their careers</p>
                        </div>
                        <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                            Start Learning
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}