import React from 'react';
import './Navbar.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='notionlogo'>
        <Image
          src='/Notionapplogo.png'
          width={55}
          height={55}
          alt='...'
        />
        <p className='notion'>Notion</p>
      </div>
      <div className='op'>
        product
        Dowload
        Solutions
        Resources
        Pricing
       
      </div>
      <div className='log'>
        <button className='request'>Request a demo</button>
        <p className='bar'>|</p>
        <button className='request'>Log in</button>
        <button className='getnotion'>Get Notion free</button>
      </div>
    </div>
  )
}

export default Navbar