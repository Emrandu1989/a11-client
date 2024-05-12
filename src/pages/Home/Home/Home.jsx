import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Banner/Banner";
import FeaturedFood from "../../../components/FeaturedFood/FeaturedFood";
import PopularFood from "../../../components/PopularFoodSection/PopularFood";


const Home = () => {
    return (
        <>
           <Helmet >
                <title>Epicurean Arena | Home</title>
           </Helmet>
            <Banner/>
            <FeaturedFood/>
            <PopularFood/>
           
        </>
    );
};

export default Home;