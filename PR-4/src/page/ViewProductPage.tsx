import { useEffect, useState } from "react";
import type { productFetchType } from "../utils/global";
import { deleteProduct, fetchAllProducts } from "../Services/ProductService";
import { useNavigate } from "react-router";

export default function ViewProductPage() {
    const [allProducts, setAllProduct] = useState<productFetchType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemPerPage, setItemPerPage] = useState(10);

    const navigate = useNavigate();

    const totalItems = allProducts.length; 
    const totalPages = Math.ceil(totalItems / itemPerPage); 

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;


    console.log("Total Item : ", totalItems);
    console.log("Total Pages : ", totalPages);
    console.log("Start Index : ", startIndex);
    console.log("End Index : ", endIndex);

    const currentProducts = allProducts.slice(startIndex, endIndex);

    console.log("Current Products : ", currentProducts);
    console.log("Total : ", [...Array(totalPages)]);



    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const allProductData = await fetchAllProducts();
        setAllProduct(allProductData);
    };

    return (
        <div className="min-screen pb-8">
            {/* Page Heading - Glass Morphism Style */}
            <div className="bg-white/70 backdrop-blur-xl border border-purple-100 rounded-2xl shadow-lg shadow-purple-100/50 mb-8 mx-4 sm:mx-6 lg:mx-8 mt-6 p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Inventory Management
                        </div>
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                            Product <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Inventory</span>
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">Manage your catalog and stock levels</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-full shadow-lg shadow-purple-500/30">
                            <span className="text-sm font-medium opacity-90">Total Products: </span>
                            <span className="font-bold text-lg">{allProducts.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Container */}
            <div className="mx-4 sm:mx-6 lg:mx-8 bg-white rounded-2xl shadow-xl shadow-purple-200/50 border border-purple-100 overflow-hidden">
                <div className="overflow-x-auto h-[500px] overflow-y-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-purple-50 to-fuchsia-50 border-b border-purple-100">
                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-purple-700">#</th>
                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-purple-700">Product</th>
                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-purple-700">Category</th>
                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-purple-700">Price</th>
                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-purple-700">Stock</th>
                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-purple-700">Description</th>
                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-purple-700 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-50">
                            {currentProducts.length > 0 ? (
                                currentProducts.map((product, index) => (
                                    <tr key={product.id || index} className="hover:bg-purple-50/50 transition-colors group">
                                        <td className="px-4 py-3 text-sm font-medium text-purple-400">
                                            {startIndex + index + 1}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={product.p_image}
                                                    alt={product.p_name}
                                                    className="w-10 h-10 rounded-lg object-cover bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-100"
                                                />
                                                <span className="font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">{product.p_name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 border border-purple-200">
                                                {product.p_category}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="text-sm font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                                ₹{Number(product.p_price).toLocaleString()}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center gap-1 text-sm font-medium px-2 py-0.5 rounded-full ${product.p_stock < 10 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                                <span className={`w-1 h-1 rounded-full ${product.p_stock < 10 ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                                                {product.p_stock}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <p className="text-sm text-gray-500 max-w-[180px] truncate" title={product.p_description}>
                                                {product.p_description}
                                            </p>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex justify-center items-center gap-1">
                                                <button onClick={() => navigate(`/editProduct/${product.id}`)} className="p-2 text-purple-600 hover:bg-purple-100 hover:text-purple-700 rounded-lg transition-all" title="Edit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => deleteProduct(product.id)} className="p-2 text-red-500 hover:bg-red-100 hover:text-red-600 rounded-lg transition-all" title="Delete">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="px-4 py-8 text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-500 mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-500 font-medium">No products found in inventory.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination - Enhanced Design */}
            <div className="mx-4 sm:mx-6 lg:mx-8 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} 
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg border transition-all ${currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <div className="flex items-center gap-1">
                        {[...Array(totalPages)].map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentPage(index + 1)} 
                                className={`min-w-[36px] h-8 px-2 rounded-lg text-sm font-semibold transition-all ${
                                    currentPage === index + 1 
                                        ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30' 
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} 
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg border transition-all ${currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Items per page:</span>
                    <select 
                        onChange={(event) => {
                            setItemPerPage(Number(event.target.value));
                            setCurrentPage(1);
                        }}
                        value={itemPerPage}
                        className="px-3 py-1.5 rounded-lg border border-purple-200 text-sm font-medium text-gray-700 bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 cursor-pointer"
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>
        </div>
    );
}