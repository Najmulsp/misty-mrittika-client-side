import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
// import { useLoaderData } from "react-router-dom";
// import Estates from "./Estates";
// import OurExpert from "./Routes/OurExpert";
// import Neighbor from "./Routes/Neighbor";

const Home = () => {
//   const estates = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Nest Plaza/ Home</title>
      </Helmet>

      <Banner></Banner>
      {/* <div className="mt-10">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="text-center text-3xl font-bold"
        >
          Our Estates
        </h1>
        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="1200"
          className="text-center py-5"
        >
          Explore your options to find your perfect match
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-[95%] justify-between">
          {estates.map((estate) => (
            <Estates key={estate.id} estate={estate}></Estates>
          ))}
        </div>
      </div>
      <OurExpert></OurExpert>
      <Neighbor></Neighbor> */}
    </div>
  );
};

export default Home;