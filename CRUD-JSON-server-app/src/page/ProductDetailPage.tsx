import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; 
import { fetchSingleProduct } from "../Services/ProductService";
import type { productFetchType } from "../utils/global";

export default function ProductDetailPage() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [productData, setProductData] = useState<productFetchType | null>(null);

    useEffect(() => {
        if (productId) {
            getSingleProduct();
        }
    }, [productId]);

    const getSingleProduct = async () => {
        const data = await fetchSingleProduct(productId || "");
        setProductData(data);
    };

    if (!productData) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="relative">
                    <div className="h-16 w-16 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-4 w-4 bg-purple-600 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFDFF] pb-20">
            {/* Header / Breadcrumb Area */}
            <div className="max-w-7xl mx-auto px-6 pt-10">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-purple-600 transition-all"
                >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    Go Back
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT COLUMN: The Visual Showcase (Lg: 7 cols) */}
                    <div className="lg:col-span-7 relative">
                        <div className="sticky top-32 group">
                            {/* Decorative Background Blur */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-fuchsia-100 blur-[60px] opacity-50 group-hover:opacity-80 transition-opacity"></div>
                            
                            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[3.5rem] bg-white border border-white shadow-2xl shadow-purple-100/50">
                                <img
                                    src={productData.p_image}
                                    alt={productData.p_name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-8 left-8">
                                    <span className="px-6 py-2.5 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                                        {productData.p_category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Details (Lg: 5 cols) */}
                    <div className="lg:col-span-5 space-y-10">
                        {/* Title & Price Section */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-lg text-[10px] font-bold text-purple-600 uppercase tracking-widest">
                                Premium Inventory
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.9] italic">
                                {productData.p_name.split(' ')[0]} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
                                    {productData.p_name.split(' ').slice(1).join(' ')}
                                </span>
                            </h1>
                            
                            <div className="flex items-center gap-6 pt-4">
                                <div className="text-5xl font-black text-slate-950 tracking-tighter italic">
                                    ₹{Number(productData.p_price).toLocaleString()}
                                </div>
                                <div className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                                    productData.p_stock > 0 
                                    ? 'bg-emerald-50 border-emerald-100 text-emerald-600' 
                                    : 'bg-red-50 border-red-100 text-red-600'
                                }`}>
                                    {productData.p_stock > 0 ? `Available (${productData.p_stock})` : 'Out of Order'}
                                </div>
                            </div>
                        </div>

                        {/* Description Box */}
                        <div className="relative group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-100/50">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Product Overview</h3>
                            <p className="text-slate-600 font-medium leading-relaxed italic">
                                "{productData.p_description}"
                            </p>
                        </div>

                        {/* Interaction Area */}
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <button className="flex-[3] h-20 bg-slate-950 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-200 transition-all active:scale-95 flex items-center justify-center gap-3">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Add To Collection
                                </button>
                                <button className="flex-1 h-20 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Trust Bar */}
                            <div className="flex justify-between items-center px-4 py-6 border-t border-slate-100 mt-6">
                                <div className="text-center">
                                    <span className="block text-xs font-black text-slate-950">FREE</span>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Delivery</span>
                                </div>
                                <div className="h-8 w-[1px] bg-slate-100"></div>
                                <div className="text-center">
                                    <span className="block text-xs font-black text-slate-950">100%</span>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Authentic</span>
                                </div>
                                <div className="h-8 w-[1px] bg-slate-100"></div>
                                <div className="text-center">
                                    <span className="block text-xs font-black text-slate-950">SAFE</span>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}