import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
function Navbar() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        toast.success("Logged Out Successfully");
        navigate("/");
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark sticky-top shadow"
            style={{
                background: "linear-gradient(90deg,#ff512f,#dd2476)"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-2"
                    to="/"
                >
                    🍔 FoodNest
                </Link>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">
                            <Link className="nav-link px-3 fw-semibold" to="/">
                                Home
                            </Link>
                        </li>

                        {token && (role === "USER" || role === "CUSTOMER") && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/cart">
                                        🛒 Cart
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/orders">
                                        📦 Orders
                                    </Link>
                                </li>

                                <li className="nav-item mt-2 mt-lg-0">
                                    <button
                                        className="btn btn-light text-danger fw-bold rounded-pill px-4"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                        {token && role === "ADMIN" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/admin">
                                        Dashboard
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/admin/menu">
                                        Menu
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/admin/categories">
                                        Categories
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/admin/orders">
                                        Orders
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/admin/users">
                                        Users
                                    </Link>
                                </li>

                                <li className="nav-item mt-2 mt-lg-0">
                                    <button
                                        className="btn btn-light text-danger fw-bold rounded-pill px-4"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                        {!token && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/login">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link px-3 fw-semibold" to="/admin/login">
                                        Admin
                                    </Link>
                                </li>

                                <li className="nav-item mt-2 mt-lg-0">
                                    <Link
                                        className="btn btn-warning rounded-pill fw-bold px-4"
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;