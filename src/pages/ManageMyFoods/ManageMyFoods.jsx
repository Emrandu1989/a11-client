import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/food/${user?.email}`
    );
    setFood(data);
  };
  console.log(food);
  const { foodQuantity, name, photoUrl, _id } = food;

  return (
    <>
      <div className="container mx-auto md:px-4    lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          My Foods ({food.length})
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="">
                <th className="md:px-6  py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                  Image
                </th>
                <th className="md:px-6 py-3 text-left text-sm  text-gray-700 uppercase ">
                  Food Name
                </th>

                <th className="md:px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                  Update
                </th>
                <th className="md:px-6  py-3">Delete</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {food.map((myFood) => (
                <tr key={myFood._id}>
                  <td className="md:px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={myFood.photoUrl}
                          alt="Product"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="md:px-6 px-0 py-4 ">
                    <div className="text-sm font-medium text-gray-900">
                      {myFood.name}
                    </div>
                  </td>

                  <td className="md:px-6 py-4  text-sm text-gray-700">
                    <Link>
                      {" "}
                      <button className="btn">Update</button>{" "}
                    </Link>
                  </td>
                  <td className="md:px-6  py-4  m text-right text-sm font-medium">
                    <button className="btn btn-square mr-12 btn-outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageMyFoods;