import { useLoaderData } from "react-router-dom";
import FeaturedFoodCard from "../../components/FeaturedFood/FeaturedFoodCard";
import { useState } from "react";


const AvailableFoods = () => {
      const allFoods = useLoaderData();
      console.log(allFoods)
      const [availableFoods, setAvailableFoods] = useState(allFoods)
    return (
        <>   
                    <h2 className="text-3xl font-bold text-center my-9">Available Foods </h2>           
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                     {
                        availableFoods.filter(f=>f.
                            foodStatus==='available').map(food=> <FeaturedFoodCard
                        key={food._id}
                        food={food}
                        setAvailableFoods={setAvailableFoods}
                        ></FeaturedFoodCard>  )
                     }    
            </div>   
        </>
    );
};

export default AvailableFoods;