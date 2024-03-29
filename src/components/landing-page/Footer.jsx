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
                  About us  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  What We Do  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  To The Power of 10  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Donate  
                  </Link>
                </li>
                {/* <li>
                  <Link href='/'>
                  Home  
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="ft-head">
              What We Do
              </h3>
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  Encouraging Testing   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Strengthening Advocacy  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Sharing Information  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Building Leadership  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Engaging With Global Fund  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Shining a Light  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="ft-head">
              Legal
              </h3>
              <ul className="ft-list">
                <li>
                  <Link href='/'>
                  General Info   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Privacy Policy   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  Terms of  Service  
                  </Link>
                </li>
                {/* <li>
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
                </li> */}
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
                  abohar   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  adilabad  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  adoni  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  agra   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ahmedabad  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ahmednagar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  aizawl   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ajmer  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  akola  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  alappuzha   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  aligarh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  alipurduar  
                  </Link>
                </li>

                <li>
                  <Link href='/'>
                  allahabad   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  almora  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  alwar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ambajogai   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ambala  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ambikapur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ambur   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  amravati  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  amreli  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  amritsar   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  anand  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  anantapur  
                  </Link>
                </li>
              
                <li>
                  <Link href='/'>
                  ankleshwar   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  arakkonam  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  arambagh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  araria   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  arrah  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  asansol  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  aurangabad   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  aurangabadbihar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  azamgarh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  baddi   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  bagalkot  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  bagdogra  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  bahadurgarh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  bahraich  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  balaghat  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  balangir  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  balasore  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ballari  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ballia  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              
              <ul className="ft-list">
              <li>
                  <Link href='/'>
                  deoghar    
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  deoria-city  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dewas
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dhanbad   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dhar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dharamshala  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dharapuram   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dharmapuri  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dharwad  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dholpur   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dhule  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dibrugarh  
                  </Link>
                </li>

                <li>
                  <Link href='/'>
                  digboi   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dimapur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dindigul  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  diu   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  doddaballapura  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  duliajan  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dumka   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  dungarpur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  durgapur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  eluru   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  erode  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  etah  
                  </Link>
                </li>
              
                <li>
                  <Link href='/'>
                  etawah   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  faizabad  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  faridabad  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  faridkot   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  farrukhabad  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  fatehabad  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  fatehgarh-sahib   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  fatehpur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  fazilka  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  firozabad   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  firozpur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  gadag-betigeri  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  gadwal  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  gandhidham  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  gangapur-city  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  gangarampur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  gangtok  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  gauriganj  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  gaya  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
             
              <ul className="ft-list">
              <li>
                  <Link href='/'>
                  kishanganj   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kishangarh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kochi  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kohima   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kokrajhar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kolar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kolhapur   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kolkata  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kollam  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  koppal   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  korba  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kota  
                  </Link>
                </li>

                <li>
                  <Link href='/'>
                  kotdwar   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kothagudem  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kottarakkara  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kottayam   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kovilpatti  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kozhikode  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  krishnagiri   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  krishnangar
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kullu  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kumbakonam   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kurnool  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  kurukshetra  
                  </Link>
                </li>
              
                <li>
                  <Link href='/'>
                  kushalnagar   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  lakhimpur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  lalitpur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  latur   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  lonavla  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  lpu-phagwara  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  lucknow   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ludhiana  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  machilipatnam  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  madanapalle   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  madhubani  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  madikeri  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  madurai  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  mahbubnagar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  mahoba  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  mainpuri  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  malappuram  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  malda  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  malegaon  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
             
              <ul className="ft-list">
              <li>
                  <Link href='/'>
                  puttur   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rae-bareli  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  raghunathpur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  raichur   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  raiganj  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  raigarh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  raipur   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rajahmundry  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rajampet  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rajapalayam   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rajgarh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rajkot  
                  </Link>
                </li>

                <li>
                  <Link href='/'>
                  rajnandgaon   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rajsamand  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ramagundam  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ramanagara   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ramanathapuram  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ramgarh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rampur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ranaghat-wb   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ranchi  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rangia  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rangpo   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ranibennur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  raniganj  
                  </Link>
                </li>
              
                <li>
                  <Link href='/'>
                  ratalam   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ratnagiri  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ravulapalem  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rayachoty   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  royagada  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rewa  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rewari   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rishikesh  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  roha  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rohtak   
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  roorkee  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  ropar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rourkela  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  rudrapur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  sagar  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  saharanpur  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  saharsa  
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  salem  
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