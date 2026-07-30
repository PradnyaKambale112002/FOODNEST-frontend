import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/UserService";
import { toast, ToastContainer } from "react-toastify";
function LoginPage() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

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

        loginUser(loginData)
            .then((response) => {

                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);

                toast.success("Login Successful");

                navigate("/");

            })
            .catch(() => {
                toast.error("Invalid Email or Password");
            });

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center align-items-center">

                <div className="col-lg-10">

                    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

                        <div className="row g-0">

                            <div className="col-lg-6 d-none d-lg-block">

                                <img
                                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900"
                                    alt="Food"
                                    className="img-fluid h-100 w-100"
                                    style={{
                                        objectFit: "cover"
                                    }}
                                />

                            </div>

                            <div className="col-lg-6">

                                <div className="p-5">

                                    <h2 className="text-center mb-4">
                                        🔐 Welcome Back
                                    </h2>

                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-3">

                                            <label>Email</label>

                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Enter Email"
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                        <div className="mb-3">

                                            <label>Password</label>

                                            <div className="input-group">

                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="Enter Password"
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

                                        <div className="d-flex justify-content-between mb-4">

                                            <div>

                                                <input type="checkbox" /> Remember Me

                                            </div>

                                            <a href="#">
                                                Forgot Password?
                                            </a>

                                        </div>

                                        <button
                                            className="btn btn-success w-100"
                                        >
                                            Login
                                        </button>

                                    </form>

                                    <p className="text-center mt-4">

                                        Don't have an account?

                                        <Link to="/register">
                                            {" "}Register
                                        </Link>

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default LoginPage;