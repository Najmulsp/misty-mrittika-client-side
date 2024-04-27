import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { Link, useLoaderData } from "react-router-dom";


const Home = () => {
  const crafts = useLoaderData();
  const craftItems = crafts.slice(0, 6);

  return (
    <div>
      <Helmet>
        <title>Misty Mrittika/ Home</title>
      </Helmet>

      <Banner></Banner>

      {/* craft items section */}
      <div className="mt-10">
        <h1 className="text-4xl text-center p-4">Craft Items</h1>
        <p className="text-center">paragraph</p>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 border justify-around">
        {craftItems.map((craft) => (
          <div key={craft._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={craft.photo} alt="images" className="h-72" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {craft.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{craft.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/craftDetails/${craft._id}`}>
                  <button className="btn btn-primary">View Details</button>
                  </Link> 
                  <button className="btn btn-secondary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* another sention */}
    </div>
  );
};

export default Home;
