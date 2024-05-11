import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Banner/Banner";
import FeaturedFood from "../../../components/FeaturedFood/FeaturedFood";


const Home = () => {
    return (
        <>
           <Helmet >
                <title>Epicurean Arena | Home</title>
           </Helmet>
            <Banner/>
            <FeaturedFood/>
           
        </>
    );
};

export default Home;