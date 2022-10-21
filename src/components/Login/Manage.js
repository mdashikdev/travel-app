import React, { useContext, useState } from 'react'
import Header2 from '../Header2/Header2'
import Login from './Login'
import fb from './fb.png'
import google from './google.png'
import Register from './Register'
import { loginWithFb, loginWithGoogle } from './firebaseManager'
import { useLocation, useNavigate } from 'react-router-dom'
import { TravelContext } from '../../App'

function Manage() {
    const [loginstatus, setloginstatus] = useState(false)
    const [des, setdes,currentUser, setcurrentUser,selectedSlide, setselectedSlide] = useContext(TravelContext);

    const navigate = useNavigate();
    const location = useLocation();

    const redirect =location?.state?.from ? `..${location?.state?.from}` : '../';

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(res => {
            setcurrentUser(res);
            navigate(redirect)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleFbLogin = () => {
        loginWithFb()
        .then(res => {
            console.log(res)
            setcurrentUser(res)
            navigate(redirect)
        })
        .catch(err => {
            console.log(err)
        })
    }
    console.log()
  return (
    <>
        <Header2/>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            {
                loginstatus ?
                <Login setloginstatus={setloginstatus} loginstatus={loginstatus}/>
                :
                <Register setloginstatus={setloginstatus} loginstatus={loginstatus}/>
            }
            <p className='my-2'>..................OR..................</p>
            <div className='flex flex-col gap-3'>
                <div onClick={handleGoogleLogin} className='w-full flex justify-between items-center gap-2 px-2 py-1 cursor-pointer hover:bg-slate-200 duration-200  border border-slate-300 rounded-full'>
                    <img className='w-10 h-10 ' src={google}/>
                    <h4>Continue with Google</h4>
                </div>
                <div onClick={handleFbLogin} className='w-full flex justify-between items-center gap-2 px-2 py-1 cursor-pointer hover:bg-slate-200 duration-200  border border-slate-300 rounded-full'>
                    <img className='w-10 h-10 ' src={fb}/>
                    <h4>Continue with Facebook</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Manage