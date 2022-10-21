import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import Manage from './components/Login/Manage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Search from './components/Search/Search';

export const TravelContext = createContext();

function App() {
  const [currentUser, setcurrentUser] = useState()
  const [des, setdes] = useState({})
  const [selectedSlide, setselectedSlide] = useState()

  return (
    <TravelContext.Provider value={[des, setdes,currentUser, setcurrentUser,selectedSlide, setselectedSlide]}>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/search' element={<PrivateRoute><Search/></PrivateRoute>} />
      <Route path='/login' element={<Manage/>} />
      <Route path='/booking/:hotelId' element={<Booking/>} />
    </Routes>
  </TravelContext.Provider>
  );
}

export default App;
