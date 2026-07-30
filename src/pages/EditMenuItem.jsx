import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getMenuItemById,
    updateMenuItem
} from "../services/AdminService";
import { toast, ToastContainer } from "react-toastify";
function EditMenuItem() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [menuItem, setMenuItem] = useState({
        foodName: "",
        description: "",
        price: "",
        image: ""
    });

    useEffect(() => {

        getMenuItemById(id)
            .then((response) => {
                setMenuItem(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [id]);

    const handleChange = (e) => {

        setMenuItem({
            ...menuItem,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        updateMenuItem(id, menuItem)
            .then(() => {

                toast.success("✅ Menu Item Updated Successfully");

                navigate("/admin/menu");

            })
            .catch((error) => {

                console.log(error);

                toast.error("Failed to update menu item");

            });

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8 col-md-10">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-header bg-primary text-white text-center rounded-top-4 py-3">

                            <h3 className="mb-0">
                                ✏️ Edit Menu Item
                            </h3>

                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label fw-bold">
                                        Food Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="foodName"
                                        value={menuItem.foodName}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-bold">
                                        Description
                                    </label>

                                    <textarea
                                        rows="4"
                                        className="form-control"
                                        name="description"
                                        value={menuItem.description}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label fw-bold">
                                            Price (₹)
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            name="price"
                                            value={menuItem.price}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label fw-bold">
                                            Image Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="image"
                                            value={menuItem.image}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

                                <small className="text-muted d-block mb-4">
                                    Enter the image filename from your assets/foods folder.
                                </small>

                                <div className="d-grid">

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                    >
                                        💾 Update Menu Item
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditMenuItem;