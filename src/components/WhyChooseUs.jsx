import "./WhyChooseUs.css";

function WhyChooseUs() {

    const features = [
        {
            icon: "🚚",
            title: "Fast Delivery",
            description: "Fresh food delivered quickly to your doorstep."
        },
        {
            icon: "🍽️",
            title: "Quality Food",
            description: "Prepared using fresh ingredients with great taste."
        },
        {
            icon: "💳",
            title: "Secure Payment",
            description: "Safe and secure online payment options."
        },
        {
            icon: "⭐",
            title: "Top Rated",
            description: "Thousands of happy customers trust FoodNest."
        }
    ];

    return (

        <section className="why-section container py-5">

            <h2 className="text-center fw-bold mb-5">
                Why Choose FoodNest?
            </h2>

            <div className="row g-4">

                {features.map((feature, index) => (

                    <div
                        className="col-lg-3 col-md-6 col-sm-6 col-12"
                        key={index}
                    >

                        <div className="card why-card h-100 border-0 text-center p-4">

                            <div className="why-icon">
                                {feature.icon}
                            </div>

                            <h4 className="fw-bold">
                                {feature.title}
                            </h4>

                            <p className="text-muted">
                                {feature.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default WhyChooseUs;