import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import bannerImg from '../../images/Rectangle 1.png'
import tourists from '../../tourist.json';
import { useFormik  } from 'formik';
import { TravelContext } from '../../App';
import Header from '../Header/Header';

function Booking() {
    const {hotelId} = useParams()
    const touristInfo = tourists.find(trst => trst.id == hotelId);
    const [des, setdes,currentUser, setcurrentUser,selectedSlide, setselectedSlide] = useContext(TravelContext);
    const navigate = useNavigate();
    const {values,error,handleSubmit,handleChange,handleBlur} = useFormik({
        initialValues:{
            origin:'',
            destination:'',
            from:'',
            to:''
        },
        onSubmit:(values) => {
            setdes(values)
            navigate('../search')
        }
    });

  return (
    <>
        <Header/>
        <div className='h-screen bg-black z-1 overflow-hidden'>
            <div className='absolute'>
                <img className='z-1 max-h-screen w-screen object-cover opacity-20' src={bannerImg} alt="" />
            </div>
            <div className='w-full h-full flex flex-col md:flex-row items-center justify-center z-5 relative'>
                <div className='w-full px-8 flex flex-col md:flex-row justify-between items-center text-white'>
                    <div className='w-11/12 mt-4 md:mt-0 lg:mt-0 h-fit flex justify-center md:w-3/4 md:ml-16 flex-col gap-5'>
                        <h1 className='text-4xl mt-3 md:text-7xl font-bold'>{touristInfo?.spotName}</h1>
                        <p className='w-full md:w-4/5 leading-5'>{touristInfo?.description.slice(0,450)}..</p>
                    </div>
                    <div className='z-2 flex justify-center mt-20 md:mt-0 w-full md:w-6/12'>
                        <form onSubmit={handleSubmit} className='w-4/5 px-5 py-4 overflow-hidden bg-white text-black font-semibold rounded-xl shadow'>
                            <div className='w-full grid'>
                                <label htmlFor="origin">Origin</label>
                                <input required value={values.origin} onChange={handleChange} onBlur={handleBlur} className='bg-gray-100 f-full rounded-lg px-6 py-4 text-black font-semibold focus:outline-none' type="text" name="origin" id='origin'/>
                            </div>
                            <div className='w-full grid'>
                                <label htmlFor="destination">Destination</label>
                                <input required onChange={handleChange} onBlur={handleBlur} value={values.destination} className='bg-gray-100 f-full rounded-lg px-6 py-4 text-black font-semibold focus:outline-none' type="text" name="destination" id='destination'/>
                            </div>
                            <div className='w-full flex gap-3 rounded'>
                                <div className='grid w-full gap-3 rounded-lg px-4 py-3 focus:outline-none  '>
                                    <label htmlFor="from">From</label>
                                    <input required type="date" name="" id='from' onChange={handleChange} onBlur={handleBlur} value={values.from}/>
                                </div>
                                <div className='grid w-full gap-3 rounded-lg px-4 py-3 focus:outline-none '>
                                    <label htmlFor="to">To</label>
                                    <input required type="date" id='to' name="" onChange={handleChange} onBlur={handleBlur} value={values.to}/>
                                </div>
                            </div>
                            <input className='w-full cursor-pointer mt-3 px-4 py-3 bg-yellow-500 hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 duration-200 rounded' type="submit" name="" value="Start Booking"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Booking