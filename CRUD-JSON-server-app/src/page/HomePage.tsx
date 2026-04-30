import { useEffect, useState } from "react";
import { fetchAllProducts } from "../Services/ProductService";
import type { productFetchType } from "../utils/global";
import { Link } from "react-router";

export default function HomePage() {
    const [allProducts, setAllProducts] = useState<productFetchType[]>([]);
    const [allCategories, setAllCategories] = useState<string[]>([]);
    const [filterCategory, setFilterCategory] = useState<string>("All");

    useEffect(() => {
        getAllProductData();
    }, []);

    useEffect(() => {
        let allCategory: any = new Set(allProducts.map((product) => product.p_category));
        allCategory = Array.from(allCategory);
        setAllCategories(["All", ...allCategory]);
    }, [allProducts]);

    const getAllProductData = async () => {
        const allProductData = await fetchAllProducts();
        setAllProducts(allProductData);
    };

    const filterProducts = (filterCategory === "All")
        ? allProducts
        : allProducts.filter((product) => product.p_category === filterCategory);

    return (
        <div className="min-h-screen bg-white">
            {/* 🚀 BAAP LEVEL HERO SECTION */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-purple-200/40 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-fuchsia-200/30 blur-[100px] rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                            <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
                            Live Inventory
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 leading-[0.9]">
                            FUTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500 italic">STOCK.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium">
                            Experience the next generation of inventory management. Precision, speed, and premium design—all in one place.
                        </p>
                        
                        {/* Stats Island */}
                        <div className="flex justify-center pt-10">
                            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 px-10 py-6 rounded-[2.5rem] shadow-2xl shadow-slate-200/50">
                                <span className="block text-5xl font-black text-slate-950 tracking-tighter">{allProducts.length}</span>
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Items Tracked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🛠️ NAVIGATION & FILTERS */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-slate-100 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between gap-8">
                        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
                            {allCategories.map((category, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => setFilterCategory(category)} 
                                    className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                                        filterCategory === category 
                                            ? "bg-slate-950 text-white shadow-xl scale-105" 
                                            : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 📦 PRODUCT GRID - THE GALLERY */}
            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filterProducts.map((product, index) => (
                        <Link 
                            key={product.id || index} 
                            to={`product-Detail/${product.id}`}
                            className="group relative"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-slate-100 transition-all duration-500 group-hover:rounded-[2rem] group-hover:shadow-2xl group-hover:shadow-purple-200">
                                <img
                                    src={product.p_image}
                                    alt={product.p_name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <button className="w-full py-4 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-[10px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        View Details
                                    </button>
                                </div>

                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                                        {product.p_category}
                                    </span>
                                </div>
                            </div>

                            {/* Info Below Image */}
                            <div className="mt-8 px-4 space-y-2">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-2xl font-black text-slate-950 tracking-tighter line-clamp-1 group-hover:text-purple-600 transition-colors uppercase italic">
                                        {product.p_name}
                                    </h2>
                                    <span className="text-xl font-bold text-slate-900 tracking-tighter">
                                        ₹{Number(product.p_price).toLocaleString()}
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium line-clamp-2 leading-relaxed">
                                    {product.p_description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* 📭 EMPTY STATE */}
                {filterProducts.length === 0 && (
                    <div className="py-40 text-center space-y-6">
                        <div className="text-8xl grayscale opacity-20">📦</div>
                        <h3 className="text-4xl font-black tracking-tighter text-slate-300 italic">EMPTY_INVENTORY</h3>
                        <button 
                            onClick={() => setFilterCategory("All")}
                            className="px-10 py-4 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}