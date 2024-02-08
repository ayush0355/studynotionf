import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const[formData , setFormData]=useState({
        email:"",password:""
    });

    const[showPassword,setShowPassword]=useState(false);
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        console.log("submit sucess");
    }
    function changeHandler(event){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
    })
    }
  return (
    <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6 '>
        <label className='w-full'>
            <p className='text[0.800rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name="email"
            ></input>
        </label>

        <label className='w-full relative'>
            <p className='text[0.800rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
            <input
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
            ></input>
            <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={() =>setShowPassword((prev)=>!prev)}>
                { showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#afb2bf'/>):(<AiOutlineEye fontSize={24} fill='#afb2bf'/>)   }
            </span>
            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
            </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 '>Sign In</button>
    </form>
  )
}

export default LoginForm