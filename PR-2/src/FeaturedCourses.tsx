export default function Featured() {
    return (
        <div id="courses" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <p className="text-purple-700 text-sm font-semibold">
                            • FEATURED COURSES •
                        </p>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
                        Handpicked Programs for
                        <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Career Growth
                        </span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Explore our curated selection of courses — thoughtfully designed
                        for skill development, career advancement, and lifelong learning.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Web Development Bootcamp",
                            desc: "Master HTML, CSS, JavaScript & React",
                            duration: "12 weeks",
                            level: "Beginner",
                            certificate: true,
                            price: "$299",
                            image: "/src/assets/course-webdev.jpg"
                        },
                        {
                            title: "Data Science Fundamentals",
                            desc: "Python, Machine Learning & Analytics",
                            duration: "8 weeks",
                            level: "Intermediate",
                            certificate: true,
                            price: "$399",
                            image: "/src/assets/course-datascience.jpg"
                        },
                        {
                            title: "UI/UX Design Mastery",
                            desc: "Design Thinking & Modern Tools",
                            duration: "10 weeks",
                            level: "Beginner",
                            certificate: true,
                            price: "$349",
                            image: "/src/assets/course-webdev.jpg"
                        }
                    ].map((course, i) => (
                        <div key={i} className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-48">
                                <img src={course.image} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                        {course.duration}
                                    </span>
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                        {course.level}
                                    </span>
                                    {course.certificate && (
                                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            Certificate
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{course.desc}</p>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1,2,3,4,5].map(star => (
                                                <span key={star} className="text-yellow-400 text-sm">★</span>
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500">(4.9)</span>
                                    </div>
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                                        {course.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                        <span>Explore All Courses</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}