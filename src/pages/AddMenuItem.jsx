import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMenuItem } from "../services/AdminService";
import { getAllCategories } from "../services/CategoryService";
import { toast, ToastContainer } from "react-toastify";
function AddMenuItem() {

    const navigate = useNavigate();

    const [menuItem, setMenuItem] = useState({
        foodName: "",
        description: "",
        price: "",
        image: "",
        category: {
            id: ""
        }
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        getAllCategories()
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => console.log(error));

    }, []);

    const handleChange = (e) => {

        if (e.target.name === "categoryId") {

            setMenuItem({
                ...menuItem,
                category: {
                    id: e.target.value
                }
            });

        } else {

            setMenuItem({
                ...menuItem,
                [e.target.name]: e.target.value
            });

        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        addMenuItem(menuItem)
            .then(() => {

                alert("✅ Menu Item Added Successfully");

                navigate("/admin/menu");

            })
            .catch((error) => {

                console.log(error);

                alert("Failed to add menu item");

            });

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8 col-md-10">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-header bg-success text-white text-center rounded-top-4 py-3">

                            <h3 className="mb-0">
                                🍔 Add New Menu Item
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
                                        placeholder="Enter food name"
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-bold">
                                        Description
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        name="description"
                                        value={menuItem.description}
                                        onChange={handleChange}
                                        placeholder="Enter food description"
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
                                            placeholder="Enter price"
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label fw-bold">
                                            Category
                                        </label>

                                        <select
                                            className="form-select"
                                            name="categoryId"
                                            onChange={handleChange}
                                            required
                                        >

                                            <option value="">
                                                Select Category
                                            </option>

                                            {categories.map((category) => (

                                                <option
                                                    key={category.id}
                                                    value={category.id}
                                                >
                                                    {category.categoryName}
                                                </option>

                                            ))}

                                        </select>

                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label className="form-label fw-bold">
                                        Image Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="image"
                                        value={menuItem.image}
                                        onChange={handleChange}
                                        placeholder="Example: margherita-pizza.jpg"
                                        required
                                    />

                                    <small className="text-muted">

                                        Enter the image filename from your assets/foods folder.

                                    </small>

                                </div>

                                <div className="d-grid">

                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg"
                                    >
                                        ➕ Add Menu Item
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

export default AddMenuItem;