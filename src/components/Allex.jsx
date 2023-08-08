import React from 'react'
import M1 from '../assets/M1.jpg';
import M2 from '../assets/M2.jpg';
import M3 from '../assets/M3.jpg';
import M4 from '../assets/M4.jpg';
import M5 from '../assets/M5.jpg';
import M6 from '../assets/M6.jpg';

const Allex = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Resorts-Closure to Nature</h1>
        <p>The ultimate luxury</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 '>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'src={M1}/>
            <img className='w-full h-full object-cover'src={M2}/>
            <img className='w-full h-full object-cover'src={M3}/>
            <img className='w-full h-full object-cover'src={M4}/>
            <img className='w-full h-full object-cover'src={M5}/>
            
        </div>
    </div>
  )
}

export default Allex