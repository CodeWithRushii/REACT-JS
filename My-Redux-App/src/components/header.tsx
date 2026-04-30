import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { themeChanges } from "../features/theme/themeSlice";
// import { toggleTheme } from "../features/themeSlice"; // Apne action ka path check karein

export default function Header() {
    const theme = useSelector((state: RootState) => state.theme.mode);
    const dispatch = useDispatch();

    return (
        <nav className={`w-full border-b transition-all duration-300 ${theme === "dark"
            ? "bg-slate-900 border-slate-800 text-white"
            : "bg-white border-gray-200 text-gray-900"
            }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo Section */}
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center gap-2 group">
                            <svg
                                viewBox="0 0 24 24"
                                className={`h-7 w-7 transition-transform group-hover:scale-110 ${theme === "dark" ? "fill-indigo-400" : "fill-indigo-600"
                                    }`}
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="text-sm font-bold tracking-widest uppercase">
                                MY<span className={`font-light italic ${theme === "dark" ? "text-slate-400" : "text-gray-400"}`}>REDUCER</span>APP
                            </span>
                        </a>

                        {/* Nav Links */}
                        <div className="hidden md:flex items-center gap-6">
                            <a href="#" className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-slate-300 hover:text-white" : "text-gray-500 hover:text-black"}`}>Dashboard</a>
                            <a href="#" className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-slate-300 hover:text-white" : "text-gray-500 hover:text-black"}`}>Analytics</a>
                            <a href="#" className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-slate-300 hover:text-white" : "text-gray-500 hover:text-black"}`}>Settings</a>
                        </div>
                    </div>

                    {/* Right Side - Toggle & Button */}
                    <div className="flex items-center gap-5">

                        {/* Theme Toggle Button */}
                        <button
                            onClick={() => dispatch(themeChanges())}
                            className={`p-2 rounded-lg border transition-all active:scale-90 ${theme === "dark" ? "border-slate-700 bg-slate-800 hover:bg-slate-700" : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                                }`}
                        >{theme === "dark" ? "☀️" : "🌙"}
                        </button>

                        <button className={`rounded-md px-5 py-2 text-sm font-bold shadow-sm transition-all active:scale-95 ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}>
                            Deploy
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}