import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getMenuItemsByCategory } from "../services/MenuItemService";
import { addToCart } from "../services/CartService";
import { foodImages } from "../assets/foodImages";
import "./CategoryPage.css";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

function CategoryPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {

        setLoading(true);

        getMenuItemsByCategory(id)
            .then((response) => {
                setMenuItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    const handleAddToCart = (menuItemId) => {

        const token = localStorage.getItem("token");

        if (!token) {
            toast.info("Please login first.");
            navigate("/login");
            return;
        }

        addToCart(menuItemId)
            .then(() => {
                toast.success("Item added to cart!");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to add item to cart.");
            });

    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (

        <div className="category-page container py-5">

            <h1 className="category-title text-center mb-4">
                Our Menu
            </h1>

            <p className="text-center text-muted mb-5">
                {menuItems.length} Items Available
            </p>

            <div className="food-grid">

                {menuItems.length > 0 ? (

                    menuItems.map((item) => (

                        <Link
                            key={item.id}
                            to={`/food/${item.id}`}
                            className="text-decoration-none text-dark"
                        >

                            <div className="food-card">

                                <img
                                    src={foodImages[item.image]}
                                    alt={item.foodName}
                                />

                                <div className="food-info">

                                    <h2>{item.foodName}</h2>

                                    <p>{item.description}</p>

                                    <div className="price">
                                        ₹{item.price}
                                    </div>

                                    <button
                                        className="add-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleAddToCart(item.id);
                                        }}
                                    >
                                        Add to Cart
                                    </button>

                                </div>

                            </div>

                        </Link>

                    ))

                ) : (

                    <div className="text-center w-100">
                        <h4>No food items available.</h4>
                    </div>

                )}

            </div>

        </div>

    );
}

export default CategoryPage;