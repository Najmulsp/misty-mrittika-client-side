import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CraftDetails = () => {
  const { id } = useParams();

  const [craft, setCraft] = useState();

  console.log("pawa jacche", craft);
  console.log(typeof craft);
  //  const {name} = craft;

  useEffect(() => {
    fetch(`http://localhost:5000/craftDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
        // console.log(data)
      });
  }, []);

  return (
    <div className=" w-2/5 mx-auto mt-10">
      <div className="card  mx-auto bg-base-100 shadow-xl">
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
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div>
            <p>Price: {craft?.[0].price}</p>
            <p>Preparing Time: {craft?.[0].time}</p>
          </div>
          <p>Description: {craft?.[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
