import React from "react";
import { Link } from "react-router-dom";

const FeaturedFoodCard = ({ food }) => {
  console.log(food);
  const {
    additionNotes,
    expiredDate,
    foodQuantity,
    foodStatus,
    donatorName,
    donatorImg,
    name,
    photoUrl,
    pickUpLocation,
    _id,
  } = food;
  return (
    <>
      <div className="card h-[800px]   bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
            <div className="flex flex-col">
            <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">
              Quantity: {foodQuantity}
            </div>
          </h2>
     
            </div>
          
          <p>Exp: {expiredDate} </p>
          <p>PickUp Location: {pickUpLocation} </p>
          <p>Status: {foodStatus} </p>
          <p>Notes: {additionNotes} </p>
            <div className="flex gap-5 my-5">
                  <img className="rounded-full w-12" src={donatorImg} alt="" />
                 <h2>DonatorName:{donatorName}</h2>
            </div>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">Products</div>
            <Link to={`/details/${_id}`} className="badge badge-outline">View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedFoodCard;
