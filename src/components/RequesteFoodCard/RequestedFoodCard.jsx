import React from 'react';

const RequestedFoodCard = ({food}) => {
    console.log(food)
    const {name,id, photoUrl, requestedDate,pickUpLocation, expiredDate,additionNotes,donatorName,donatorEmail,donatorImg} = food;
    return (
        <>
            <div className="card flex flex-col gap-5 mb-3 mx-2  lg:flex-row items-center justify-center lg:mx-24 lg:px-12 pt-5 border card-side bg-base-100 shadow-xl">
   <div className='flex flex-col lg:flex-row items-center'>
   <figure><img className='w-[300px] rounded-l-full' src= {photoUrl} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
   
    <p>PickUpLocation:  { pickUpLocation ? pickUpLocation : "Dhaka"}</p>
    <p>Notes: {additionNotes}</p>
    <p>Date: { requestedDate}</p>
    <p>Exp.Date: {expiredDate}</p>
  
  </div>
   </div>
  <div className='pt-5 flex flex-col  space-y-2 mb-5 items-center'>
     <img className='w-24  rounded-full' src={donatorImg} alt="" />
    <h2 className="card-title">DonatorName:{donatorName}</h2>
   
    <p>DonatorEmail: { donatorEmail}</p>
    
  
  
  </div>
</div> 
        </>
    );
};

export default RequestedFoodCard;