export type formInventoryDataType = {
    id: number,
    productName: string,
    productSku: string,
    productPrice: number,
    productQuantity: number,
    productCategory: string,
    productTags: string[],
    stockStatus: string,
    supplierName: string,
    reorderLevel: number,
    productDescription: string
}

export const categoryList = ["Electronics", "Clothing", "Grocery", "Furniture", "Books"];
export const tagList = ["New", "Sale", "Popular", "Limited", "Trending"];
export const stockList = ["In Stock", "Out of Stock", "Low Stock"];