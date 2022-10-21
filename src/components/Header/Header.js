import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TravelContext } from '../../App';
import logo from '../../images/logoWhite.png'
import { SingOut } from '../Login/firebaseManager';


const Header = () => {
    const [des, setdes,currentUser, setcurrentUser,selectedSlide, setselectedSlide] = useContext(TravelContext);
    const navigate = useNavigate();

    const signOut = () =>{
        SingOut()
        .then(res => {
            setcurrentUser();
            navigate('../')
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='relative'>
            <div className='z-10 fixed w-full flex justify-center opacity-100 py-4'>
                <div className='flex w-10/12 max-w-[1240px] gap-4 justify-between items-center'>
                    <div className='basis-1/3'>
                        <img className='h-14 w-fit cursor-pointer object-contain' onClick={() => navigate('../')} src={logo} alt="" />
                    </div>
                    <div className='basis-3/4 pl-3 flex justify-around items-center bg-white bg-opacity-20 rounded border border-gray-400 focus:border-gray-200'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEu1lIFRwzAMResJYANgAmACwgZ0goYJgAloJwAmoExAOwF0g3YCVoAJwvs5mXPduDEE+07nS2T9L31ZdqPCyxXGH/2KoGmaQxK6wa6wM0tuzb7Anpxzn3HC2QSA1wQ/YCLpWgK/g2QeOrMIDPzZApfsjwC96xtfxTbFLsw/xqeK2tVLYLJ8WObXcYYeiHMiucdUyYmXK4fABy4JkvbJBYmqUiUzziouqwI18RS79LKkGEyuN/xrzp7nEjTtQda+7AOpts73BpGVND0oSeB1zZFIPXrFNiTUzklOBb7JC4LGJZqswVKjj7ApJLMukuCafuE/zr6mAguC9SnJRLQyX8Wu+69dK3/QbIL19khPZX6rhidkUuZ1OMV7ewD4nAMTA1sRWNlUi0TN1GxobTA9DXo+8h67CFwgySciUc3P751b1AH+QmZ1H1DKv0Xw3+A7PYie5UGZ+4q6JJIc1RBZQrl6J/mv2icrGAoYxxev4BtoM5wZyCfEoAAAAABJRU5ErkJggg=="/>
                        <input className='w-full  py-2 px-4 rounded bg-transparent placeholder:text-white text-white focus:outline-none' type="text" placeholder='Search your Destination...' name="" id="" />
                    </div>
                    <ul className='basis-4/5 flex gap-8 items-center justify-end text-white'>
                        <li className='text-gray-200 hover:text-white duration-200'>News</li>
                        <li className='text-gray-200 hover:text-white duration-200'>Destination</li>
                        <li className='text-gray-200 hover:text-white duration-200'>Blog</li>
                        <li className='text-gray-200 hover:text-white duration-200'>Contact</li>
                        {
                            currentUser?.displayName ?
                            <>
                                <li className='font-semibold'> {currentUser.displayName}</li>
                                <li className='bg-yellow-500 hover:bg-yellow-400 text-black hover:text-opacity-80 duration-200 px-5 py-2 rounded' onClick={(signOut)}>Logout</li>
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

export default Header;