import { useEffect, useState } from "react";
import { type productFetchType } from "../utils/global";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import { fetchSingleProduct, updateProduct } from "../Services/ProductService";

export default function EditProductPage() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [productData, setProductData] = useState<productFetchType>({
        id: "",
        p_name: "",
        p_price: 0,
        p_stock: 0,
        p_image: "abc",
        p_category: "",
        p_description: "",
    });

    const [errors, setErrors] = useState<any>({});
    const productCategory = ["Electronic", "Home & Living", "Sports", "Fashion"];

    useEffect(() => {
        if (productId) {
            getSingleProductData();
        }
    }, [productId]);

    async function getSingleProductData() {
        const data = await fetchSingleProduct(productId || "");
        setProductData(data);
    }

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
        const status = await updateProduct(productData);
        if (status) {
            toast.success("Product updated successfully!");
            navigate('/viewProduct');
        }
    }

    return (
        <div className="min-h-screen bg-[#fafafa] pb-20">
            {/* Header Section: Floating Glass Card */}
            <div className="max-w-5xl mx-auto pt-8 px-4 sm:px-6">
                <div className="relative group overflow-hidden bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-purple-200/50">
                    {/* Animated Accent */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/30 blur-[100px] rounded-full group-hover:bg-fuchsia-600/30 transition-colors duration-700"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-purple-400 mb-3 font-black text-[10px] uppercase tracking-[0.4em]">
                                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
                                Editor Mode
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
                                Edit <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 underline decoration-white/10">Product.</span>
                            </h1>
                        </div>
                        <div className="flex -space-x-3">
                            <div className="h-12 w-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center text-white font-bold">1</div>
                            <div className="h-12 w-12 rounded-full border-4 border-slate-900 bg-purple-600 flex items-center justify-center text-white font-bold">2</div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                    
                    {/* Form Column */}
                    <div className="lg:col-span-2">
                        <form onSubmit={onHandleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/20 space-y-8">
                            
                            {/* Product Name */}
                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Product Designation</label>
                                <input
                                    type="text"
                                    name="p_name"
                                    value={productData.p_name}
                                    onChange={onHandleChange}
                                    className={`w-full h-16 px-6 rounded-2xl bg-slate-50 border-2 transition-all outline-none text-lg font-bold ${errors.p_name ? 'border-red-500/50' : 'border-transparent focus:border-purple-600/20 focus:bg-white'}`}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Valuation (₹)</label>
                                    <input
                                        type="number"
                                        name="p_price"
                                        value={productData.p_price}
                                        onChange={onHandleChange}
                                        className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white outline-none transition-all font-bold"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Stock Count</label>
                                    <input
                                        type="number"
                                        name="p_stock"
                                        value={productData.p_stock}
                                        onChange={onHandleChange}
                                        className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white outline-none transition-all font-bold"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Media Assets (URL)</label>
                                    <input
                                        type="text"
                                        name="p_image"
                                        value={productData.p_image}
                                        onChange={onHandleChange}
                                        className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white outline-none transition-all font-bold"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                                    <select 
                                        name="p_category" 
                                        value={productData.p_category} 
                                        onChange={onHandleChange} 
                                        className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white outline-none transition-all font-bold appearance-none cursor-pointer"
                                    >
                                        <option value="">Select Category</option>
                                        {productCategory.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Detailed Description</label>
                                <textarea
                                    name="p_description"
                                    rows={4}
                                    value={productData.p_description}
                                    onChange={onHandleChange}
                                    className="w-full p-6 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-purple-600/20 focus:bg-white outline-none transition-all resize-none font-medium text-slate-600"
                                ></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
                                <button type="button" onClick={() => navigate(-1)} className="font-black text-xs uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                                    Discard Changes
                                </button>
                                <button type="submit" className="w-full sm:w-auto px-12 py-5 bg-slate-950 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-200 active:scale-95 transition-all">
                                    Update Inventory
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Preview Column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-slate-900 rounded-[2.5rem] p-6 shadow-2xl">
                            <h3 className="text-white font-black text-center text-xs uppercase tracking-[0.3em] mb-6 border-b border-white/10 pb-4">Live Preview</h3>
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800 mb-4 border border-white/5">
                                <img src={productData.p_image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-wider">
                                    {productData.p_category || 'No Category'}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-xl font-black text-white italic truncate">{productData.p_name || 'Untitled Product'}</h4>
                                <div className="flex items-center justify-between">
                                    <span className="text-purple-400 font-bold">₹{productData.p_price}</span>
                                    <span className="text-[10px] text-white/40 font-bold uppercase">Stock: {productData.p_stock}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}