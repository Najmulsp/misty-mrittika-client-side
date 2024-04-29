import { useLoaderData } from "react-router-dom";


const AllCategories = () => {
    const allCategories = useLoaderData();
    console.log(allCategories)
    return (
        <div>
            <h2>all categories</h2>
        </div>
    );
};

export default AllCategories;