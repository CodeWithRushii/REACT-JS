import axios from 'axios';
import { Download, Heart, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

type Wallpaper = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
  likes: number;
  views: number;
}

export default function Home() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchWallpapers = async () => {
    setIsLoading(true); // Fetch shuru hone par true
    try {
      const apiurl = "https://pixabay.com/api";
      const apikey = "55697771-7e1a26f88c91e62fd81b48ae9";
      const response = await axios.get(`${apiurl}/?key=${apikey}&per_page=50&q=${search}`);
      setWallpapers(response.data.hits);
    } catch (error) {
      console.error('Error fetching wallpapers:', error);
    } finally {
      setIsLoading(false); // Fetch khatam hone par false
    }
  };

  useEffect(() => {
    fetchWallpapers();
  }, [search]);

  // --- Shimmer Component ---
  const SkeletonCard = () => (
    <div className="relative overflow-hidden rounded-2xl break-inside-avoid bg-white/5 animate-pulse">
      <div className="w-full h-64 bg-white/10" /> {/* Grey Box */}
      <div className="absolute bottom-0 p-4 w-full space-y-2">
        <div className="h-4 bg-white/20 rounded w-1/2" />
        <div className="h-3 bg-white/10 rounded w-3/4" />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* 1. Hero Section */}
      <section className="relative h-[60vh] w-full flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-900/20 to-transparent blur-3xl -z-10" />
        <h1 className="text-4xl md:text-6xl font-black text-center mb-6 tracking-tight">
          Find your next <span className="text-indigo-500">Masterpiece.</span>
        </h1>
        <div className="w-full max-w-2xl relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-400 transition-colors" />
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search high resolution wallpapers..."
            className="w-full bg-white/10 border border-white/10 backdrop-blur-md py-4 pl-12 pr-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-lg"
          />
        </div>
      </section>

      {/* 2. Filter Tabs */}
      <nav className="flex justify-center border-b border-white/5 mb-8">
        <div className="flex gap-8">
          {['Latest', 'Trending', 'Popular', 'Editor Choice'].map((tab, i) => (
            <button key={tab} className={`pb-4 text-sm font-bold tracking-widest uppercase transition-colors ${i === 0 ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-500 hover:text-white'}`}>
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Wallpaper Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">

          {/* LOGIC: Agar loading hai toh Skeletons dikhao, nahi toh data */}
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : wallpapers.map((wallpaper) => (
              <div key={wallpaper.id} className="relative group overflow-hidden rounded-2xl break-inside-avoid">
                <img
                  src={wallpaper.webformatURL}
                  alt={wallpaper.tags}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold">{wallpaper.user}</p>
                      <p className="text-xs text-gray-300 truncate max-w-[150px]">{wallpaper.tags}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition">
                        <Heart className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-indigo-600 hover:bg-indigo-500 rounded-full transition shadow-lg shadow-indigo-600/40">
                        <Download className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {!isLoading && (
          <div className="mt-16 flex justify-center">
            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all">
              Load More Wallpapers
            </button>
          </div>
        )}
      </div>
    </main>
  );
}