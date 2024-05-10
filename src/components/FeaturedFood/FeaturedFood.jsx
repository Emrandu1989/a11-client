import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";


const FeaturedFood = () => {
       const [foods, setFoods] = useState([]);
       console.log(foods)
       useEffect(()=>{
            fetch(`${import.meta.env.VITE_API_URL}/foods`)
            .then(res=>res.json())
            .then(data=>{
                  setFoods(data)
            })
       },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {foods.map(food=> <FeaturedFoodCard
                 key={food._id}
                 food={food}
               ></FeaturedFoodCard>  )}  
        </div>
    );
};

export default FeaturedFood;