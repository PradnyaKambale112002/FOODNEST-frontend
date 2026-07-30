import { useEffect, useState } from "react";
import { getDashboard } from "../services/AdminService";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
function AdminDashboard() {

    const [dashboard, setDashboard] = useState({
        totalUsers: 0,
        totalOrders: 0,
        totalMenuItems: 0,
        totalRevenue: 0
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

    getDashboard()
        .then((response) => {
            setDashboard(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });

}, []);

    if (loading) {
    return <LoadingSpinner />;
}

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    👨‍💼 Admin Dashboard
                </h1>

                <p className="text-muted">
                    Welcome to the FoodNest Admin Panel
                </p>

            </div>

            <div className="row g-4">

                <div className="col-xl-3 col-md-6">

                    <div className="card border-0 shadow rounded-4 h-100">

                        <div className="card-body text-center p-4">

                            <div className="display-4 mb-3">
                                👥
                            </div>

                            <h6 className="text-muted">
                                Total Users
                            </h6>

                            <h2 className="fw-bold text-primary">
                                {dashboard.totalUsers}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-xl-3 col-md-6">

                    <div className="card border-0 shadow rounded-4 h-100">

                        <div className="card-body text-center p-4">

                            <div className="display-4 mb-3">
                                🍔
                            </div>

                            <h6 className="text-muted">
                                Menu Items
                            </h6>

                            <h2 className="fw-bold text-success">
                                {dashboard.totalMenuItems}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-xl-3 col-md-6">

                    <div className="card border-0 shadow rounded-4 h-100">

                        <div className="card-body text-center p-4">

                            <div className="display-4 mb-3">
                                📦
                            </div>

                            <h6 className="text-muted">
                                Orders
                            </h6>

                            <h2 className="fw-bold text-warning">
                                {dashboard.totalOrders}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-xl-3 col-md-6">

                    <div className="card border-0 shadow rounded-4 h-100">

                        <div className="card-body text-center p-4">

                            <div className="display-4 mb-3">
                                💰
                            </div>

                            <h6 className="text-muted">
                                Revenue
                            </h6>

                            <h2 className="fw-bold text-danger">
                                ₹{dashboard.totalRevenue}
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card border-0 shadow rounded-4 mt-5">

                <div className="card-body">

                    <h3 className="mb-4 text-center">
                        Quick Management
                    </h3>

                    <div className="row g-3">

                        <div className="col-lg-3 col-md-6">

                            <Link
                                to="/admin/orders"
                                className="btn btn-primary w-100 py-3"
                            >
                                📦 Orders
                            </Link>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <Link
                                to="/admin/menu"
                                className="btn btn-success w-100 py-3"
                            >
                                🍔 Menu
                            </Link>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <Link
                                to="/admin/categories"
                                className="btn btn-warning w-100 py-3"
                            >
                                📂 Categories
                            </Link>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <Link
                                to="/admin/users"
                                className="btn btn-danger w-100 py-3"
                            >
                                👥 Users
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AdminDashboard;