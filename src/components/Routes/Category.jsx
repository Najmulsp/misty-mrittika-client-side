import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {
  const [subcategories, setSubcategories] = useState([]);

  const categories = subcategories.slice(0, 6);
  

  useEffect(() => {
    fetch("https://misty-mrittika.vercel.app/subcategories")
      .then((res) => res.json())
      .then((data) => setSubcategories(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Browse by Category</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 justify-around gap-6 ">
        {categories.slice(0, 6).map((category) => (
          <div
            key={category._id}
            
            >
            <Link to={`/allCategories/${category._id}`}><article className="flex flex-col w-80 mb-6  mx-auto hover:scale-[1.05] transition-all shadow-lg">
              <img
                  alt=""
                  className="object-cover w-full h-64 dark:bg-gray-500"
                  src={category.photo}
                />
              <div className="flex flex-col flex-1 p-6">               
                <h3 className="flex-1 py-2 text-lg text-center font-semibold leading-snug">
                {category.subcategory}
                </h3>
                  <p className="text-center"> <span className="font-bold">Available items:</span> {category.items}<small> p</small>
                  <br />
                  in our store
                  </p>                  
              </div>
            </article></Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
