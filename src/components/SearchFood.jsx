import { useState } from "react";
import { Link } from "react-router-dom";
import { searchMenuItems } from "../services/MenuItemService";
import { foodImages } from "../assets/foodImages";
import "./SearchFood.css";

function SearchFood() {

    const [keyword, setKeyword] = useState("");
    const [foods, setFoods] = useState([]);

    const handleSearch = (value) => {

        setKeyword(value);

        if (value.trim() === "") {
            setFoods([]);
            return;
        }

        searchMenuItems(value)
            .then((response) => {
                setFoods(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (

        <section className="search-section">

            <div className="container">

                <h2 className="search-title">
                    🔍 Search Your Favorite Food
                </h2>

                <div className="search-box">

                    <span className="search-icon">
                        🔍
                    </span>

                    <input
                        type="text"
                        placeholder="Search Pizza, Burger, Biryani..."
                        value={keyword}
                        onChange={(e) => handleSearch(e.target.value)}
                    />

                </div>

                {foods.length > 0 && (

                    <div className="search-results">

                        <div className="row">

                            {foods.map((food) => (

                                <div
                                    className="col-lg-3 col-md-4 col-sm-6 mb-4"
                                    key={food.id}
                                >

                                    <Link
                                        to={`/food/${food.id}`}
                                        className="text-decoration-none text-dark"
                                    >

                                        <div className="card h-100 shadow-sm">

                                            <img
                                                src={foodImages[food.image]}
                                                alt={food.foodName}
                                                className="card-img-top"
                                                style={{
                                                    height: "180px",
                                                    objectFit: "cover"
                                                }}
                                            />

                                            <div className="card-body text-center">

                                                <h5>{food.foodName}</h5>

                                                <h6 className="text-danger">
                                                    ₹{food.price}
                                                </h6>

                                            </div>

                                        </div>

                                    </Link>

                                </div>

                            ))}

                        </div>

                    </div>

                )}

            </div>

        </section>

    );

}

export default SearchFood;