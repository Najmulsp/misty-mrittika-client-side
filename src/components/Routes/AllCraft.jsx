import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const AllCraft = () => {
    const allCraft = useLoaderData();
    
    return (
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 justify-around">
          <Helmet>
        <title>Misty Mrittika/ All Art & craft</title>
      </Helmet>
      {allCraft.map((craft) => (
        <div key={craft._id}>
          <div className="card rounded-md w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={craft.photo}
                alt="images"
                className="h-72 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {craft.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              {craft.description.length > 100 ? (
                  <p>{craft.description.slice(0, 100)}...</p>
                  ) : (
                  <p>{craft.description}</p>
                )}
              <div className="card-actions justify-end">
                
                  <button className="btn btn-primary">Update</button>
                
                <button
                  
                  className="btn btn-secondary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default AllCraft;