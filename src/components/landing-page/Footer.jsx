import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import playStore from '../../assets/images/play-store.svg'
import appStore from '../../assets/images/app-store.svg'
import logo from '../../assets/images/ft-logo.png'


import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <h3 className="ft-head">
              Navigation
              </h3>
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="ft-head">
              Navigation
              </h3>
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="ft-head">
              Navigation
              </h3>
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="ft-head">
              DOWNLOAD NOW
              </h3>
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  <Image src={playStore} alt="" />  
                  </Link>
                 
                </li>
                <li>
                  <Link href='/'>
                  <Image src={appStore} alt="" />  
                  </Link>
                 
                </li>
              </ul>
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <h3 className="ft-head with-border mt-40">
              WE DELIVER TO
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
             
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
             
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="row">
            <div className="col-12">
                <div className="ft-bottom">
                    <div className="l-part">
                    <Link href='/' className='ft-logo'>
                        <Image src={logo} alt="" />
                    </Link>
                    </div>
                    <div className="m-part">
                        <p className="para">© 2023-24 My saloon Time. All Rights Reserved. </p>
                    </div>
                    <div className="r-part">
                        <ul className="soc-list">
                            <li>
                                <Link href='/'>
                                    <FacebookOutlinedIcon />
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <InstagramIcon />
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <YouTubeIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer