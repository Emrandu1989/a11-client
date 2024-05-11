import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const FoodDetails = () => {
    const {user} = useContext(AuthContext)
      const foodDetails = useLoaderData();
      console.log(foodDetails)
   const {photoUrl,name, donatorName  ,foodQuantity,expiredDate,pickUpLocation} = foodDetails;
 
    return (
        <>
             <div className="text-center">
             <div className="my-5">
                   <h2 className="text-3xl font-bold">Donar Name: {donatorName} </h2>
                    <h4 className="text-lg mt-5 font-bold">PickUp Location: {pickUpLocation}</h4>
              </div>

              <div className="flex justify-center items-center my-5">
              <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photoUrl} alt="Shoes" className="rounded-xl h-[400px] w-[350px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Quantity: {foodQuantity} </p>
    <p>Exp: {expiredDate} </p>
    <div className="card-actions">
      <button className="btn btn-primary">Request</button>
    </div>
  </div>
</div>         
              </div>
             </div>
        </>
    );
};

export default FoodDetails;