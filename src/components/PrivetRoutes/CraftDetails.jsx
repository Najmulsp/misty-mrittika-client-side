import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
const CraftDetails = () => {
  const { id } = useParams();

  const [craft, setCraft] = useState();



  useEffect(() => {
    fetch(`https://misty-mrittika.vercel.app/craftDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
       
      });
  }, []);

  return (
    <div className=" w-2/5 mx-auto mt-10">
      <div className="card rounded-md  mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={craft?.[0].photo}
            alt="images"
            className="h-96 w-full"
            />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {craft?.[0].name}
            
          </h2>
          <div>
            <div className="flex justify-between">
            <p><span className="font-bold">Price: </span>{craft?.[0].price}</p>
            <div className="flex items-center gap-1  w-1/5">
              <p>Rating:
              </p>
              <IoStar className="text-orange-400" /><IoStar className="text-orange-400" /><IoStar className="text-orange-400" />
              </div>
            </div>
            <p><span className="font-bold">Preparing Time: </span>{craft?.[0].time}</p>
          </div>
          <p><span className="font-bold">Description: </span>{craft?.[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
