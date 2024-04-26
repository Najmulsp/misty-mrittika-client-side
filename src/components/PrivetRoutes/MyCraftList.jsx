import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link} from "react-router-dom";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const [myCraft, setMyCraft] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/myCraftList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCraft(data);
      });
  }, [user]);
  return (
    <div className="w-full grid grid-cols-2 p-10 mx-auto gap-6 border ">

      {myCraft.map((craft) => (
        <div key={craft._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {craft.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{craft.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/updateMyCraft/${craft._id}`}>
                <div className="badge badge-outline">Update</div>
                </Link>
                <div className="badge badge-outline">Delete</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCraftList;
