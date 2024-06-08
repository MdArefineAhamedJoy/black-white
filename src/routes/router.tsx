import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home/Home";
import AllProduct from "./../page/allProducts/AllProduct";
import BestDeals from "../page/bestdeals/BestDeals";
import BottomWar from "../page/bottomwar/BottomWar";
import TShirt from "../page/topOutFit/TShirt";
import Polo from "../page/topOutFit/Polo";
import Shirt from "../page/topOutFit/Shirt";
import Jackets from "../page/topOutFit/Jackets";
import Headwear from "../page/accecsaris/Headwear";

import Login from "../page/log/Loging";
import Registation from "../page/log/Registation";

import Cart from "../page/search&cart/SelectedProductCart";
import { handleBuyProduct } from "../hooks/BuyProduct";
import ProductDetails from "../page/products/ProductDetails";
import Accessories from "../page/accecsaris/Accessories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProduct",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/collection/best-deal",
        element: <BestDeals></BestDeals>,
      },
      {
        path: "/collection/t-shirt",
        element: <TShirt></TShirt>,
      },
      {
        path: "/collection/polo",
        element: <Polo></Polo>,
      },
      {
        path: "/collection/shirt",
        element: <Shirt></Shirt>,
      },
      {
        path: "/collection/jackets",
        element: <Jackets></Jackets>,
      },
      {
        path: "/collection/bottomwar",
        element: <BottomWar></BottomWar>,
      },
      {
        path: "/collection/head-wear",
        element: <Headwear></Headwear>,
      },
      {
        path: "/collection/accessories",
        element: <Accessories></Accessories>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registation></Registation>,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
        loader: ({ params }) => handleBuyProduct(params.id as string),
      },
    ],
  },
]);

export default router;
