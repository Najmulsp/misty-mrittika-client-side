import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyCraft = () => {
    const {id } = useParams();
    const [craft, setCraft] = useState();
   

    useEffect(()=>{
        fetch(`https://misty-mrittika.vercel.app/singleCraft/${id}`)
        .then(res => res.json())
        .then(data =>{
            setCraft(data)
            
        })
    }, [id])

    const handleUpdate = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const subcategory = e.target.subcategory.value;
        const price = e.target.price.value;
        const time = e.target.time.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const photo = e.target.photo.value;

        const updatedCraft = {name, subcategory, price, time, rating, description, photo};

        
        // send data to the server
        fetch(`https://misty-mrittika.vercel.app/updateCraft/${id}`, {
            method: "PUT",
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify(updatedCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.modifiedCount){
                Swal.fire({
                    title: 'success!',
                    text: 'Your Craft Information updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            
        })
    }
    return (
        <div className="border rounded-xl w-3/5 mx-auto p-6 mt-8">

      <div className="text-center">
        <div className="space-y-2 col-span-full  mb-4">
          <p className="font-medium">Update Your Craft Information</p>
          <p className="text-xs">Adipisci fuga autem eum!</p>
        </div>
        <div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
          <form onSubmit={handleUpdate} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                {/* Craft */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="username"
                className="text-sm p-1 flex justify-start"
              >
                Craft
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name of craft"
                defaultValue={craft?.[0].name}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
                    {/* Subcategory */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Subcategory
              </label>
              <input
                name="subcategory"
                type="text"
                placeholder="Available quantity"
                defaultValue={craft?.[0].subcategory}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* Price */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Price
              </label>
              <input
                name="price"
                type="text"
                placeholder="price"
                defaultValue={craft?.[0].price}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* Rating */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Rating
              </label>
              <input
                name="rating"
                type="text"
                placeholder="Rating"
                defaultValue={craft?.[0].rating}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* Processing Time */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Processing Time
              </label>
              <input
                name="time"
                type="text"
                placeholder="Processing time"
                defaultValue={craft?.[0].time}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* Description */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Description
              </label>
              <input
                name="description"
                type="text"
                placeholder="Details "
                defaultValue={craft?.[0].description}
                className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* customization */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Customization
              </label>
              <select
                name="customization"
                type="text"
                placeholder="Details "
                defaultValue={craft?.[0].customization}
                className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3 "
              >
                <option value="Yes" >
                  Yes
                </option>
                <option value="No">
                  No
                </option>
              </select>
            </div>
            {/* photo url */}
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="bio" className="text-sm p-1 flex justify-start">
                Photo
              </label>
              <input
                name="photo"
                placeholder="URL of photo"
                defaultValue={craft?.[0].photo}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              ></input>
            </div>
            {/* add button */}
            <div className="col-span-full mt-5">
              <button
                type="submit"
                value="Add Coffee"
                className="bg-violet-400 rounded-md btn btn-block p-3"
              >Update Craft</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateMyCraft;