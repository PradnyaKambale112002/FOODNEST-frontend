import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/UserService";
import { toast, ToastContainer } from "react-toastify";
function RegisterPage() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: "USER"
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        registerUser(user)
            .then(() => {

                toast.success("Registration Successful");

                navigate("/login");

            })
            .catch((error) => {

                console.log(error);

                toast.error("Registration Failed");

            });

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-10">

                    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

                        <div className="row g-0">

                            <div className="col-lg-6 d-none d-lg-block">

                                <img
                                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=900"
                                    alt="Register"
                                    className="img-fluid h-100 w-100"
                                    style={{
                                        objectFit: "cover"
                                    }}
                                />

                            </div>

                            <div className="col-lg-6">

                                <div className="p-5">

                                    <h2 className="text-center mb-4">
                                        🍔 Create Account
                                    </h2>

                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-3">

                                            <label>Name</label>

                                            <input
                                                className="form-control"
                                                name="name"
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                        <div className="mb-3">

                                            <label>Email</label>

                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
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
                                                    onChange={handleChange}
                                                    required
                                                />

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? "🙈" : "👁"}
                                                </button>

                                            </div>

                                        </div>

                                        <div className="mb-3">

                                            <label>Phone</label>

                                            <input
                                                className="form-control"
                                                name="phone"
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                        <div className="mb-3">

                                            <label>Address</label>

                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                name="address"
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                        <button
                                            className="btn btn-success w-100"
                                        >
                                            Register
                                        </button>

                                    </form>

                                    <p className="text-center mt-4">

                                        Already have an account?

                                        <Link to="/login">
                                            {" "}Login
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

export default RegisterPage;