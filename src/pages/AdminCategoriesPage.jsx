import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getAllCategories,
    deleteCategory
} from "../services/AdminService";
import LoadingSpinner from "../components/LoadingSpinner";
function AdminCategoriesPage() {

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadCategories = () => {

    setLoading(true);

    getAllCategories()
        .then((response) => {
            setCategories(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });

};

    useEffect(() => {
        loadCategories();
    }, []);

    const handleDelete = (id) => {

        if (window.confirm("Delete this category?")) {

            deleteCategory(id)
                .then(() => {
                    loadCategories();
                })
                .catch((error) => console.log(error));

        }

    };

    if (loading) {
    return <LoadingSpinner />;
}

    return (

        <div className="container py-4 py-md-5">

            <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">

                <div className="text-center text-md-start mb-3 mb-md-0">

                    <h2 className="fw-bold">
                        📂 Manage Categories
                    </h2>

                    <p className="text-muted mb-0">
                        Add, edit and delete food categories.
                    </p>

                </div>

                <Link
                    to="/admin/categories/add"
                    className="btn btn-success px-4 py-2"
                >
                    ➕ Add Category
                </Link>

            </div>

            <div className="table-responsive shadow rounded-4">

                <table className="table table-hover table-bordered align-middle mb-0">

                    <thead className="table-dark">

                        <tr>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th style={{ minWidth: "180px" }}>
                                Actions
                            </th>
                        </tr>

                    </thead>

                    <tbody>

                        {categories.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="3"
                                    className="text-center py-5"
                                >
                                    No Categories Found
                                </td>

                            </tr>

                        ) : (

                            categories.map((category) => (

                                <tr key={category.id}>

                                    <td>{category.id}</td>

                                    <td className="fw-semibold">
                                        {category.categoryName}
                                    </td>

                                    <td>

                                        <div className="d-flex flex-wrap gap-2">

                                            <Link
                                                to={`/admin/categories/edit/${category.id}`}
                                                className="btn btn-warning btn-sm"
                                            >
                                                ✏️ Edit
                                            </Link>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(category.id)}
                                            >
                                                🗑 Delete
                                            </button>

                                        </div>

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

export default AdminCategoriesPage;