import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/UserService";
import { toast, ToastContainer } from "react-toastify";
function AdminLogin() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        setLoading(true);

        loginUser(loginData)

            .then((response) => {

                if (response.data.role === "ADMIN") {

                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("role", response.data.role);

                    toast.success("Admin Login Successful");

                    navigate("/admin");

                } else {

                    toast.warning("You are not an admin.");

                }

            })

            .catch((error) => {

                console.log(error);

                toast.error("Invalid Email or Password");

            })

            .finally(() => {
                setLoading(false);
            });

    };

    return (

        <div
            className="container-fluid d-flex align-items-center justify-content-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#212529,#495057)"
            }}
        >

            <div className="row w-100 justify-content-center">

                <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10 col-11">

                    <div
                        className="card border-0 shadow-lg rounded-4"
                    >

                        <div className="card-body p-4 p-md-5">

                            <div className="text-center mb-4">

                                <div style={{ fontSize: "60px" }}>
                                    👨‍💼
                                </div>

                                <h2 className="fw-bold mt-3">
                                    Admin Login
                                </h2>

                                <p className="text-muted">
                                    Login to manage FoodNest
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        name="email"
                                        placeholder="Enter admin email"
                                        value={loginData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <div className="input-group">

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            className="form-control form-control-lg"
                                            name="password"
                                            placeholder="Enter password"
                                            value={loginData.password}
                                            onChange={handleChange}
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? "🙈" : "👁"}
                                        </button>

                                    </div>

                                </div>

                                <button
                                    className="btn btn-dark btn-lg w-100"
                                    disabled={loading}
                                >

                                    {loading
                                        ? "Logging in..."
                                        : "🔐 Admin Login"}

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AdminLogin;