import { useNavigate } from "react-router";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative">
            
            {/* 🌌 Background "Void" Text - Unique Element */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <span className="text-[25vw] font-black text-slate-50 tracking-tighter leading-none opacity-50">
                    LOST
                </span>
            </div>

            {/* Mesh Gradients for Depth */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/50 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-100/40 blur-[100px] rounded-full"></div>
            </div>

            {/* Main Content Card */}
            <div className="relative z-10 text-center px-6">
                <div className="space-y-6">
                    
                    {/* Error Code with Gradient */}
                    <div className="relative inline-block group">
                        <h1 className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter italic text-slate-950 transition-transform duration-500 group-hover:scale-110">
                            4<span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-fuchsia-500 underline decoration-slate-100 underline-offset-[20px]">0</span>4
                        </h1>
                        {/* Decorative Badge */}
                        <div className="absolute -top-4 -right-4 md:-right-8 rotate-12 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-xl shadow-2xl">
                            Error_Void
                        </div>
                    </div>

                    <div className="max-w-md mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight italic uppercase">
                            Lost in the <span className="text-purple-600">Inventory?</span>
                        </h2>
                        <p className="text-slate-400 font-medium leading-relaxed uppercase tracking-widest text-[10px]">
                            The resource you are looking for has been moved or deleted from the stockly cloud.
                        </p>
                    </div>

                    {/* Minimalist Action Area */}
                    <div className="pt-10 flex flex-col items-center gap-6">
                        <button
                            onClick={() => navigate('/')}
                            className="group relative px-12 py-5 bg-slate-950 text-white rounded-2xl overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(147,51,234,0.3)] active:scale-95"
                        >
                            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7 7-7" />
                                </svg>
                                Back to Base
                            </span>
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>

                        <button 
                            onClick={() => window.location.reload()}
                            className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-slate-900 transition-colors"
                        >
                            Try Refreshing
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Tagline */}
            <div className="absolute bottom-10 w-full text-center">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[1em] ml-[1em]">
                    Stockly Dashboard v2.0
                </span>
            </div>
        </div>
    );
}