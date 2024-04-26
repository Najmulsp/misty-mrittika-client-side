import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myCraftList/${user?.email}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
  }, []);
  return (
    <div>
      <h2>my craft list</h2>
    </div>
  );
};

export default MyCraftList;
