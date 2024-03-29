'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import logo from '../../src/assets/images/main-logo.png'
import playStore from '../../src/assets/images/play-store.svg'
import appStore from '../../src/assets/images/app-store.svg'
import walletIcon from '../../src/assets/images/wallet.svg'
import profileIcon from '../../src/assets/images/profile-icon.svg'
import Image from 'next/image';


const MainHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  function handleSessionUnit(){
      // Check if an access token exists in local storage
      console.log("check the access token");``
      const accessToken = sessionStorage.getItem("CustomerUserAccessToken");
      console.log(accessToken);
      if (accessToken) {
        // User is authenticated
        setIsAuthenticated(true);
        console.log("access token");
      } else {
        // User is not authenticated
        setIsAuthenticated(false);
      }
 }

 useEffect(() => {
  handleSessionUnit();
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
  
   
  }, [])
     

 

  return (
    <nav className={`ld-main-nav hm-main-nav ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
            <div className="ld-nav-inner">
                <div className="l-part">
                    <Link href="/" className='main-nav-logo'>
                        <Image src={logo} width={236} height={106} alt="my saloon time" />
                    </Link>
                </div>
                <div className="r-part">
                    <div className="app-links-nav">
                      <Link href="/">
                        <Image src={playStore} alt="" />
                      </Link>
                      <Link href="/">
                        <Image src={appStore} alt="" />
                      </Link>
                    </div>
                    
                   {isAuthenticated && (
                    <div className="nav-wallet-wrap">
                    <div className="ic">
                      <Image src={walletIcon} alt="" />
                      <span>1570</span>
                    </div>
                    <p>Wallet</p>
                  </div>
                   )} 
                  <Link href="/" className="nav-profile-wrap">
                      <Image src={profileIcon} alt="" />
                      <span>{isAuthenticated ? 'Rahul' : 'Guest'}</span>
                    </Link>  
                   
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MainHeader






