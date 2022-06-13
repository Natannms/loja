import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./Page/Cart"
import Home from "./Page/Home"
import Product from "./Page/Product"
export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}