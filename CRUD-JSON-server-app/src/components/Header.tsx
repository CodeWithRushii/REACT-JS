import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="fixed top-6 inset-x-0 z-[100] flex justify-center px-6">
            {/* The Floating 'Island' - Unique shape and heavy blur */}
            <nav className="relative flex items-center justify-between w-full max-w-5xl h-20 px-8 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
                
                {/* Background Accent Glow */}
                <div className="absolute top-0 -left-10 w-40 h-full bg-purple-600/20 blur-[50px] -skew-x-12"></div>

                {/* Logo: Neumorphic / Cyber Style */}
                <NavLink to="/" className="relative z-10 flex items-center gap-3 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 shadow-[0_0_20px_rgba(139,92,246,0.4)] group-hover:rotate-12 transition-transform duration-500">
                        <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="text-2xl font-black italic tracking-tighter text-white">
                        STOCK<span className="text-purple-500">LY.</span>
                    </span>
                </NavLink>

                {/* Navigation: Magnetic Links Look */}
                <div className="hidden md:flex items-center gap-2">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Inventory", path: "/viewProduct" }
                    ].map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `px-6 py-2 rounded-2xl text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                                isActive 
                                    ? "bg-white/10 text-purple-400 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Action Button: Glowing Pulse */}
                <div className="flex items-center gap-4">
                    <NavLink
                        to="/addProduct"
                        className="hidden md:flex relative group overflow-hidden px-8 py-3 bg-white text-slate-950 text-xs font-black uppercase tracking-tighter rounded-full transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">+ New Product</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </NavLink>

                    {/* Mobile Menu Icon: Liquid Style */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden h-12 w-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white"
                    >
                        <div className="space-y-1.5">
                            <span className={`block h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 w-4 bg-purple-500 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute inset-0 bg-slate-900 flex flex-col p-6 space-y-4 animate-in slide-in-from-right duration-300">
                         <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-black text-white italic">MENU</span>
                            <button onClick={toggleMobileMenu} className="text-white text-3xl">&times;</button>
                         </div>
                        <NavLink to="/" onClick={toggleMobileMenu} className="text-4xl font-bold text-white/20 hover:text-white transition-colors">HOME</NavLink>
                        <NavLink to="/viewProduct" onClick={toggleMobileMenu} className="text-4xl font-bold text-white/20 hover:text-white transition-colors">PRODUCTS</NavLink>
                        <NavLink to="/addProduct" onClick={toggleMobileMenu} className="mt-auto py-5 bg-purple-600 text-white text-center font-black rounded-3xl">ADD NEW +</NavLink>
                    </div>
                )}
            </nav>
        </header>
    );
}