
import React from 'react';
import M1 from '../assets/M1.jpg';
import M2 from '../assets/M2.jpg';
import M3 from '../assets/M3.jpg';
import M4 from '../assets/M4.jpg';
import M5 from '../assets/M5.jpg';
import M6 from '../assets/M6.jpg';
import SelectsCard from './SelectsCard';

const Beaches= () => {
    return (
      <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard  bg={M2} text='Bora Bora'/>
      <SelectsCard  bg={M3} text='Maldives' />
      <SelectsCard  bg={M4} text='Antigua' />
      <SelectsCard  bg={M1} text='Cozumel' />
      <SelectsCard  bg={M6} text='Jamaica' />
      <SelectsCard  bg={M5} text='Key West' />
      </div>
    )
  }
  
  export default Beaches