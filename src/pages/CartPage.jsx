import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { foodImages } from "../assets/foodImages";
import {
    getMyCart,
    increaseQuantity,
    decreaseQuantity,
    removeCartItem
} from "../services/CartService";
import LoadingSpinner from "../components/LoadingSpinner";

function CartPage() {

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadCart = () => {

    setLoading(true);

    getMyCart()
        .then((response) => {
            setCartItems(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });

};
    useEffect(() => {
        loadCart();
    }, []);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.menuItem.price * item.quantity,
        0
    );

    const deliveryFee = subtotal > 0 ? 40 : 0;
    const tax = subtotal > 0 ? Math.round(subtotal * 0.05) : 0;
    const grandTotal = subtotal + deliveryFee + tax;

    if (loading) {
    return <LoadingSpinner />;
}

    return (
        <div className="container py-5">

            <h2 className="fw-bold text-center mb-5">
                🛒 My Cart
            </h2>

            {cartItems.length === 0 ? (

                <div className="text-center py-5">

                    <h3>Your cart is empty</h3>

                    <p className="text-muted">
                        Add some delicious food to continue.
                    </p>

                </div>

            ) : (

                <div className="row">

                    <div className="col-lg-8">

                        {cartItems.map((cart) => (

                            <div
                                key={cart.id}
                                className="card border-0 shadow-sm rounded-4 mb-4"
                            >

                                <div className="row g-0">

                                    <div className="col-md-4">

                                        <img
                                            src={foodImages[cart.menuItem.image]}
                                            alt={cart.menuItem.foodName}
                                            className="img-fluid h-100 w-100 rounded-start-4"
                                            style={{
                                                objectFit: "cover",
                                                minHeight: "220px"
                                            }}
                                        />

                                    </div>

                                    <div className="col-md-8">

                                        <div className="card-body p-4">

                                            <h4>
                                                {cart.menuItem.foodName}
                                            </h4>

                                            <p className="text-muted">
                                                {cart.menuItem.description}
                                            </p>

                                            <h5 className="text-danger">
                                                ₹{cart.menuItem.price}
                                            </h5>

                                            <div className="d-flex align-items-center my-3">

                                                <button
                                                    className="btn btn-outline-danger"
                                                    onClick={() =>
                                                        decreaseQuantity(cart.id).then(loadCart)
                                                    }
                                                >
                                                    −
                                                </button>

                                                <span className="mx-3 fw-bold fs-5">
                                                    {cart.quantity}
                                                </span>

                                                <button
                                                    className="btn btn-outline-success"
                                                    onClick={() =>
                                                        increaseQuantity(cart.id).then(loadCart)
                                                    }
                                                >
                                                    +
                                                </button>

                                            </div>

                                            <h5 className="text-success">

                                                Subtotal :

                                                ₹{cart.menuItem.price * cart.quantity}

                                            </h5>

                                            <button
                                                className="btn btn-outline-danger mt-3"
                                                onClick={() =>
                                                    removeCartItem(cart.id).then(loadCart)
                                                }
                                            >
                                                🗑 Remove
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="col-lg-4">

                        <div
                            className="card shadow border-0 rounded-4 p-4"
                            style={{
                                position: "sticky",
                                top: "100px"
                            }}
                        >

                            <h3 className="mb-4">
                                Order Summary
                            </h3>

                            <div className="d-flex justify-content-between mb-2">

                                <span>Subtotal</span>

                                <strong>₹{subtotal}</strong>

                            </div>

                            <div className="d-flex justify-content-between mb-2">

                                <span>Delivery Fee</span>

                                <strong>₹{deliveryFee}</strong>

                            </div>

                            <div className="d-flex justify-content-between mb-3">

                                <span>GST</span>

                                <strong>₹{tax}</strong>

                            </div>

                            <hr />

                            <div className="d-flex justify-content-between">

                                <h5>Total</h5>

                                <h5 className="text-success">
                                    ₹{grandTotal}
                                </h5>

                            </div>

                            <button
                                className="btn btn-success btn-lg mt-4 w-100"
                                onClick={() =>
                                    navigate("/checkout", {
                                        state: {
                                            amount: grandTotal
                                        }
                                    })
                                }
                            >
                                Proceed to Checkout
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default CartPage;