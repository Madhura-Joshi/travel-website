import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaInstagram,FaReddit,FaTwitter,FaYoutube} from 'react-icons/fa';

const Navbar = () => {
   const [nav,setNav]=useState(false);
   const [logo,setlogo]=useState(false);
   const Handle=()=>{
    setNav(!nav);
    setlogo(!logo)
   };

  return (
    <div className='flex  w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
    <div>
    <h1 onClick={Handle} className={logo ? 'hidden':'block'}>Holiday Trip</h1>
    </div>
    <ul className='hidden md:flex' >
      <li>Home</li>
      <li>Attraction & Tours</li>
      <li>Destinations</li>
      <li>Book</li>
      
    </ul>

    <div className='hidden md:flex'>
    <BiSearch className='mr-2' size={20}/>
    <BsPerson size={20}/>
    </div>

 
    <div onClick={Handle} ClassName='md:hidden z-10' >
        {nav ? <AiOutlineClose size={20}/> :<HiOutlineMenuAlt4 size={20}/>}
    
    </div>
    {/*Hidden Navbar */}  
    <div  onClick={Handle} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
    <ul>
    <h1>Aquaholic.</h1>
      <li className='border-b'>Home</li>
      <li className='border-b'>Attraction & Tours</li>
      <li className='border-b'> Destinations</li>
      <li className='border-b' >Book</li>
      <div className='flex flex-col'>
        <button className='my-6'>My Account</button>
        <button>Search</button>
      </div>
      <div className='flex justify my-6'>
      <FaFacebook className='icon'/>
      <FaInstagram className='icon'/>
      <FaTwitter className='icon'/>
      <FaYoutube className='icon'/>
      <FaReddit className='icon'/>
      </div>
      
    </ul>
    </div>
    </div>
  )
}

export default Navbar