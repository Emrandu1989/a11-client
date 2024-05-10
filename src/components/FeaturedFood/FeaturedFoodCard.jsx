import React from "react";

const FeaturedFoodCard = ({ food }) => {
  console.log(food);
  const {
    additionNotes,
    expiredDate,
    foodQuantity,
    foodStatus,
    name,
    photoUrl,
    pickUpLocation,
    _id,
  } = food;
  return (
    <>
      <div className="card  h-96 bg-base-100 shadow-xl">
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
          <div className="card-actions justify-center">
            <div className="badge badge-outline">Products</div>
            <button className="badge badge-outline">Show Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedFoodCard;
