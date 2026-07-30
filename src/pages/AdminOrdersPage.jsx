import { useEffect, useState } from "react";
import { getAllOrders, updateOrderStatus } from "../services/AdminService";
import LoadingSpinner from "../components/LoadingSpinner";
function AdminOrdersPage() {

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const loadOrders = () => {

    setLoading(true);

    getAllOrders()
        .then((response) => {
            setOrders(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });

};

    useEffect(() => {
        loadOrders();
    }, []);

    const handleStatusChange = (id, status) => {
        updateOrderStatus(id, status)
            .then(() => loadOrders())
            .catch((error) => console.log(error));
    };

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

    const filteredOrders = orders.filter((order) =>
        order.user?.name?.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
    return <LoadingSpinner />;
}

    return (

        <div className="container py-5">

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">

                <h2 className="fw-bold mb-3 mb-md-0">
                    📦 Manage Orders
                </h2>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Customer..."
                    style={{ maxWidth: "320px" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="table-responsive shadow rounded-4">

                <table className="table table-hover align-middle mb-0">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>

                            <th>Customer</th>

                            <th>Total</th>

                            <th>Status</th>

                            <th width="220">
                                Update Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredOrders.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="text-center py-5"
                                >
                                    No Orders Found
                                </td>

                            </tr>

                        ) : (

                            filteredOrders.map((order) => (

                                <tr key={order.id}>

                                    <td>
                                        #{order.id}
                                    </td>

                                    <td>

                                        <strong>
                                            {order.user?.name}
                                        </strong>

                                    </td>

                                    <td className="fw-bold text-success">
                                        ₹{order.totalAmount}
                                    </td>

                                    <td>

                                        <span className={`badge ${getBadge(order.status)}`}>
                                            {order.status}
                                        </span>

                                    </td>

                                    <td>

                                        <select
                                            className="form-select"
                                            value={order.status}
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    order.id,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            <option>
                                                PLACED
                                            </option>

                                            <option>
                                                PREPARING
                                            </option>

                                            <option>
                                                OUT FOR DELIVERY
                                            </option>

                                            <option>
                                                DELIVERED
                                            </option>

                                        </select>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default AdminOrdersPage;