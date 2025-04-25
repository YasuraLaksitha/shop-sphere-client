import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ProductGridView from "../Components/ProductGridView.tsx";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/products',
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