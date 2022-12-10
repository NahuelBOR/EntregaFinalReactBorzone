import { BrowserRouter, } from "react-router-dom"
import PublicRoutes from "./PublicRoutes"




const AppRouter = () => {



    return (
        <BrowserRouter>

            <PublicRoutes />

        </BrowserRouter>
    )
}

export default AppRouter