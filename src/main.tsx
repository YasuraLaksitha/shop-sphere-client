import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import {Store} from './store/ConfigStore.ts'
import {RouterProvider} from 'react-router-dom'
import {AppRoutes} from "./config/Routes.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={Store}>
        <RouterProvider router={AppRoutes}/>
    </Provider>,
)
