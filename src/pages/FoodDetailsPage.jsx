import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMenuItemById } from "../services/MenuItemService";
import { addToCart } from "../services/CartService";
import { foodImages } from "../assets/foodImages";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
import "./FoodDetailsPage.css";

function FoodDetailsPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [food, setFood] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getMenuItemById(id)
            .then((response) => {
                setFood(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    const handleAddToCart = () => {

        const token = localStorage.getItem("token");

        if (!token) {
            toast.info("Please login first.");
            navigate("/login");
            return;
        }

        addToCart(food.id)
            .then(() => {
                toast.success("Item added to cart.");
            })
            .catch(() => {
                toast.error("Failed to add item.");
            });

    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (

        <div className="container py-5">

            <div className="row align-items-center g-5">

                <div className="col-lg-6">

                    <img
                        src={foodImages[food.image]}
                        alt={food.foodName}
                        className="img-fluid rounded shadow"
                    />

                </div>

                <div className="col-lg-6">

                    <h1 className="fw-bold">
                        {food.foodName}
                    </h1>

                    <p className="text-muted mt-3">
                        {food.description}
                    </p>

                    <h3 className="text-danger mt-4">
                        ₹{food.price}
                    </h3>

                    <h5 className="mt-3">
                        Category :
                        <span className="text-success">
                            {" "}{food.category?.categoryName}
                        </span>
                    </h5>

                    <h5 className="mt-3">
                        Stock :
                        <span className="badge bg-success ms-2">
                            Available
                        </span>
                    </h5>

                    <button
                        className="btn btn-danger btn-lg mt-4"
                        onClick={handleAddToCart}
                    >
                        🛒 Add To Cart
                    </button>

                </div>

            </div>

        </div>

    );
}

export default FoodDetailsPage;