import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';


const AddCraft = () => {
  const {user} = useContext(AuthContext);

    const handleAddCraft = e =>{
        e.preventDefault();
        // get email of user
        

        const email = user.email;
        const name = e.target.name.value;
        const subcategory = e.target.subcategory.value;
        const price = e.target.price.value;
        const time = e.target.time.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const stockStatus = e.target.stockStatus.value;
        const userName = e.target.userName.value;
        // const email = e.target.email.value;
        const photo = e.target.photo.value;
        
        const newCraft = {name, subcategory, price, time, rating, description,stockStatus, userName, email,  photo }

        // console.log(newCraft)
        
        // send data to the server
        fetch('http://localhost:5000/addCrafts', {
            method: 'POST',
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Your craft added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
        })
    }
  return (
    <div className="border rounded-xl w-3/5 mx-auto p-6 mt-8">

      <div className="text-center">
        <div className="space-y-2 col-span-full  mb-4">
          <p className="font-medium">Add New Craft</p>
          <p className="text-xs">Adipisci fuga autem eum!</p>
        </div>
        <div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
          <form onSubmit={handleAddCraft} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
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
              <select
                name="subcategory"
                type="text"
                placeholder="Available quantity"
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              >
                <option value="Yes" selected>
                Clay-made pottery
                </option>
                <option value="No" selected>
                Stoneware
                </option>
                <option value="No" selected>
                Porcelain
                </option>
                <option value="No" selected>
                Terra Cotta
                </option>
                <option value="No" selected>
                Ceramics & Architectural
                </option>
                <option value="No" selected>
                Home decor pottery
                </option>
                </select>
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
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
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
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
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
                className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              >
                <option value="Yes" selected>
                  Yes
                </option>
                <option value="No" selected>
                  No
                </option>
              </select>
            </div>
                  {/* stock Status */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Stock Status
              </label>
              <select
                name="stockStatus"
                type="text"
                placeholder="Stock Status"
                className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              >
                <option value="Yes" selected>
                In stock
                </option>
                <option value="No" selected>
                Made to Order
                </option>
              </select>
            </div>

            {/* User Name */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                User Name
              </label>
              <input
                name="userName"
                type="text"
                placeholder="Your Name"
                className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>

            {/* User Email */}
            {/* <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                User Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div> */}
            {/* photo url */}
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm p-1 flex justify-start">
                Photo
              </label>
              <input
                name="photo"
                placeholder="URL of photo"
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              ></input>
            </div>
            {/* add button */}
            <div className="col-span-full mt-5">
              <button
                type="submit"
                value="Add Coffee"
                className="bg-violet-400 rounded-md btn btn-block p-3"
              >Add Craft</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;