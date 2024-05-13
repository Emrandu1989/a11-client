import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const FeaturedFood = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/foods`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  const handleDone = () => {
    console.log("Typewriter effect finished");
  };

  const handleType = (text) => {
    console.log(`Typing: ${text}`);
  };
  return (
    <>
    
                 <h1 className="text-center uppercase font-semibold text-orange-400 italic  text-3xl my-9">Please Have a Look to 
                 <span>
                 <Typewriter
              words={[
                " Our Featured Foods.",
                "Delicious Food",
                "Tempting Food",
                "Satisfying Food",
                "Mouth-watering Food",
                "Irresistible Food",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
                 </span>
                 </h1>
      <div className="flex justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
          ))}
        </div>
      </div>
      <div className="text-center my-5">
        <Link to="/availableFoods" className="btn btn-primary">
          Show All
        </Link>
      </div>
    </>
  );
};

export default FeaturedFood;
