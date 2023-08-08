import React from 'react'
import vid from '../assets/VID.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const F = () => {
  return (
    <div className='w-full h-screen relative'>
        <video
         className='w-full h-full object-cover' 
         src={vid} 
        autoPlay
         loop 
         muted/>
         <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
         <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <i><h1>Enjoy your Dream Holiday</h1>
            <h2 className='py-4'>Travel and enjoy,be Safe!</h2></i>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                <input className='bg-transparent w-[300px] sn:w[400px] font-[Poppins] focus:outline-none' type='text' placeholder='Search for Destinations'></input>
                </div>
                <div>
                    <button>
                    <AiOutlineSearch size={20} className='icon' style={{color:'white'}}/></button>
                </div>
            </form>
         </div>
    </div>
  );
};

export default F;