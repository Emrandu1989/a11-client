import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdatePage = () => {
    const {user} = useContext(AuthContext)
    const food = useLoaderData();
    const navigate = useNavigate()
    console.log(food)
      const {name, photoUrl, foodQuantity, pickUpLocation, expiredDate,additionNotes,_id} = food;

      const updateFoodInfo= async(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const foodQuantity = form.foodQuantity.value;
        const pickUpLocation = form.pickUpLocation.value;
        const expiredDate = form.expiredDate.value;
        const foodStatus = form.foodStatus.value;
        const additionNotes = form.additionNotes.value;
    
        const foodDetails = {name, photoUrl, foodQuantity, pickUpLocation, expiredDate,foodStatus,additionNotes}
        console.log(foodDetails)

        try{
          const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/food/${_id}`, foodDetails);
          console.log(data)
          if(data.modifiedCount > 0){
             Swal.fire({
                 position: "center",
                 icon: "success",
                 title: "Food Data Update Successfully",
                 showConfirmButton: false,
                 timer: 1500
               });
          }
        
           navigate('/manageMyFood')
        }
        catch(err){
            console.log(err)
        }

   }

   
    return (
        <div>
             
              <form onSubmit={updateFoodInfo} className="card-body">

<div className="lg:flex justify-between items-center lg:px-12">
<div className="form-control">
<label className="label">
<span className="label-text">Food Name</span>
</label>
<input type="text" name="name" defaultValue={name}  placeholder="Food Name" className="input input-bordered lg:w-[600px]" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Food Image</span>
</label>
<input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="photoUrl" className="input input-bordered lg:w-[600px]" required />

</div>
</div>
<div className="lg:flex justify-between items-center lg:px-12">
<div className="form-control">
<label className="label">
<span className="label-text">Food Quantity</span>
</label>
<input type="number" name="foodQuantity" defaultValue={foodQuantity}  placeholder="Food Quantity" className="input input-bordered lg:w-[600px]" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Pickup Location</span>
</label>
<input type="text" name="pickUpLocation" defaultValue={pickUpLocation} placeholder="PickUp Location" className="input input-bordered lg:w-[600px]" required />

</div>
</div>
<div className="lg:flex justify-between items-center lg:px-12">
<div className="form-control">
<label className="label">
<span className="label-text">Expired Date</span>
</label>
<input type="date"  name="expiredDate" defaultValue={expiredDate} placeholder="Expired Date" className="input input-bordered lg:w-[600px]" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Food Status</span>
</label>
<input type="text" name="foodStatus"  placeholder="Donator Image" defaultValue={'available'} className="input input-bordered lg:w-[600px]" required />

</div>
</div>
<div className="lg:flex justify-between items-center lg:px-12">
<div className="form-control">
<label className="label">
<span className="label-text">Additional Notes</span>
</label>
<textarea className="border-2 rounded-md" name="additionNotes" defaultValue={additionNotes} id="" cols="100" rows="5"></textarea>
</div>

</div>

<div className="form-control mt-6">
<button className="btn btn-primary">Update Food Info</button>
</div>
</form>
        </div>
    );
};

export default UpdatePage;