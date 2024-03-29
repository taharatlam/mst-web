'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import services from '../../services'
import logo from '../../assets/images/main-logo.png'


const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [data , setdata] =  useState();
    const [data1 , setdata1] =  useState();

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
       
    }, []);
 function handleSessionUnit(){
    console.log(sessionStorage.getItem('CustomerUserAccessToken'), 'tokennnn')
 }

    //////////////Generate OTP ////////////////

//    const handlegenerateOTP = async() =>{
//     let phoneNumber =  prompt('enter your number');
//     let countryCode = prompt('enter country code');
//     console.log(countryCode);
//     console.log(phoneNumber);
    
//     setdata({phoneNumber : phoneNumber , countryCode : countryCode});
//     console.log(data,'data is not set');
//     try{
//      const response =  await services.Login.GENERATE_MOBILE_OTP(data);
//      console.log(response,'9999999999999999999');
//     }
//     catch(err)
//     {
//         console.log(err,'5555555555555555');
//     }

//    }
   ///////////////////////////////login with otp ////////////////

//    const handleLogin = async() =>{
//     let phoneNumber =  prompt('enter your number');
//     let countryCode = prompt('enter country code');
//     let otp =  prompt('enter code');
//     let role = prompt ('enter role');
//     console.log(countryCode);
//     console.log(phoneNumber);
//     console.log(otp);
//     console.log(role);
    
//     setdata1({phoneNumber : phoneNumber , countryCode : countryCode, otp: otp, role : role});
//     console.log(data1,'data is not set');
//     try{
//      const response =  await services.Login.LOGIN_WITH_MOBILE_OTP(data1);
//      console.log(response,'9999999999999999999');
//      const accessToken  =  response.data.tokens.access.token;
//      console.log(accessToken,'444444444444444444444');
//      sessionStorage.setItem("CustomerUserAccessToken", accessToken);
//     }
//     catch(err)
//     {
//         console.log(err,'5555555555555555');
//     }

//    }





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
                        <span >Login</span>
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