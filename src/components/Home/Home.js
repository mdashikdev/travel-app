import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import bannerImg from '../../images/Rectangle 1.png'
import Slider from '../Swiper';
import touristSpots from '../../tourist.json';
import { useNavigate } from 'react-router-dom';
import { TravelContext } from '../../App';

const Home = () => {
    const [currentSlide, setcurrentSlide] = useState('');
    const navigate = useNavigate();
    const detailCurrentSlider = touristSpots.find(spt => spt?.spotName?.toLowerCase() === currentSlide?.toLowerCase());
    const [des, setdes,currentUser, setcurrentUser,selectedSlide, setselectedSlide] = useContext(TravelContext);
    setselectedSlide(detailCurrentSlider)
    return (
        <>
            <Header/>
            <div className='h-screen bg-black z-1 overflow-hidden'>
                <div className='absolute'>
                    <img className='z-1 max-h-screen w-screen object-cover opacity-20' src={bannerImg} alt="" />
                </div>
                <div className='w-full h-full flex flex-col md:flex-row items-center justify-center z-5 relative'>
                    <div className='w-full px-8 flex flex-col md:flex-row justify-between items-center text-white'>
                        <div className='w-full h-fit order-2 md:order-1 md:w-3/4 md:ml-16 flex flex-col gap-5'>
                            <h1 className='text-4xl mt-3 md:text-7xl font-bold'>{detailCurrentSlider?.spotName}</h1>
                            <p className='w-full md:w-4/5 leading-5'>{detailCurrentSlider?.description.slice(0,250)}..</p>
                            <button onClick={() => navigate(`./booking/${detailCurrentSlider.id}`) } className='w-fit flex items-center gap-1 px-4 py-2 text-black font-semibold duration-200 bg-orange-400 hover:bg-orange-500 rounded'>
                                Booking
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKZJREFUSEvl1MENQEAQBdDVgU4ogQ50RAk6UQIl0IkO+HMQISvzM2MPQjIn/Gdnx2Yh8ZUlzg//BTq0tketWostLZLwFjWjag2xADlCJ1TBIBZAukIjVoBGPACFeAEVuQObNnbE/ct0pQAWfER1jO9bLRoRWKIu4bJaLyDj+hjuBdRwD0CFWwE63Ao0eHGIbWhshK2bLIgceEmOa+JfOx+xroBGvg/sB+4uGdsbHPAAAAAASUVORK5CYII="/>
                            </button>
                        </div>
                        <div className='z-2 relative order-1 md:order-2 mt-20 md:mt-0 w-full md:w-6/12'>
                            <Slider className='' setcurrentSlide={setcurrentSlide} touristSpots={touristSpots} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;