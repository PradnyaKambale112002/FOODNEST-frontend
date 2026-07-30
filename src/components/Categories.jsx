
import "./Categories.css";

import dessert from "../assets/categories/desserts.jpg";
import pizza from "../assets/categories/pizza.jpg";
import burger from "../assets/categories/burger.jpg";
import chinese from "../assets/categories/chinese.jpg";
import biryani from "../assets/categories/biryani.jpg";
import coldcoffee from "../assets/categories/coldcoffee.jpg";
import sandwich from "../assets/categories/sandwich.jpg";
import milkshake from "../assets/categories/milkshake.jpg";
import rolls from "../assets/categories/rolls.jpg";
import starters from "../assets/categories/starters.jpg";
import pasta from "../assets/categories/pasta.jpg";
import momos from "../assets/categories/momos.jpg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../services/CategoryService";

const categoryImages = {
    Dessert: dessert,
    Pizza: pizza,
    Burger: burger,
    Chinese: chinese,
    Biryani: biryani,
    "Cold Coffee": coldcoffee,
    Sandwich: sandwich,
    Milkshake: milkshake,
    Rolls: rolls,
    Starters: starters,
    Pasta: pasta,
    Momos: momos
};

function Categories() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getAllCategories()
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-danger"></div>
            </div>
        );
    }

    return (

        <section className="container py-5">

            <div className="text-center mb-5">

                <h2 className="fw-bold">
                    🍽️ Explore Categories
                </h2>

                <p className="text-muted">
                    Choose your favourite food category
                </p>

            </div>

            <div className="row g-4">

                {categories.map((category) => (

                    <div
                        className="col-6 col-md-4 col-lg-3"
                        key={category.id}
                    >

                        <Link
                            to={`/category/${category.id}`}
                            className="text-decoration-none text-dark"
                        >

                            <div className="card h-100 shadow-sm border-0 category-card">

                                <img
                                    src={
                                        categoryImages[category.categoryName] ||
                                        dessert
                                    }
                                    alt={category.categoryName}
                                    className="card-img-top"
                                    style={{
                                        height: "180px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="card-body text-center">

                                    <h5 className="fw-bold mb-0">
                                        {category.categoryName}
                                    </h5>

                                </div>

                            </div>

                        </Link>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Categories;