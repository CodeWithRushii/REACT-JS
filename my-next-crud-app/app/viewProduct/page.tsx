"use client";

import { useState, useEffect } from "react";
import { formInventoryDataType } from "../utils/type";
import {
  Package,
  IndianRupee,
  Edit,
  Trash2,
  AlertCircle,
  PlusCircle,
  TrendingUp,
  Search,
  Download,
  Eye,
  ShoppingCart,
  PackageOpen,
  BarChart3,
  MoreVertical
} from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ViewInventory() {

  const [allProducts, setAllProducts] = useState<formInventoryDataType[]>(JSON.parse(localStorage.getItem("products") || "[]"));
  const [selectedProduct, setSelectedProduct] = useState<formInventoryDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (allProducts) {
      localStorage.setItem("products", JSON.stringify(allProducts));
    }
  }, [allProducts]);

  const deleteProduct = (id: number) => {
    const updated = allProducts.filter((p) => p.id !== id);
    setAllProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    toast.success("Product deleted successfully...");
  };

  const openProductModal = (product: formInventoryDataType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <PackageOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
              <p className="text-gray-600">Manage your products efficiently</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/addProduct")}
            className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add Product</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{allProducts.length}</h3>
            <p className="text-gray-600 text-sm">Total Products</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {new Set(allProducts.map(p => p.productCategory)).size}
            </h3>
            <p className="text-gray-600 text-sm">Categories</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {new Set(allProducts.map(p => p.stockStatus)).size}
            </h3>
            <p className="text-gray-600 text-sm">Stock Types</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-orange-600" />
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              ₹{allProducts.length > 0
                ? Math.round(allProducts.reduce((sum, p) => sum + p.productPrice, 0) / allProducts.length).toLocaleString('en-IN')
                : 0}
            </h3>
            <p className="text-gray-600 text-sm">Avg Price</p>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{allProducts.length}</span> products
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stock Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allProducts.length > 0 ? (
                  allProducts.map((product: any) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-linear-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mr-3">
                            <Package className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{product.productName}</p>
                            <p className="text-sm text-gray-500">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{product.productSku}</td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">₹{product.productPrice.toLocaleString('en-IN')}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          product.productQuantity > 10 
                            ? "bg-green-100 text-green-800" 
                            : product.productQuantity > 5 
                            ? "bg-yellow-100 text-yellow-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {product.productQuantity} units
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.productCategory}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          product.stockStatus === "In Stock" 
                            ? "bg-green-100 text-green-800" 
                            : product.stockStatus === "Low Stock" 
                            ? "bg-yellow-100 text-yellow-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {product.stockStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => openProductModal(product)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="View More"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => router.push(`/editProduct/${product.id}`)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Product"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteProduct(product.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" title="More Options">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                        <button
                          onClick={() => router.push("/addProduct")}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Add your first product
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Details Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Modal Header */}
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Product Details</h2>
                      <p className="text-blue-100 text-sm">Complete product information</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Product Overview */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <Package className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{selectedProduct.productName}</h3>
                    <p className="text-gray-600">Product ID: #{selectedProduct.id}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                      selectedProduct.stockStatus === "In Stock" 
                        ? "bg-green-100 text-green-800" 
                        : selectedProduct.stockStatus === "Low Stock" 
                        ? "bg-yellow-100 text-yellow-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {selectedProduct.stockStatus}
                    </span>
                  </div>
                </div>

                {/* Product Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600">SKU Code</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{selectedProduct.productSku}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600">Category</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{selectedProduct.productCategory}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600">Price</span>
                      </div>
                      <p className="text-2xl font-bold text-green-600">₹{selectedProduct.productPrice.toLocaleString('en-IN')}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600">Available Quantity</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <p className={`text-2xl font-bold ${
                          selectedProduct.productQuantity > 10 
                            ? "text-green-600" 
                            : selectedProduct.productQuantity > 5 
                            ? "text-yellow-600" 
                            : "text-red-600"
                        }`}>
                          {selectedProduct.productQuantity}
                        </p>
                        <span className="text-gray-600">units</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600">Total Value</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{(selectedProduct.productPrice * selectedProduct.productQuantity).toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600">Stock Level</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            selectedProduct.productQuantity > 10 
                              ? "bg-green-500" 
                              : selectedProduct.productQuantity > 5 
                              ? "bg-yellow-500" 
                              : "bg-red-500"
                          }`}
                          style={{ width: `${Math.min((selectedProduct.productQuantity / 20) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedProduct.productQuantity > 10 
                          ? "Well Stocked" 
                          : selectedProduct.productQuantity > 5 
                          ? "Low Stock" 
                          : "Critical Stock"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-4">Additional Information</h4>
                  <div className="space-y-4">
                    {/* Product Description */}
                    <div>
                      <span className="text-blue-700 font-medium">Product Description:</span>
                      <div className="mt-2 p-4 bg-white rounded-lg border border-blue-200 overflow-hidden">
                        <p className="text-blue-900 leading-relaxed text-sm breakWords">
                          {selectedProduct.productDescription || "No description available for this product."}
                        </p>
                      </div>
                    </div>

                    {/* Product Tags */}
                    {selectedProduct.productTags && selectedProduct.productTags.length > 0 && (
                      <div>
                        <span className="text-blue-700 font-medium">Tags:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProduct.productTags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex px-3 py-1 text-xs font-semibold bg-white text-blue-700 rounded-full border border-blue-200"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Supplier and Reorder Level */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-700">Supplier:</span>
                        <p className="text-blue-900 font-medium">{selectedProduct.supplierName || "N/A"}</p>
                      </div>
                      <div>
                        <span className="text-blue-700">Reorder Level:</span>
                        <p className="text-blue-900 font-medium">{selectedProduct.reorderLevel} units</p>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-700">Added Date:</span>
                        <p className="text-blue-900 font-medium">Today</p>
                      </div>
                      <div>
                        <span className="text-blue-700">Last Updated:</span>
                        <p className="text-blue-900 font-medium">Recently</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => router.push(`/editProduct/${selectedProduct.id}`)}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Edit className="w-5 h-5" />
                    <span>Edit Product</span>
                  </button>
                  <button
                    onClick={() => {
                      deleteProduct(selectedProduct.id);
                      closeModal();
                    }}
                    className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Trash2 className="w-5 h-5" />
                    <span>Delete</span>
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}