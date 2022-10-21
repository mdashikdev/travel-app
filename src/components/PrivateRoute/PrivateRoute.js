import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { TravelContext } from '../../App';

function PrivateRoute({children}) {
    const [des, setdes,currentUser, setcurrentUser,selectedSlide, setselectedSlide] = useContext(TravelContext);
    const location = useLocation();
  return (
    //currentUser?.displayName
     true ? children : <Navigate to='/login' state={{from:location.pathname}} />
  )
}

export default PrivateRoute