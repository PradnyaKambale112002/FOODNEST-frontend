import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../services/AdminService";
import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";
function AdminUsersPage() {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {

    setLoading(true);

    getAllUsers()
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });

};

    const handleDelete = (id) => {

        if (window.confirm("Delete this user?")) {

            deleteUser(id)
                .then(() => {

                    toast.success("User Deleted Successfully");

                    loadUsers();

                })
                .catch((error) => {
                    console.log(error);
                });

        }

    };

    if (loading) {
    return <LoadingSpinner />;
}

    return (

        <div className="container py-4 py-md-5">

            <div className="text-center mb-4">

                <h2 className="fw-bold">
                    👥 Manage Users
                </h2>

                <p className="text-muted">
                    View and manage registered users.
                </p>

            </div>

            <div className="table-responsive shadow rounded-4">

                <table className="table table-hover table-bordered align-middle mb-0">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th style={{ minWidth: "120px" }}>
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {users.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center py-5"
                                >
                                    No Users Found
                                </td>

                            </tr>

                        ) : (

                            users.map((user) => (

                                <tr key={user.id}>

                                    <td>{user.id}</td>

                                    <td className="fw-semibold">
                                        {user.name}
                                    </td>

                                    <td>{user.email}</td>

                                    <td>{user.phone}</td>

                                    <td>

                                        <span
                                            className={`badge px-3 py-2 ${
                                                user.role === "ADMIN"
                                                    ? "bg-danger"
                                                    : "bg-success"
                                            }`}
                                        >
                                            {user.role}
                                        </span>

                                    </td>

                                    <td>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(user.id)}
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

export default AdminUsersPage;