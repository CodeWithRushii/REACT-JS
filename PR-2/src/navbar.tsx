export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EduLearn</span>
        </div>
        
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="relative group">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600">
              HOME
            </a>
          </li>
          <li className="relative group">
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600">
              COURSES
            </a>
          </li>
          <li className="relative group">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600">
              ABOUT
            </a>
          </li>
        </ul>
        
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          Get Started
        </button>
      </nav>
    </div>
  );
}