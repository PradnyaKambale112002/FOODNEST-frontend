import { useEffect, useState } from "react";
import { getMyOrders } from "../services/OrderService";
import LoadingSpinner from "../components/LoadingSpinner";

function MyOrdersPage() {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

    getMyOrders()
        .then((response) => {
            setOrders(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });

}, []);

    const getBadge = (status) => {

        switch (status) {

            case "PLACED":
                return "bg-secondary";

            case "PREPARING":
                return "bg-warning text-dark";

            case "OUT FOR DELIVERY":
                return "bg-primary";

            case "DELIVERED":
                return "bg-success";

            default:
                return "bg-dark";
        }
    };

    if (loading) {
    return <LoadingSpinner />;
}

    return (

        <div className="container py-5">

            <h2 className="text-center fw-bold mb-5">
                📦 My Orders
            </h2>

            {orders.length === 0 ? (

                <div className="text-center py-5">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                        alt="No Orders"
                        width="150"
                        className="mb-4"
                    />

                    <h3>No Orders Yet</h3>

                    <p className="text-muted">
                        Your placed orders will appear here.
                    </p>

                </div>

            ) : (

                <div className="row g-4">

                    {orders.map((order) => (

                        <div
                            className="col-lg-6"
                            key={order.id}
                        >

                            <div className="card border-0 shadow rounded-4 h-100">

                                <div className="card-body p-4">

                                    <div className="d-flex justify-content-between align-items-center">

                                        <h4>
                                            Order #{order.id}
                                        </h4>

                                        <span className={`badge ${getBadge(order.status)}`}>

                                            {order.status}

                                        </span>

                                    </div>

                                    <hr />

                                    <p className="mb-2">

                                        <strong>Total Amount</strong>

                                    </p>

                                    <h3 className="text-success mb-4">

                                        ₹{order.totalAmount}

                                    </h3>

                                    <div className="alert alert-light border">

                                        {order.status === "PLACED" &&
                                            "🛒 Your order has been placed successfully."}

                                        {order.status === "PREPARING" &&
                                            "👨‍🍳 Your food is being prepared."}

                                        {order.status === "OUT FOR DELIVERY" &&
                                            "🛵 Your order is on the way."}

                                        {order.status === "DELIVERED" &&
                                            "✅ Your order has been delivered."}

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );
}

export default MyOrdersPage;