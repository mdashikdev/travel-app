import React, { useContext } from 'react'
import { useFormik  } from 'formik';
import * as yup from 'yup';
import { createUserwithEmailAndPassword } from './firebaseManager'
import { useLocation, useNavigate } from 'react-router-dom';
import { TravelContext } from '../../App';


function Register({loginstatus,setloginstatus}) {
    const navigate = useNavigate();
    const location = useLocation();

    const redirect =location?.state?.from ? `..${location?.state?.from}` : '../';
    const [des, setdes,currentUser, setcurrentUser] = useContext(TravelContext);


    const {values,errors,handleSubmit,handleChange,handleBlur} = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            pass:'',
            confirmpass:''
        },
        validationSchema : yup.object({
            firstname:yup.string().min(2,'Minimum 2 word required').required('First Name Required'),
            lastname:yup.string().min(3,'Minimum 3 word required').required('Last Name Required'),
            email:yup.string().email().required('Email is required'),
            pass:yup.string().required('Please Enter your password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
            confirmpass: yup.string().oneOf([yup.ref('pass'), "Password dosn't match"])
        }),
        onSubmit:(values) => {
            createUserwithEmailAndPassword(`${values.firstname} ${values.lastname}`,values.email,values.pass)
            .then(res => {
                setcurrentUser(res)
                navigate(redirect)
            })
            .catch(err => {
                console.log(err)
            })
        }
    });

  return (
    <form className='lg:w-4/12 md:lg:w-4/12 w-10/12 p-8 rounded-lg shadow' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold mb-3'>Create an account</h2>
        <div className='flex flex-col gap-4 py-4'>
            <input onChange={handleChange} onBlur={handleBlur} value={values.firstname} id="firstname" className='w-full px-4 py-2 focus:outline-none border-b-2 border-slate-400' type='text' placeholder='First Name..' />
            <p className='text-red-500'>{errors.firstname}</p>
            <input onChange={handleChange} onBlur={handleBlur} value={values.lastname} id="lastname" className='w-full px-4 py-2 focus:outline-none border-b-2 border-slate-400' type='text' placeholder='Last Name..' />
            <p className='text-red-500'>{errors.lastname}</p>
            <input onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" className='w-full px-4 py-2 focus:outline-none border-b-2 border-slate-400' type='email' placeholder='Email..' />
            <p className='text-red-500'>{errors.email}</p>
            <input onChange={handleChange} onBlur={handleBlur} value={values.pass} id="pass" className='w-full px-4 py-2 focus:outline-none border-b-2 border-slate-400' type='password' placeholder='Password' />
            <p className='text-red-500'>{errors.pass}</p>
            <input onChange={handleChange} onBlur={handleBlur} value={values.confirmpass} id='confirmpass' className='w-full px-4 py-2 focus:outline-none border-b-2 border-slate-400' type='password' placeholder='Confirm Password' />
            <p className='text-red-500'>{errors.confirmpass}</p>
        
        </div>
        <input className='w-full px-4 py-2 mt-4 rounded bg-yellow-500 hover:bg-yellow-400 duration-200 cursor-pointer' type="submit" value='Create an account' />
        <div className='flex justify-center gap-2 mt-4 text-sm'>
            <p>Already have an account?</p>
            <p className='text-yellow-500 underline cursor-pointer' onClick={() => setloginstatus(!loginstatus)}>Login</p>
        </div>
    </form>
  )
}

export default Register