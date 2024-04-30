import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import { AuthContext } from "../../providers/AuthProvider";

const ProtectedRoute = ({children}) => {
      const { user, loading } = useContext(AuthContext);
    const location =useLocation();


    if(loading){
        return <div className="w-full flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
                </div>
        
    }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
   
  
};

ProtectedRoute.propTypes = {
    children: PropTypes.object,
  };

export default ProtectedRoute;
