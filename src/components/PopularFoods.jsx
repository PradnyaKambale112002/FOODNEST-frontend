import "./PopularFoods.css";

import pizza from "../assets/foods/margherita-pizza.jpg";
import burger from "../assets/foods/chicken-burger.jpg";
import biryani from "../assets/foods/chicken-biryani.jpg";
import coffee from "../assets/foods/hazelnut-cold-coffee.jpg";
import brownie from "../assets/foods/sizzling-brownie.jpg";
import sandwich from "../assets/foods/veg-grilled-sandwich.jpg";

const foods = [
  {
    name: "Margherita Pizza",
    image: pizza,
    price: "₹449",
    rating: "4.8",
    time: "25 min",
    offer: "20% OFF"
  },
  {
    name: "Chicken Burger",
    image: burger,
    price: "₹299",
    rating: "4.7",
    time: "20 min",
    offer: "15% OFF"
  },
  {
    name: "Chicken Biryani",
    image: biryani,
    price: "₹299",
    rating: "4.9",
    time: "30 min",
    offer: "25% OFF"
  },
  {
    name: "Hazelnut Cold Coffee",
    image: coffee,
    price: "₹229",
    rating: "4.8",
    time: "15 min",
    offer: "10% OFF"
  },
  {
    name: "Sizzling Brownie",
    image: brownie,
    price: "₹299",
    rating: "4.9",
    time: "18 min",
    offer: "30% OFF"
  },
  {
    name: "Grilled Sandwich",
    image: sandwich,
    price: "₹169",
    rating: "4.6",
    time: "15 min",
    offer: "12% OFF"
  }
];

function PopularFoods() {
  return (
    <section className="popular-foods">

      <div className="container">

        <h2>Popular Foods</h2>

        <div className="food-grid">

          {foods.map((food, index) => (

            <div className="food-card" key={index}>

              <div className="image-box">

                <img src={food.image} alt={food.name} />

                <span className="offer">
                  {food.offer}
                </span>

                <span className="favorite">
                  ❤️
                </span>

              </div>

              <div className="food-content">

                <h3>{food.name}</h3>

                <div className="food-meta">

                  <span>⭐ {food.rating}</span>

                  <span>⏱ {food.time}</span>

                </div>

                <h4>{food.price}</h4>

                <button>
                  🛒 Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularFoods;