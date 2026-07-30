import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { placeOrder } from "../services/OrderService";
import { createRazorpayOrder } from "../services/PaymentService";
import { toast, ToastContainer } from "react-toastify";
function CheckoutPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const amount = location.state?.amount || 0;

    const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

    const handlePlaceOrder = () => {

        if (paymentMethod === "Cash On Delivery") {

            placeOrder()
                .then(() => {

                    toast.success("🎉 Order Placed Successfully!");

                    navigate("/orders");

                })
                .catch((error) => {

                    console.log(error);

                    toast.error("Failed to place order.");

                });

            return;
        }

        createRazorpayOrder(amount)
            .then((response) => {

                const razorpayOrder = response.data;

                const options = {

                    key: "rzp_test_TJIEJsQIUp17S7",

                    amount: razorpayOrder.amount,

                    currency: razorpayOrder.currency,

                    name: "FoodNest",

                    description: "Food Order Payment",

                    order_id: razorpayOrder.id,

                    handler: function () {

                        placeOrder()
                            .then(() => {

                                toast.success("✅ Payment Successful!");

                                navigate("/orders");

                            });

                    },

                    theme: {
                        color: "#ff5722"
                    }

                };

                const razorpay = new window.Razorpay(options);

                razorpay.open();

            })
            .catch((error) => {

                console.log(error);

                toast.error("Unable to start payment.");

            });

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-5">

                            <h2 className="text-center fw-bold mb-4">
                                💳 Checkout
                            </h2>

                            <div className="alert alert-success text-center rounded-4">

                                <h5>Total Payable</h5>

                                <h1 className="fw-bold">
                                    ₹{amount}
                                </h1>

                            </div>

                            <div className="card border-0 bg-light rounded-4 p-4 mb-4">

                                <h5 className="mb-3">
                                    🚚 Delivery Details
                                </h5>

                                <p className="mb-2">
                                    Estimated Delivery
                                </p>

                                <strong>30-45 Minutes</strong>

                                <hr />

                                <p className="mb-0">

                                    Your delicious food will be freshly prepared and delivered safely to your doorstep.

                                </p>

                            </div>

                            <div className="mb-4">

                                <label className="form-label fw-bold">
                                    Select Payment Method
                                </label>

                                <select
                                    className="form-select form-select-lg"
                                    value={paymentMethod}
                                    onChange={(e) =>
                                        setPaymentMethod(e.target.value)
                                    }
                                >

                                    <option>
                                        Cash On Delivery
                                    </option>

                                    <option>
                                        Online Payment
                                    </option>

                                </select>

                            </div>

                            <button
                                className="btn btn-success btn-lg w-100"
                                onClick={handlePlaceOrder}
                            >

                                {paymentMethod === "Online Payment"

                                    ? "💳 Pay Now"

                                    : "🛒 Place Order"}

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CheckoutPage;