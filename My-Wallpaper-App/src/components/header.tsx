export default function FloatingHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto max-w-4xl px-4">
      <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/80 px-6 shadow-2xl backdrop-blur-xl">
        
        <div className="flex items-center gap-8">
          <a href="/" className="font-black text-white uppercase tracking-widest text-lg">
            Wall<span className="text-indigo-400">.</span>
          </a>
          
          <ul className="hidden space-x-6 text-xs font-bold uppercase tracking-widest text-neutral-400 md:flex">
            <li className="hover:text-white cursor-pointer transition">Abstract</li>
            <li className="hover:text-white cursor-pointer transition">Nature</li>
            <li className="hover:text-white cursor-pointer transition">Anime</li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-4 w-[1px] bg-neutral-700 mx-2 hidden sm:block" />
          <button className="text-sm font-medium text-neutral-300 hover:text-white transition">
            Login
          </button>
          <button className="rounded-xl bg-white px-4 py-1.5 text-sm font-bold text-black hover:bg-neutral-200 transition">
            Join Free
          </button>
        </div>
      </div>
    </header>
  );
}