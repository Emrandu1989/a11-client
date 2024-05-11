import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdatePage = () => {
    const {user} = useContext(AuthContext)
    const food = useLoaderData();
    console.log(food)

      const updateFoodInfo = () =>{
          
      }
    return (
        <div>
              <h2>This is Update page</h2>
             {/* <form onSubmit={updateFoodInfo} className="card-body">
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  ItemName
                </span>
              </label>
              <input
                type="text"
                name="ItemName"
                placeholder="ItemName"
                className="input w-[500px] input-bordered"
                defaultValue={}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Subcategory_Name
                </span>
              </label>
              <input
                type="text"
                name="Subcategory_Name"
                defaultValue={}
                className="input w-[500px] input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  UserName
                </span>
              </label>
              <input
                type="text"
                name="UserName"
                defaultValue={}
                className="input w-[500px] input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  UserEmail
                </span>
              </label>
              <input
                defaultValue={}
                type="email"
                name="email"
                className="input w-[500px] input-bordered"
                
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Customization
                </span>
              </label>
              <input
                defaultValue={}
                type="text"
                name="Customization"
                className="input w-[500px] input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Processing_time
                </span>
              </label>
              <input
                defaultValue={}
                type="text"
                name="Processing_time"
                placeholder="Processing_time"
                className="input w-[500px] input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  StockStatus
                </span>
              </label>
              <input
                defaultValue={}
                type="text"
                name="StockStatus"
                placeholder="InStock or Made to Order"
                className="input w-[500px] input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Price</span>
              </label>
              <input
                defaultValue={}
                type="text"
                name="Price"
                placeholder="Price"
                className="input w-[500px] input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Ratings
                </span>
              </label>
              <input
                defaultValue={}
                type="number"
                name="Ratings"
                placeholder="out of 5"
                className="input w-[300px] input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  ImageUrl
                </span>
              </label>
              <input
                defaultValue={}
                type="text"
                name="ImageUrl"
                placeholder="ImageUrl"
                className="input w-[700px] input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Short Description
              </span>
            </label>
            <textarea
              name="Description"
              defaultValue={}
              cols="10"
              rows="5"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <div className="mt-5">
            <input
              className="w-full btn btn-primary"
              type="submit"
              value="Update Product"
            />
          </div>
        </form> */}
        </div>
    );
};

export default UpdatePage;