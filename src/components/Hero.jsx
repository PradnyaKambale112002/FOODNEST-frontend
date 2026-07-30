import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="py-5"
            style={{
                background: "linear-gradient(135deg,#fff5f0,#ffe8d6)"
            }}
        >
            <div className="container">

                <div className="row align-items-center gy-5">

                    <div className="col-lg-6 text-center text-lg-start">

                        <span className="badge bg-danger fs-6 px-3 py-2 mb-3">
                            🔥 Fast Delivery in 30 Minutes
                        </span>

                        <h1
                            className="fw-bold mb-4"
                            style={{
                                fontSize: "clamp(2.2rem,5vw,4rem)",
                                lineHeight: "1.2"
                            }}
                        >
                            Delicious Food
                            <br />
                            Delivered
                            <span className="text-danger"> To Your Door</span>
                        </h1>

                        <p
                            className="text-muted mb-4"
                            style={{
                                fontSize: "1.1rem"
                            }}
                        >
                            Order your favourite pizza, burgers,
                            biryani, desserts and more from FoodNest.
                            Fresh ingredients, quick delivery and
                            amazing taste.
                        </p>

                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">

                            <Link
                                to="/"
                                className="btn btn-danger btn-lg px-4 rounded-pill"
                            >
                                🍔 Order Now
                            </Link>

                            <button
                                className="btn btn-outline-dark btn-lg px-4 rounded-pill"
                            >
                                📖 View Menu
                            </button>

                        </div>

                        <div className="row mt-5 text-center">

                            <div className="col-4">
                                <h3 className="fw-bold text-danger">500+</h3>
                                <small>Food Items</small>
                            </div>

                            <div className="col-4">
                                <h3 className="fw-bold text-danger">10K+</h3>
                                <small>Customers</small>
                            </div>

                            <div className="col-4">
                                <h3 className="fw-bold text-danger">4.9⭐</h3>
                                <small>Rating</small>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img
                            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900"
                            alt="Food"
                            className="img-fluid rounded-5 shadow-lg"
                            style={{
                                maxHeight: "500px",
                                width: "100%",
                                objectFit: "cover"
                            }}
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;