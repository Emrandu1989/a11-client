import { useContext, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const FoodDetails = () => {
    const {user} = useContext(AuthContext);
     console.log(user.email)

      const navigate = useNavigate()
  const [requestDate, setRequestDate] = useState(new Date() || new Date())
  const foodDetails = useLoaderData();
  console.log(foodDetails);
  const {
    photoUrl,
    name,
    donatorName,
    donatorEmail,
    foodQuantity,
    expiredDate,
    pickUpLocation,
    additionNotes,
    _id
  } = foodDetails;



  const handleRequestedFood = async(e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const id = form._id.value;
   
    const pickUpLocation = form.pickUpLocation.value;
    const expiredDate = form.expiredDate.value;
    const requestedDate = form.expiredDate.value;
   
    const additionNotes = form.additionNotes.value;
    const donatorName = user.displayName;
    const donatorImg = user.photoURL;
    const donatorEmail = user.email;
    const foodDetails = {name,id, photoUrl, requestedDate,pickUpLocation, expiredDate,additionNotes,donatorName,donatorEmail,donatorImg}
    console.log(foodDetails)

    try{
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/requestedFoods`, foodDetails);
      console.log(data)
      if(data.insertedId){
         Swal.fire({
             position: "center",
             icon: "success",
             title: "Food Request add Successfully",
             showConfirmButton: false,
             timer: 1500
           });
      }
    
      navigate('/requestedFood')
    }
    catch(err){
        console.log(err)
    }

}

  return (
    <>
      <div className="text-center">
        <div className="my-5">
          <h2 className="text-3xl font-bold">Donar Name: {donatorName} </h2>
          <h4 className="text-lg mt-5 font-bold">
            PickUp Location: {pickUpLocation}
          </h4>
        </div>

        <div className="flex justify-center items-center my-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={photoUrl}
                alt="Shoes"
                className="rounded-xl h-[400px] w-[350px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>Quantity: {foodQuantity} </p>
              <p>Exp: {expiredDate} </p>
              <div className="card-actions">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn btn-primary"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handleRequestedFood}  className="card-body">
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    readOnly
                    placeholder="Food Name"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Image</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    defaultValue={photoUrl}
                    readOnly
                    placeholder="photoUrl"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Id</span>
                  </label>
                  <input
                    type="text"
                    name="_id"
                    defaultValue={_id}
                    readOnly
                    placeholder="Food Id"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Donator Email</span>
                  </label>
                  <input
                    type="text"
                    name="donatorEmail"
                    defaultValue={donatorEmail}
                    readOnly
                    placeholder="DonatorEmail"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex flex-col  justify-between items-center lg:px-12">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Donator Name</span>
                  </label>
                  <input
                    type="text"
                    name="donatorName"
                    defaultValue={donatorName}
                    readOnly
                    placeholder="Food Quantity"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pickup Location</span>
                  </label>
                  <input
                    type="text"
                    name="pickUpLocation"
                    defaultValue={pickUpLocation}
                    readOnly
                    placeholder="PickUp Location"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex flex-col  justify-between items-center lg:px-12">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="text"
                    name="userEmail"
                    defaultValue={user?.email}
                    readOnly
                    placeholder="Food Quantity"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Request Date</span>
                  </label>
                  <input
                    type="date"
                    name="RequestDate"
                    defaultValue={requestDate}
                   
                    
                    placeholder="RequestDate"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
               
              </div>
              <div className="lg:flex  flex-col justify-between items-center lg:px-12">
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pickup Location</span>
                  </label>
                  <input
                    type="text"
                    name="pickUpLocation"
                    defaultValue={pickUpLocation}
                    readOnly
                    placeholder="PickUp Location"
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>

              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Expire Date</span>
                  </label>
                  <input
                    type="text"
                    name="expiredDate"
                    placeholder="expireDate"
                    readOnly
                    defaultValue={expiredDate}
                    className="input input-bordered lg:w-[600px]"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Additional Notes</span>
                  </label>
                  <textarea
                    className="border-2 rounded-md"
                    name="additionNotes"
                    defaultValue={additionNotes}
                    id=""
                    cols="54"
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-6">
                <button  className="btn btn-primary">Request</button>
              </div>
            </form>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default FoodDetails;
