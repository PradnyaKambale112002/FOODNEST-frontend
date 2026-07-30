import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div
            className="container d-flex flex-column justify-content-center align-items-center text-center"
            style={{ minHeight: "80vh" }}
        >
            <h1
                className="fw-bold text-danger"
                style={{ fontSize: "6rem" }}
            >
                404
            </h1>

            <h2 className="fw-bold mt-3">
                Oops! Page Not Found
            </h2>

            <p className="text-muted mb-4">
                The page you're looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="btn btn-danger btn-lg"
            >
                🏠 Back to Home
            </Link>
        </div>
    );
}

export default NotFoundPage;