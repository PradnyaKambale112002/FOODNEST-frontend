import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminRoute from "./components/AdminRoute";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CheckoutPage from "./pages/CheckoutPage";
import MyOrdersPage from "./pages/MyOrdersPage";

import AdminDashboard from "./pages/AdminDashboard";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminLogin from "./pages/AdminLogin";
import AdminMenuPage from "./pages/AdminMenuPage";
import EditMenuItem from "./pages/EditMenuItem";
import AddMenuItem from "./pages/AddMenuItem";
import AdminCategoriesPage from "./pages/AdminCategoriesPage";
import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";
import AdminUsersPage from "./pages/AdminUsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout() {

    const location = useLocation();

    const isAdminPage =
        location.pathname.startsWith("/admin") &&
        location.pathname !== "/admin/login";

    return (
        <>
            {!isAdminPage && <Navbar />}

            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/category/:id" element={<CategoryPage />} />
                <Route path="/food/:id" element={<FoodDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orders" element={<MyOrdersPage />} />
                <Route path="*" element={<NotFoundPage />} />

                <Route path="/admin/login" element={<AdminLogin />} />

                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/orders"
                    element={
                        <AdminRoute>
                            <AdminOrdersPage />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/menu"
                    element={
                        <AdminRoute>
                            <AdminMenuPage />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/menu/add"
                    element={
                        <AdminRoute>
                            <AddMenuItem />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/menu/edit/:id"
                    element={
                        <AdminRoute>
                            <EditMenuItem />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/categories"
                    element={
                        <AdminRoute>
                            <AdminCategoriesPage />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/categories/add"
                    element={
                        <AdminRoute>
                            <AddCategory />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/categories/edit/:id"
                    element={
                        <AdminRoute>
                            <EditCategory />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/users"
                    element={
                        <AdminRoute>
                            <AdminUsersPage />
                        </AdminRoute>
                    }
                />

            </Routes>

            {!isAdminPage && <Footer />}
        </>
    );
}

function App() {
    return (
        <>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>

        <ToastContainer
    position="top-right"
    autoClose={2500}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    theme="colored"
/>
         </>
        
        
    );
}

export default App;