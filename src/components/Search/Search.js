import React, { useContext } from 'react'
import { TravelContext } from '../../App'
import Header2 from '../Header2/Header2'
import hotels from '../../hotels.json';
import Map from '../Map';

function Search() {
  const [des, setdes,currentUser, setcurrentUser,selectedSlide, setselectedSlide] = useContext(TravelContext);
  const selectedSlideHotels = hotels.filter(ht => ht?.touristSpot.toLowerCase() == selectedSlide?.spotName.toLowerCase());

  return (
   <>
    <Header2/>
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-10/12 max-w-[1240px] flex gap-2'>
        <div className='w-3/5'>
          <div>
            <h3 className='text-2xl font-bold mb-4 text-black'>Stay in {selectedSlide?.spotName}</h3>
          </div>
          <div>
            {
              selectedSlideHotels.map(ht => 
              <div key={ht.id}>
                <img src={ht.image} className='w-64 h-fit rounded-lg' alt=""/>
                <div>
                  <h2 className='text-xl font-semibold'>{ht?.hotelName}</h2>
                  <p>Info</p>
                </div>
              </div>)
            }
          </div>
        </div>
        <div className='w-full rounded-lg m-5'>
          <Map/>
        </div>
      </div>
    </div>
   </>
  )
}

export default Search