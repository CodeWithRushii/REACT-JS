import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../page/HomePage";
import AddProdutPage from "../page/AddProductPage";
import ViewProductPage from "../page/ViewProductPage";
import NotFoundPage from "../page/NotFoundPage";
import EditProductPage from "../page/EditProductPage";
import ProductDetailPage from "../page/ProductDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "addProduct",
                Component: AddProdutPage
            },
            {
                path: "viewProduct",
                Component: ViewProductPage
            },
            {
                path: "editProduct/:productId",
                Component: EditProductPage
            },
            {
                path: 'product-Detail/:productId',
                Component: ProductDetailPage
            },
            {
                path: "*",
                Component: NotFoundPage
            }
        ],
    },
]);