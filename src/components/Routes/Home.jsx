import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { Link, useLoaderData } from "react-router-dom";
import WhyChooseUs from "./WhyChooseUs";
import Category from "./Category";
import Faq from "./Faq";

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
      <div className="mt-10 container mx-auto">
        <h1 className="text-4xl text-center p-4">Craft Items</h1>
        <p className="text-center w-80 lg:w-full mx-auto">
          Crafts according to your needs.We promise to deliver quality &
          creativity
        </p>
        <div className="container md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 justify-around">
          {craftItems.map((craft) => (
            <div key={craft._id}>
              <div className="card rounded-md w-96 md:w-80 lg:w-96 bg-base-100 shadow-xl mx-auto ">
                <figure>
                  <img src={craft.photo} alt="images" className="h-72 w-full myChoice" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {craft.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="font-normal">
                    <span className="font-bold">Subcategory: </span>
                    {craft.subcategory}
                  </p>
                  {craft.description.length > 100 ? (
                    <p>
                      <span className="font-bold">Description: </span>
                      {craft.description.slice(0, 100)}...
                    </p>
                  ) : (
                    <p>{craft.description}</p>
                  )}
                  
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

      <Category></Category>

      {/* faq section*/}
      <Faq></Faq>

      {/* why choose us */}
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
