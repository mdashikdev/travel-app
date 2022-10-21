import React, { useContext } from 'react'
import { useFormik  } from 'formik';
import * as yup from 'yup';
import { loginUserWithEmailAndPass } from './firebaseManager';
import { useLocation, useNavigate } from 'react-router-dom';
import { TravelContext } from '../../App';

function Login({loginstatus,setloginstatus}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [des, setdes,currentUser, setcurrentUser] = useContext(TravelContext);

    const redirect =location?.state?.from ? `..${location?.state?.from}` : '../';

    const {values,errors,handleSubmit,handleChange,handleBlur} = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            pass:'',
            confirmpass:''
        },
        validationSchema : yup.object({
            email:yup.string().email().required(),
            pass:yup.string().required('Please Enter your password')
        }),
        onSubmit:(values) => {
            loginUserWithEmailAndPass(values.email,values.pass)
            .then(res => {
                if (res === 'Firebase: Error (auth/wrong-password).') {
                    console.log("Invalid Password")
                }else{
                    setcurrentUser(res)
                    navigate(redirect)
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    });
  return (
    <form className='lg:w-4/12 md:lg:w-4/12 w-10/12  p-8 rounded-lg shadow' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold mb-3'>Login</h2>
        <div className='flex flex-col gap-4 py-4'>
            <input onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" className='w-full px-4 py-2 focus:outline-none border-b-2 border-slate-400' type='email' placeholder='Email..' />
            <p className='text-red-500'>{errors.email}</p>
            <input onChange={handleChange} onBlur={handleBlur} value={values.pass} id="pass" className='w-full px-4 py-2 focus:outline-none border-b-2 border-slate-400' type='password' placeholder='Password' />
            <p className='text-red-500'>{errors.pass}</p>
        </div>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <input id='rmmbr' type="checkbox" />
                <label htmlFor="rmmbr">Remeber Me</label>
            </div>
            <a className='text-yellow-500' href="#">Forgot password</a>
        </div>
        <input className='w-full px-4 py-2 mt-4 rounded bg-yellow-500 hover:bg-yellow-400 duration-200 cursor-pointer' type="submit" value='Login' />
        <div className='flex justify-center gap-2 mt-4 text-sm'>
            <p>Don't have an account?</p>
            <p className='text-yellow-500 underline cursor-pointer' onClick={() => setloginstatus(!loginstatus)}>Create an account</p>
        </div>
    </form>
  )
}

export default Login