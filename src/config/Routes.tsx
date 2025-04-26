import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ProductGridView from "../Components/ProductGridView.tsx";
import Home from "../Components/Home.tsx";

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