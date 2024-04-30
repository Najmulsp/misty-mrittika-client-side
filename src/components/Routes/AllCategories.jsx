import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCategories = () => {
  const singleCategory = useLoaderData();
  const { subcategory } = singleCategory;
  // console.log(subcategory)

  const [crafts, setCrafts] = useState([]);

  // console.log(crafts)

  useEffect(() => {
    fetch(`http://localhost:5000/subCategories`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        //   console.log(data)
      });
  }, []);
  // {user?.email}
  const similurCrafts = crafts.filter(
    (craft) => craft.subcategory === singleCategory.subcategory
  );
  console.log(similurCrafts);
  return (
    <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 border justify-around">
     

      {similurCrafts.map((similurCraft) => (
        <div key={similurCraft._id}>
          <div >
            <div className="card rounded-md w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={similurCraft.photo}
                  alt="images"
                  className="h-72 w-full"
                />
              </figure>
              <h3 className="p-2"><span className="font-bold">Category: </span>{similurCraft.subcategory}</h3>
              <div className="card-body">
                <h2 className="card-title">
                  {similurCraft.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                {similurCraft.description.length > 100 ? (
                  <p>{similurCraft.description.slice(0, 100)}...</p>
                ) : (
                  <p>{similurCraft.description}</p>
                )}
                <div className="card-actions justify-end mt-2">
                  <Link to={`/categoryDetails/${similurCraft._id}`}>
                  <button className="btn btn-primary">View Details</button>
                  </Link>
                  <button className="btn btn-secondary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategories;
