import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import PopularFoods from "../components/PopularFoods";
import WhyChooseUs from "../components/WhyChooseUs";
import SearchFood from "../components/SearchFood";

function HomePage() {
    return (
        <>
            <Hero />
            <SearchFood />
            <Categories />
            <PopularFoods />
            <WhyChooseUs />
        </>
    );
}

export default HomePage; 