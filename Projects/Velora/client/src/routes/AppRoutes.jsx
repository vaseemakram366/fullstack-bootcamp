import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />

            <Route
                path="/products"
                element={
                    <MainLayout>
                        <Products />
                    </MainLayout>
                }
            />

            <Route
                path="/product/:id"
                element={
                    <MainLayout>
                        <ProductDetails />
                    </MainLayout>
                }
            />

            <Route
                path="/cart"
                element={
                    <MainLayout>
                        <Cart />
                    </MainLayout>
                }
            />

            <Route
                path="/wishlist"
                element={
                    <MainLayout>
                        <Wishlist />
                    </MainLayout>
                }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
                path="/profile"
                element={
                    <MainLayout>
                        <Profile />
                    </MainLayout>
                }
            />

            <Route
                path="/orders"
                element={
                    <MainLayout>
                        <Orders />
                    </MainLayout>
                }
            />

            <Route
                path="/checkout"
                element={
                    <MainLayout>
                        <Checkout />
                    </MainLayout>
                }
            />
        </Routes>
    );
}

export default AppRoutes;