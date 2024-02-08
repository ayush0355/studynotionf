import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import {toast} from "react-hot-toast";


const Navbar = (props) => {

    let isLogegdIn=props.isLogegdIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      
        <Link to="/">
             <img src={logo} alt='Logo' width={160} height={32} loading='lazy'></img>    
        </Link> 
        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4   '>
            {   !isLogegdIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Login 
                    </button>
                </Link>
            }
            {
                !isLogegdIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up 
                    </button>
                </Link>
            }
            {
                isLogegdIn &&
                <Link to="/">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out 
                    </button>
                </Link>
            }
            {
                isLogegdIn &&
                <Link to="/Dashboard">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard 
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
