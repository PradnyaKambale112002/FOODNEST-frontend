import { useEffect, useState } from "react";
import {
    getAllMenuItems,
    deleteMenuItem
} from "../services/AdminService";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
function AdminMenuPage() {

    const [menuItems, setMenuItems] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadMenuItems();
    }, []);

    const loadMenuItems = () => {

    setLoading(true);

    getAllMenuItems()
        .then((response) => {
            setMenuItems(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });

};

    const handleDelete = (id) => {

        if (window.confirm("Delete this menu item?")) {

            deleteMenuItem(id)
                .then(() => {
                    alert("Menu Item Deleted");
                    loadMenuItems();
                })
                .catch((error) => {
                    console.log(error);
                });

        }

    };

    const filteredMenu = menuItems.filter((item) =>
        item.foodName.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
    return <LoadingSpinner />;
}

    return (

        <div className="container py-5">

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">

                <h2 className="fw-bold mb-3 mb-md-0">
                    🍔 Manage Menu
                </h2>

                <div className="d-flex gap-2 w-100 w-md-auto">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Food..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Link
                        to="/admin/menu/add"
                        className="btn btn-success"
                    >
                        ➕ Add
                    </Link>

                </div>

            </div>

            <div className="table-responsive shadow rounded-4">

                <table className="table table-hover align-middle mb-0">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>

                            <th>Food</th>

                            <th>Price</th>

                            <th>Category</th>

                            <th width="180">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredMenu.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="text-center py-5"
                                >
                                    No Menu Items Found
                                </td>

                            </tr>

                        ) : (

                            filteredMenu.map((item) => (

                                <tr key={item.id}>

                                    <td>
                                        #{item.id}
                                    </td>

                                    <td>

                                        <strong>
                                            {item.foodName}
                                        </strong>

                                        <br />

                                        <small className="text-muted">
                                            {item.description}
                                        </small>

                                    </td>

                                    <td className="fw-bold text-success">
                                        ₹{item.price}
                                    </td>

                                    <td>

                                        <span className="badge bg-info text-dark">
                                            {item.category?.categoryName}
                                        </span>

                                    </td>

                                    <td>

                                        <Link
                                            to={`/admin/menu/edit/${item.id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            ✏ Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            🗑 Delete
                                        </button>

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

export default AdminMenuPage;