import { useLoaderData } from "react-router-dom";
import { IoStar } from "react-icons/io5";

const CategoryDetails = () => {
    const categoryDetails = useLoaderData();
    console.log(categoryDetails)
    return (
        <div className=" w-2/5 mx-auto mt-10">
      <div className="card rounded-md  mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={categoryDetails?.photo}
            alt="images"
            className="h-96 w-full"
            />
        </figure>
        <div className="card-body">
          <h1 className="card-title"><span className="font-bold">Name:</span>
            {categoryDetails?.name}
            
          </h1>
          <h2><span className="font-bold">Category:</span> {categoryDetails?.subcategory}</h2>
          <div>
            <div className="flex justify-between">
            <p><span className="font-bold">Price: </span>{categoryDetails?.price}</p>
            <div className="flex items-center gap-1  w-1/5">
              <p>Rating:
              </p>
              <IoStar className="text-orange-400" /><IoStar className="text-orange-400" /><IoStar className="text-orange-400" />
              </div>
            </div>
            <p><span className="font-bold">Preparing Time: </span>{categoryDetails?.time}</p>
          </div>
          <p><span className="font-bold">Description: </span>{categoryDetails?.description}</p>
        </div>
      </div>
    </div>
    );
};

export default CategoryDetails;