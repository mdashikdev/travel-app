import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TravelContext } from '../../App';
import { SingOut } from '../Login/firebaseManager';
import logo from './logo.png'


const Header2 = () => {
    const [des, setdes,currentUser, setcurrentUser,selectedSlide, setselectedSlide] = useContext(TravelContext);
    const navigate = useNavigate();
    const signOut = () =>{
        SingOut()
        .then(res => {
            setcurrentUser();
            navigate('../')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='relative border-b-2 border-slate-300'>
            <div className='z-10 w-full flex justify-center opacity-100 py-4'>
                <div className='flex w-10/12 max-w-[1240px] gap-4 justify-between items-center'>
                    <div className='basis-1/3'>
                        <img className='h-14 w-fit cursor-pointer object-contain' onClick={() => navigate('../')} src={logo} alt="" />
                    </div>
                    <ul className='basis-4/5 flex gap-8 items-center justify-end text-white'>
                        <li className='text-black hover:text-white duration-200'>News</li>
                        <li className='text-black hover:text-white duration-200'>Destination</li>
                        <li className='text-black hover:text-white duration-200'>Blog</li>
                        <li className='text-black hover:text-white duration-200'>Contact</li>
                        {
                            currentUser?.displayName ?
                            <>
                                <li className='font-semibold text-black'> {currentUser.displayName}</li>
                                <li className='bg-yellow-500 hover:bg-yellow-400 text-black hover:text-opacity-80 duration-200 px-5 py-2 rounded' onClick={signOut}>Logout</li>
                            </>
                            
                            :
                            <li className='bg-yellow-500 hover:bg-yellow-400 text-black hover:text-opacity-80 duration-200 px-5 py-2 rounded' onClick={() => navigate('./login')}>Login</li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header2;