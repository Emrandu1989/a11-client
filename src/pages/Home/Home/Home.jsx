import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Banner/Banner";
import FeaturedFood from "../../../components/FeaturedFood/FeaturedFood";
import PopularFood from "../../../components/PopularFoodSection/PopularFood";
import Reservation from "../../../components/Reservation/Reservation";
import Faq from "../../../components/FaqSection/Faq";


const Home = () => {
    return (
        <>
           <Helmet >
                <title>Epicurean Arena | Home</title>
           </Helmet>
            <Banner/>
            <PopularFood/>
            <FeaturedFood/>
            <Faq/>
            <Reservation/>
           
        </>
    );
};

export default Home;