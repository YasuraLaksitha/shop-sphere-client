import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ProductGridView from "../components/ProductGridView.tsx";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";

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
                path: 'about',
                element: <About/>
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