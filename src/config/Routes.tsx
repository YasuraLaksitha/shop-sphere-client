import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ProductGridView from "../components/ProductGridView.tsx";
import Home from "../components/Home.tsx";
import AboutUs from "../components/AboutUs.tsx";
import ContactUs from "../components/ContactUs.tsx";
import Cart from "../components/Cart.tsx";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'contact',
                element: <ContactUs/>
            },
            {
                path: 'about',
                element: <AboutUs/>
            },
            {
                path: 'products',
                element: <ProductGridView/>,
                children: [
                    {
                        index: true,
                        element: <ProductGridView/>,
                    }
                ]
            }
        ]
    }

])