import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const [myCraft, setMyCraft] = useState([]);

  useEffect(() => {
    fetch(`https://misty-mrittika.vercel.app/myCraftList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCraft(data);
      });
  }, [user]);

  const handleDeleteMyCraft = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://misty-mrittika.vercel.app/deleteMyCraft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myCraft.filter((craft) => craft._id !== id);
              setMyCraft(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Misty Mrittika/ My Art & Craft List</title>
      </Helmet>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 border justify-around">
        {myCraft.map((craft) => (
          <div key={craft._id}>
            <div className="card rounded-md w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={craft.photo} alt="images" className="h-72 w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {craft.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{craft.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/updateMyCraft/${craft._id}`}>
                    <button className="btn btn-primary">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDeleteMyCraft(craft._id)}
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
    </div>
  );
};

export default MyCraftList;
