import { useState } from "react";
import type { productType } from "../utils/global";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { addProduct } from "../Services/ProductService";

export default function AddProductPage() {
    const navigate = useNavigate();

    const [productData, setProductData] = useState<productType>({
        p_name: "",
        p_price: 0,
        p_stock: 0,
        p_image: "",
        p_category: "",
        p_description: "",
    });

    const [errors, setErrors] = useState<any>({});
    const productCategory = ["Electronic", "Home & Living", "Sports", "Fashion", "Books"];
    
    const onHandleChange = (event: any) => {
        const { name, value } = event.target;
        setProductData(prev => ({ ...prev, [name]: (name === 'p_price' || name === 'p_stock') ? Number(value) : value }));
    }

    const validation = () => {
        let newError: any = {};
        if (!productData.p_name) newError.p_name = "Product name is required";
        if (!productData.p_price) newError.p_price = "Price must be greater than 0";
        if (!productData.p_stock) newError.p_stock = "Stock must be greater than 0";
        if (!productData.p_image) newError.p_image = "Image URL is required"; 
        if (!productData.p_category) newError.p_category = "Category is required";
        if (!productData.p_description) newError.p_description = "Description is required";

        setErrors(newError);
        return Object.keys(newError).length === 0;
    };

    const onHandleSubmit = async (event: any) => {
        event.preventDefault();
        if (!validation()) {
            toast.error("Please fix the errors before submitting");
            return;
        }
        const status = await addProduct(productData);
        if (status) {
            toast.success("Product added successfully!");
            navigate('/viewProduct');
        }
    }

    return (
        <div className="min-h-screen bg-slate-50/50 pb-12">
            {/* Header Section - Modern Centered Layout */}
            <div className="max-w-4xl mx-auto pt-10 px-6">
                <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl mb-10">
                    {/* Decorative Mesh Gradient Background */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full"></div>
                    
                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 mb-4">
                            Inventory System
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                            Add New <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Product.</span>
                        </h1>
                    </div>
                </div>

                {/* Form Card */}
                <form onSubmit={onHandleSubmit} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 md:p-12 space-y-8">
                    
                    {/* Product Name - Full Width */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-800 ml-1">Product Identity</label>
                        <input
                            type="text"
                            name="p_name"
                            onChange={onHandleChange}
                            placeholder="Give your product a catchy name..."
                            className={`w-full h-14 px-6 rounded-2xl bg-slate-50 border-2 transition-all outline-none focus:bg-white ${errors.p_name ? 'border-red-100 ring-2 ring-red-50' : 'border-transparent focus:border-purple-600/20 focus:ring-4 focus:ring-purple-500/5'}`}
                        />
                        {errors.p_name && <p className="text-[11px] font-bold text-red-500 ml-2 uppercase italic">{errors.p_name}</p>}
                    </div>

                    {/* Price & Stock Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-800 ml-1">Price (INR)</label>
                            <input
                                type="number"
                                name="p_price"
                                onChange={onHandleChange}
                                className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white focus:ring-4 focus:ring-purple-500/5 transition-all outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-800 ml-1">Initial Stock</label>
                            <input
                                type="number"
                                name="p_stock"
                                onChange={onHandleChange}
                                className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white focus:ring-4 focus:ring-purple-500/5 transition-all outline-none"
                            />
                        </div>
                    </div>

                    {/* Image & Category Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-800 ml-1">Visual URL</label>
                            <input
                                type="text"
                                name="p_image"
                                onChange={onHandleChange}
                                placeholder="https://..."
                                className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white focus:ring-4 focus:ring-purple-500/5 transition-all outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-800 ml-1">Segment</label>
                            <select 
                                name="p_category" 
                                onChange={onHandleChange} 
                                className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white focus:ring-4 focus:ring-purple-500/5 transition-all outline-none appearance-none cursor-pointer"
                            >
                                <option value="">Browse Categories</option>
                                {productCategory.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-800 ml-1">Specifications</label>
                        <textarea
                            name="p_description"
                            rows={4}
                            onChange={onHandleChange}
                            placeholder="What makes this product special?"
                            className="w-full p-6 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white focus:ring-4 focus:ring-purple-500/5 transition-all outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="w-full md:w-auto px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            Discard
                        </button>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-12 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-purple-600 hover:shadow-[0_20px_40px_rgba(147,51,234,0.3)] active:scale-95 transition-all duration-300"
                        >
                            Publish Product +
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}