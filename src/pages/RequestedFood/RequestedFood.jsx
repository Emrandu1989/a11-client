import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import RequestedFoodCard from "../../components/RequesteFoodCard/RequestedFoodCard";


const RequestedFood = () => {
    const {user} = useContext(AuthContext)
    const [requestedFoods, setRequestedFood] = useState([]);

    useEffect(() => {
      getData();
    }, [user]);
  
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/requestedFoods/${user?.email}`
      );
      setRequestedFood(data);
    };
    console.log(requestedFoods);
    return (
        <>
            

             <div>
                  {
                    requestedFoods.map(food=> <RequestedFoodCard
                    key={food._id}
                    food={food}
                    ></RequestedFoodCard> )
                  }
             </div>

        </>
    );
};

export default RequestedFood;