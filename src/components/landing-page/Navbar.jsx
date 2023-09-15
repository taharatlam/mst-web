'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'

import logo from '../../assets/images/main-logo.png'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        // Check if the user has scrolled past a certain point to make the navbar sticky
        if (window.scrollY > 250) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <nav className={`ld-main-nav ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
            <div className="ld-nav-inner">
                <div className="l-part">
                    <Link href="/" className='main-nav-logo'>
                        <Image src={logo} width={236} height={106} alt="my saloon time" />
                    </Link>
                </div>
                <div className="r-part">
                    <Link href="/" className='main-btn border-btn'>
                        <span>Login</span>
                    </Link>
                    <Link href="/" className='main-btn'>
                        <span>Get The App Now</span>
                    </Link>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar