import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddFood = () => {
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
           const foodDetails = {name, photoUrl, foodQuantity, pickUpLocation, expiredDate,foodStatus,additionNotes}
           console.log(foodDetails)

           try{
             const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/foods`, foodDetails);
             console.log(data)
             if(data.insertedId){
                toast.success('Food Details Added Successfully') 
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
          <input type="text" name="foodStatus" placeholder="Donator Image" defaultValue={'This food is very Tasty and  Delicious'} className="input input-bordered lg:w-[600px]" required />
      
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
      <ToastContainer />
        </>
    );
};

export default AddFood;