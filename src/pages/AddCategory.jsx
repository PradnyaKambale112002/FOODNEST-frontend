import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../services/AdminService";
import { toast, ToastContainer } from "react-toastify";
function AddCategory() {

    const navigate = useNavigate();

    const [category, setCategory] = useState({
        categoryName: ""
    });

    const handleChange = (e) => {
        setCategory({
            ...category,
            categoryName: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        addCategory(category)
            .then(() => {

                toast.success("Category Added Successfully");

                navigate("/admin/categories");

            })
            .catch((error) => {

                console.log(error);

                toast.error("Failed to add category");

            });

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-6 col-md-8 col-sm-10">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">
                                ➕ Add Category
                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Category Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter category name"
                                        value={category.categoryName}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success w-100"
                                >
                                    Save Category
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AddCategory;