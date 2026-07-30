import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="bg-dark text-light mt-5">

            <div className="container py-5">

                <div className="row gy-4">

                    {/* Brand */}

                    <div className="col-lg-4 col-md-6 col-12">

                        <h2 className="fw-bold text-warning">
                            🍔 FoodNest
                        </h2>

                        <p className="mt-3 text-white-50">

                            Delicious food delivered fresh to your doorstep.
                            We serve quality meals with fast delivery,
                            secure payment and excellent customer service.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-2 col-md-6 col-6">

                        <h5 className="fw-bold mb-3">
                            Quick Links
                        </h5>

                        <ul className="list-unstyled">

                            <li className="mb-2">
                                <Link
                                    to="/"
                                    className="text-decoration-none text-light"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/cart"
                                    className="text-decoration-none text-light"
                                >
                                    Cart
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/orders"
                                    className="text-decoration-none text-light"
                                >
                                    My Orders
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="col-lg-3 col-md-6 col-6">

                        <h5 className="fw-bold mb-3">
                            Contact
                        </h5>

                        <p className="mb-2">
                            📍 Pune, Maharashtra
                        </p>

                        <p className="mb-2">
                            📞 +91 9876543210
                        </p>

                        <p className="mb-0">
                            ✉️ foodnest@gmail.com
                        </p>

                    </div>

                    {/* Social */}

                    <div className="col-lg-3 col-md-6 col-12">

                        <h5 className="fw-bold mb-3">
                            Follow Us
                        </h5>

                        <div className="d-flex gap-3 fs-3">

                            <span style={{ cursor: "pointer" }}>📘</span>

                            <span style={{ cursor: "pointer" }}>📸</span>

                            <span style={{ cursor: "pointer" }}>🐦</span>

                            <span style={{ cursor: "pointer" }}>▶️</span>

                        </div>

                        <p className="text-white-50 mt-3">

                            Follow us for offers,
                            discounts and new food updates.

                        </p>

                    </div>

                </div>

                <hr className="border-secondary my-4" />

                <div className="text-center text-white-50">

                    © 2026 <span className="text-warning fw-bold">FoodNest</span>.
                    All Rights Reserved.

                </div>

            </div>

        </footer>

    );

}

export default Footer;