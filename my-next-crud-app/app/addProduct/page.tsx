"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { formInventoryDataType } from "../utils/type";

export default function AddInventory() {
  const categoryList = ["Electronics", "Clothing", "Grocery", "Furniture", "Books"];
  const tagList = ["New", "Sale", "Popular", "Limited", "Trending"];
  const stockList = ["In Stock", "Out of Stock", "Low Stock"];

  const [formData, setFormData] = useState<formInventoryDataType>({
    id: Math.floor(Math.random() * 10000),
    productName: "",
    productSku: "",
    productPrice: 0,
    productQuantity: 0,
    productCategory: "",
    productTags: [] as string[],
    stockStatus: "",
    supplierName: "",
    reorderLevel: 0,
    productDescription: ""
  });

  const [errorForm, setErrorForm] = useState<any>({});

  const [allProducts, setAllProducts] = useState<formInventoryDataType[]>(JSON.parse(localStorage.getItem('products') || "[]"));

  useEffect(() => {
    if (allProducts) {
      localStorage.setItem("products", JSON.stringify(allProducts));
    }
  }, [allProducts]);

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (!validation()) return;

    setAllProducts(prev => [...prev, formData]);
    toast.success("Product added successfully...");

    setFormData({
      id: Math.floor(Math.random() * 10000),
      productName: "",
      productSku: "",
      productPrice: 0,
      productQuantity: 0,
      productCategory: "",
      productTags: [],
      stockStatus: "",
      supplierName: "",
      reorderLevel: 0,
      productDescription: ""
    });
  };

  const onHandleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData(prev => ({
      ...prev,
      [name]:
        name === "productPrice" ||
          name === "productQuantity" ||
          name === "reorderLevel"
          ? Number(value)
          : value
    }));
  };

  const onTagChange = (event: any) => {
    const { value, checked } = event.target;

    setFormData(prev => ({
      ...prev,
      productTags: checked
        ? [...prev.productTags, value]
        : prev.productTags.filter(tag => tag !== value)
    }));
  };

  const validation = () => {
    const error: any = {};

    if (!formData.productName.trim()) error.productName = "Required";
    if (!formData.productSku.trim()) error.productSku = "Required";
    if (!formData.productPrice) error.productPrice = "Required";
    if (!formData.reorderLevel || formData.reorderLevel <= 0) error.reorderLevel = "Required (must be > 0)";
    if (!formData.productCategory.trim()) error.productCategory = "Required";
    if (formData.productTags.length === 0) error.productTags = "Required";
    if (!formData.stockStatus.trim()) error.stockStatus = "Required";
    if (!formData.supplierName.trim()) error.supplierName = "Required";
    if (!formData.productQuantity || formData.productQuantity <= 0) error.productQuantity = "Required (must be > 0)";
    if (!formData.productDescription.trim()) error.productDescription = "Required";

    setErrorForm(error);
    return Object.keys(error).length === 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Add New Product
          </h1>
          <p className="text-gray-500 mt-2">Fill in the details to add an item to your inventory</p>
        </div>

        {/* Form Card */}
        <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300">
          <div className="p-6 md:p-8 space-y-6">
            {/* Product Basic Info Section */}
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                Product Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="productName"
                  value={formData.productName}
                  onChange={onHandleChange}
                  placeholder="e.g., iPhone 15 Pro"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.productName && <p className="text-red-500 text-xs mt-1">{errorForm.productName}</p>}
              </div>

              {/* SKU Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SKU Code <span className="text-red-500">*</span>
                </label>
                <input
                  name="productSku"
                  value={formData.productSku}
                  onChange={onHandleChange}
                  placeholder="e.g., SKU-12345"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productSku ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.productSku && <p className="text-red-500 text-xs mt-1">{errorForm.productSku}</p>}
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (₹) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="productPrice"
                  value={formData.productPrice}
                  onChange={onHandleChange}
                  placeholder="e.g., 49999"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productPrice ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.productPrice && <p className="text-red-500 text-xs mt-1">{errorForm.productPrice}</p>}
              </div>

              {/* Quantity - Now with validation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="productQuantity"
                  value={formData.productQuantity}
                  onChange={onHandleChange}
                  placeholder="e.g., 50"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productQuantity ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.productQuantity && <p className="text-red-500 text-xs mt-1">{errorForm.productQuantity}</p>}
              </div>
            </div>

            {/* Supplier & Inventory Section */}
            <div className="border-b border-gray-100 pb-4 pt-2">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Supplier & Inventory
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Supplier Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Supplier Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="supplierName"
                  value={formData.supplierName}
                  onChange={onHandleChange}
                  placeholder="e.g., Apple Inc."
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.supplierName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.supplierName && <p className="text-red-500 text-xs mt-1">{errorForm.supplierName}</p>}
              </div>

              {/* Reorder Level - Now with validation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reorder Level <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="reorderLevel"
                  value={formData.reorderLevel}
                  onChange={onHandleChange}
                  placeholder="e.g., 10"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.reorderLevel ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.reorderLevel && <p className="text-red-500 text-xs mt-1">{errorForm.reorderLevel}</p>}
              </div>
            </div>

            {/* Description - Now with validation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="productDescription"
                value={formData.productDescription}
                onChange={onHandleChange}
                rows={3}
                placeholder="Enter detailed product description..."
                className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productDescription ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none`}
              />
              {errorForm.productDescription && <p className="text-red-500 text-xs mt-1">{errorForm.productDescription}</p>}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={onHandleChange}
                className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productCategory ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white`}
              >
                <option value="">Select category</option>
                {categoryList.map((c, i) => (
                  <option key={i}>{c}</option>
                ))}
              </select>
              {errorForm.productCategory && <p className="text-red-500 text-xs mt-1">{errorForm.productCategory}</p>}
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {tagList.map((tag, i) => (
                  <label key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                    <input
                      type="checkbox"
                      value={tag}
                      checked={formData.productTags.includes(tag)}
                      onChange={onTagChange}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 accent-indigo-600"
                    />
                    <span className="text-sm text-gray-700">{tag}</span>
                  </label>
                ))}
              </div>
              {errorForm.productTags && <p className="text-red-500 text-xs mt-2">{errorForm.productTags}</p>}
            </div>

            {/* Stock Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock Status <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {stockList.map((s, i) => (
                  <label key={i} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="stockStatus"
                      value={s}
                      checked={formData.stockStatus === s}
                      onChange={onHandleChange}
                      className="border-gray-300 text-indigo-600 focus:ring-indigo-500 accent-indigo-600"
                    />
                    <span className="text-gray-700">{s}</span>
                  </label>
                ))}
              </div>
              {errorForm.stockStatus && <p className="text-red-500 text-xs mt-2">{errorForm.stockStatus}</p>}
            </div>
          </div>

          {/* Form Actions */}
          <div className="bg-gray-50 px-6 py-4 md:px-8 border-t border-gray-100">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              + Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}