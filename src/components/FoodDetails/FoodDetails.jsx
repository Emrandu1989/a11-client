import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useAvailableFood from "../../hooks/useAvailableFood";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [requestDate, setRequestDate] = useState('');

   const [availableFoods, setAvailableFoods] = useAvailableFood();
   console.log(availableFoods)

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = `${currentDate.getMonth() + 1}`.padStart(2, '0');
    const day = `${currentDate.getDate()}`.padStart(2, '0');
    const currentDateFormatted = `${year}-${month}-${day}`;
    setRequestDate(currentDateFormatted);
  }, []);

  const foodDetails = useLoaderData();
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

  const handleRequestedFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const id = form._id.value;
    const pickUpLocation = form.pickUpLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionNotes = form.additionNotes.value;
    const donatorName = user.displayName;
    const donatorImg = user.photoURL;
    const donatorEmail = user.email;

    const foodDetails = {
      name,
      id,
      photoUrl,
      requestedDate: requestDate,
      pickUpLocation,
      expiredDate,
      additionNotes,
      donatorName,
      donatorEmail,
      donatorImg
    };

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/requestedFoods`, foodDetails);
      if (data.insertedId) {
          const filteredFood = availableFoods.filter(f=> f._id !==_id);
          setAvailableFoods(filteredFood)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Food Request added Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
      navigate('/requestedFood');
    } catch (err) {
      console.log(err);
    }
  };

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
                <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn btn-primary">Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handleRequestedFood} className="card-body">
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <input type="text" name="name" defaultValue={name} readOnly placeholder="Food Name" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
                <div className="form-control">
                  <input type="text" name="photoUrl" defaultValue={photoUrl} readOnly placeholder="photoUrl" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
              </div>
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <input type="text" name="_id" defaultValue={_id} readOnly placeholder="Food Id" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
                <div className="form-control">
                  <input type="text" name="donatorEmail" defaultValue={donatorEmail} readOnly placeholder="DonatorEmail" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
              </div>
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <input type="text" name="donatorName" defaultValue={donatorName} readOnly placeholder="Food Quantity" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
                <div className="form-control">
                  <input type="text" name="pickUpLocation" defaultValue={pickUpLocation} readOnly placeholder="PickUp Location" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
              </div>
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <input type="text" name="userEmail" defaultValue={user?.email} readOnly placeholder="Food Quantity" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
                <div className="form-control">
                  <input type="date" name="requestDate" defaultValue={requestDate} readOnly placeholder="RequestDate" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
              </div>
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <input type="text" name="pickUpLocation" defaultValue={pickUpLocation} readOnly placeholder="PickUp Location" className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
                <div className="form-control">
                  <input type="text" name="expiredDate" placeholder="expireDate" readOnly defaultValue={expiredDate} className="mt-2 input input-bordered lg:w-[600px]" required />
                </div>
              </div>
              <div className="lg:flex flex-col justify-between items-center lg:px-12">
                <div className="form-control">
                  <textarea className="border-2 rounded-md" name="additionNotes" defaultValue={additionNotes} id="" cols="54" rows="5"></textarea>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Request</button>
              </div>
            </form>

            <div className="modal-action">
              <form method="dialog">
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
