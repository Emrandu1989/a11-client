import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";



const AddFood = () => {
    const {user} = useContext(AuthContext);
     console.log(user.email)

      const navigate = useNavigate()
      const handleAddFood = async(e) =>{
           e.preventDefault();
           const form = e.target;
           const name = form.name.value;
           const photoUrl = form.photoUrl.value;
           const foodQuantity = form.foodQuantity.value;
           const pickUpLocation = form.pickUpLocation.value;
           const expiredDate = form.expiredDate.value;
           const foodStatus = form.foodStatus.value;
           const additionNotes = form.additionNotes.value;
           const donatorName = user.displayName;
           const donatorImg = user.photoURL;
           const donatorEmail = user.email;
           const foodDetails = {name, photoUrl, foodQuantity, pickUpLocation, expiredDate,foodStatus,additionNotes,donatorName,donatorEmail,donatorImg}
           console.log(foodDetails)

           try{
             const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/foods`, foodDetails);
             console.log(data)
             if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Food Data add Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
             }
           
             navigate('/')
           }
           catch(err){
               console.log(err)
           }

      }
    return (
        <>
           
           <form onSubmit={handleAddFood} className="card-body">

            <div className="lg:flex justify-between items-center lg:px-12">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <input type="text" name="name"  placeholder="Food Name" className="input input-bordered lg:w-[600px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Image</span>
          </label>
          <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered lg:w-[600px]" required />
      
        </div>
            </div>
            <div className="lg:flex justify-between items-center lg:px-12">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Food Quantity</span>
          </label>
          <input type="number" name="foodQuantity"  placeholder="Food Quantity" className="input input-bordered lg:w-[600px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pickup Location</span>
          </label>
          <input type="text" name="pickUpLocation" placeholder="PickUp Location" className="input input-bordered lg:w-[600px]" required />
      
        </div>
            </div>
            <div className="lg:flex justify-between items-center lg:px-12">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Expired Date</span>
          </label>
          <input type="date"  name="expiredDate" placeholder="Expired Date" className="input input-bordered lg:w-[600px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Status</span>
          </label>
          <input type="text" name="foodStatus" placeholder="Donator Image" defaultValue={'available'} className="input input-bordered lg:w-[600px]" required />
      
        </div>
            </div>
            <div className="lg:flex justify-between items-center lg:px-12">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Additional Notes</span>
          </label>
            <textarea className="border-2 rounded-md" name="additionNotes" id="" cols="100" rows="5"></textarea>
        </div>
     
            </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Food</button>
        </div>
      </form>
   
        </>
    );
};

export default AddFood;