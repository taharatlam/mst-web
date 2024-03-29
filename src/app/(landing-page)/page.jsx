"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import heroImg from "../../assets/images/landing-hero-banner-main.png";
import locateIcon from "../../assets/images/orange-location-icon.svg";
import detectLocationIcon from "../../assets/images/locate-icon.svg";
import homeIcon from "../../assets/images/home-salon.svg";
import affordableIcon from "../../assets/images/affordable.svg";
import productIcon from "../../assets/images/product.svg";
import circEl from "../../assets/images/circ-gr.svg";
import iphoneMockup from "../../assets/images/iphone-mockup.png";
import appSS from "../../assets/images/app-ss.jpg";
import downHand from "../../assets/images/down-hand.png";
import qrImg from "../../assets/images/qr.png";
import playStore from "../../assets/images/play-store.svg";
import appStore from "../../assets/images/app-store.svg";
import doodleBg from "../../assets/images/landing-hero-doodle.png";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import services from "../../services";
import FaqSection from "../../components/landing-page/FaqSection";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation'
import debounce from 'lodash/debounce';




export default function Home() {

  useEffect(() => {
    getHomePageData();
    getDataFromCookies();

  }, []);
  const router = useRouter();
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const [homePageData, setHomePageData] = useState(null);
  const [faqArray, setFaqArray] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userAddress, setUserAddress] = useState();
  const [searchAddress, setSearchAddress] = useState();



  const getHomePageData = async () => {
    try {
      const response = await services.Customer.GET_CUSTOMER_HOME_PAGE();
      console.log(response);
      setHomePageData({
        popularCities: response.data.popularCities,
        heroHeadings: response.data.heroHeadings,
        faq: response.data.faq,
        secondSec: response.data.secondSec,
        appSection: response.data.appSection,
      });
      setFaqArray(response.data.faq);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };



  const searchUserLocation = debounce(async (value) => {
    try {
      console.log("debouncedSearchUserLocation  value:", value);
      setUserAddress(value);
      const response = await services.GetUserLocation.SEARCH_USER_LOCATION(value);
      if (response && response.data && response.data.predictions) {
        setIsLocationOpen(true)
        setSearchAddress(response.data.predictions);
      }
    }
    catch (err) {
      console.log(err);
    }
  }, 500);


  const getUserLoaction = async () => {
    const successCallback = async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apiKey = 'AIzaSyCkQqWwnxEPIrUswczekreqJehDjI1pdlQ';
      Cookies.set("latitude", latitude, { expires: 7 });
      Cookies.set('longitude', longitude, { expires: 7 });

      try {
        const response1 = await services.GetUserLocation.GET_USER_LOCATION(latitude, longitude, apiKey);
        console.log(response1.data.results[0].formatted_address, "jjjjjjjjjj");
        setUserAddress(response1.data.results[0].formatted_address);
        setIsLocationOpen(false)
      }
      catch (errr) {
        console.log(errr);
      }
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  // const searchUserLocation = async (e) => {
  //   setUserAddress(e.target.value);
  //   searchUserLocation(e.target.value);
  //   //   setTimeout(async () => {
  //   //     try {
  //   //       const response = await services.GetUserLocation.SEARCH_USER_LOCATION(userAddress);
  //   //       if (response && response.data && response.data.predictions) {
  //   //         setSearchAddress(response.data.predictions);
  //   //       }

  //   //       console.log(searchAddress, '99999999999999');
  //   //     }
  //   //     catch (err) {
  //   //       console.log(err);
  //   //     }
  //   //   }, 2000)
  // }


  const getDataFromCookies = async () => {

    const latitude = Cookies.get('latitude');
    const longitude = Cookies.get('longitude');
    const apiKey = 'AIzaSyCkQqWwnxEPIrUswczekreqJehDjI1pdlQ';

    try {
      const response1 = await services.GetUserLocation.GET_USER_LOCATION(latitude, longitude, apiKey);
      console.log(response1.data.results[0].formatted_address, "jjjjjjjjjj");
      if (response1.data.results[0].formatted_address) {
        router.push('/home');
      }
      setUserAddress(response1.data.results[0].formatted_address);
      setIsLocationOpen(false)
    }
    catch (errr) {
      console.log(errr);
    }
  }




  return (
    <main className="main-landing-page">
      <div className="main-header">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12">
            <div className="container-left">
              <div className="ld-ban-con">
                <div className="ld-ban-heading">
                  <h3>
                    You’ll Get
                    <div>
                      <div>
                        {homePageData &&
                          homePageData?.heroHeadings.map((item, index) => {
                            return <span key={index}>{item}</span>;
                          })}
                        {/* <span>1000+ Salon Experts 2</span>
                        <span>1000+ Salon Experts 3</span> */}
                      </div>
                    </div>
                  </h3>
                </div>
                <p className="para mt-3">
                  Get your self ready by your near by best salons
                </p>
                <div className="locate-search-wrapper mt-3">
                  <div className="locate-search-input">
                    <Image src={locateIcon} alt="" width={35} height={35} />
                    <input
                      type="text"
                      placeholder="Enter your location"
                      onChange={(e) => {
                        // setUserAddress(e.target.value);
                        searchUserLocation(e.target.value);
                      }}
                      // value={userAddress}
                      defaultValue={userAddress}
                      onClick={() => setIsLocationOpen((prev) => !prev)}
                    />
                  </div>
                  <button onClick={() => getUserLoaction()}>
                    <Image
                      src={detectLocationIcon}
                      alt=""
                      width={35}
                      height={35}
                    />
                    <span>Locate Me</span>
                  </button>
                  {/* locations */}
                  {isLocationOpen && (
                    <div className="drop-locations-wrap">
                      <ul>
                        {/* <li>
                          <button
                            onClick={() => setIsLocationOpen((prev) => !prev)}
                          >
                            <FmdGoodOutlinedIcon />
                            <span>
                             {userAddress}
                            </span>
                          </button>
                        </li> */}
                        {
                          searchAddress?.map((item, index) => {

                            return (
                              <li key={index}>
                                <button
                                  onClick={() => {
                                    setIsLocationOpen((prev) => !prev);
                                    setUserAddress(item.description)
                                  }}
                                >
                                  <FmdGoodOutlinedIcon />
                                  <span>
                                    {item.description}
                                  </span>
                                </button>
                              </li>
                            )
                          })
                        }
                        {/* <li>
                          <button
                            onClick={() => setIsLocationOpen((prev) => !prev)}
                          >
                            
                            <FmdGoodOutlinedIcon />
                            <span>
                              Noorani Nagar, Indore, Madhya Pradesh, India
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setIsLocationOpen((prev) => !prev)}
                          >
                            <FmdGoodOutlinedIcon />
                            <span>
                              Noorani Masjid, 6th Main Road, Ilyas Nagar,
                              Kumaraswamy Layout, Bengaluru, Karnataka, India
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setIsLocationOpen((prev) => !prev)}
                          >
                            <FmdGoodOutlinedIcon />
                            <span>
                              NOORANI MASJID, Rani Sati Road, Malad, MBH Colony,
                              Pathan Wadi, Malad East, Mumbai, Maharashtra,
                              India
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setIsLocationOpen((prev) => !prev)}
                          >
                            <FmdGoodOutlinedIcon />
                            <span>
                              Noorani Chowk, Govind Nagar, Raipur, Chhattisgarh,
                              India
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setIsLocationOpen((prev) => !prev)}
                          >
                            <FmdGoodOutlinedIcon />
                            <span>
                              Noorani, Valakkad, Palakkad, Kerala, India
                            </span>
                          </button>
                        </li> */}
                      </ul>
                    </div>
                  )}
                </div>
                {homePageData &&
                  homePageData.popularCities &&
                  homePageData.popularCities.length ? (
                  <div className="cities-container">
                    <h3 className="sm-head">Popular cities</h3>
                    <div className="cities-wrap">
                      {homePageData?.popularCities?.map((city, index) => {
                        return (
                          <button
                            className={selectedCity === city ? "active" : ""}
                            key={index}
                            onClick={() => setSelectedCity(city)}
                          >
                            <span>{city}</span>
                          </button>
                        );
                      })}

                    </div>
                  </div>
                ) :
                  <div className="cities-container">
                    <h3 className="sm-head">Popular cities</h3>
                    <div className="cities-wrap">

                      <button
                        className="active"
                      >
                        <span>Indore</span>
                      </button>

                      <button>
                        <span>Mumbai</span>
                      </button>
                      <button>
                        <span>Pune</span>
                      </button>
                      <button>
                        <span>Banglore</span>
                      </button>
                      <button>
                        <span>Chennai</span>
                      </button>
                      <button>
                        <span>Kolkata</span>
                      </button>
                      <button>
                        <span>Lonavala</span>
                      </button>
                      <button>
                        <span>Ujjain</span>
                      </button>
                      <button>
                        <span>Hyderabad</span>
                      </button>
                      <button>
                        <span>Chandigarh</span>
                      </button>
                      <button>
                        <span>Delhi</span>
                      </button>
                      <button>
                        <span>Noida</span>
                      </button>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-12">
            <div className="ld-hero-ban">
              <div className="ld-hero-im">
                <Image
                  src={doodleBg}
                  className="doodle"
                  width={878}
                  height={820}
                />
                <Image src={heroImg} width={878} height={820} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        homePageData && homePageData.secondSec && homePageData.secondSec.length ? (<section className="sec ft-sec light-bg">
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <h3 className="sec-head mb-40">{homePageData.secondSec.heading}</h3>
              </div>
            </div>
            {homePageData?.secondSec?.data?.map((item, index) => {
              return (
                <div className="col-lg-4 col-12" key={index}>
                  <div className="ft-card">
                    <div className="ft-icon">
                      <Image src={item.icon} alt="" />
                    </div>
                    <div className="ft-con">
                      <h3>{item.heading}</h3>
                      <p className="para">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="row row-gap-25">


            </div>
          </div>
        </section>) : <section className="sec ft-sec light-bg">
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <h3 className="sec-head mb-40">Our Awesome features</h3>
              </div>
            </div>
            <div className="row row-gap-25">
              <div className="col-lg-4 col-12">
                <div className="ft-card">
                  <div className="ft-icon">
                    <Image src={homeIcon} alt="" />
                  </div>
                  <div className="ft-con">
                    <h3>At home salon</h3>
                    <p className="para">
                      Avoid the hassle of visiting parloursand get spa and salon
                      services for men and women at home.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="ft-card">
                  <div className="ft-icon">
                    <Image src={productIcon} alt="" />
                  </div>
                  <div className="ft-con">
                    <h3>Option to use your products</h3>
                    <p className="para">
                      Get the maximum transparency of price by using your product
                      and just paying for the service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="ft-card">
                  <div className="ft-icon">
                    <Image src={affordableIcon} alt="" />
                  </div>
                  <div className="ft-con">
                    <h3>Most Affordable</h3>
                    <p className="para">
                      Book your desired spa & salon service from the mobile in
                      your hand with the MySalonTime App.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>}
      {homePageData && homePageData.appSection ? (<section className="sec app-sec pb-0">
        <Image src={circEl} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="sec-head mb-80 text-center">
                {homePageData.appSection.heading}
              </h3>
            </div>
          </div>
          <div className="row row-gap-25">
            <div className="col-lg-4 col-12">
              <div className="get-app-con">
                <h3 className="sec-head sm">{homePageData.appSection.leftHeading}</h3>
                <p className="para">
                  {homePageData.appSection.leftDescription}
                </p>
                <ul className="em-ph-toggle-wrap">
                  <li>
                    <button className="active">
                      <span>Email</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Phone</span>
                    </button>
                  </li>
                </ul>
                <div className="email-sub-wrap">
                  <input type="text" placeholder="Enter Email Address" />
                  <button>
                    <span>Get Link</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="app-mockup">
                <Image src={iphoneMockup} alt="" className="mockup" />
                <Image src={appSS} className="app-ss" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h3 className="text-center sm">
                <Image src={downHand} alt="" className="downHandImg" />
              </h3>
              <div className="qr-im">
                <Image src={qrImg} alt="" />
              </div>
              <div className="or-wrap">
                <span>OR</span>
              </div>
              <p className="para text-center dw-text">DOWNLOAD NOW ON</p>
              <div className="dw-btns">
                <Link href="/" passHref={true}>
                  <Image src={playStore} alt="" />
                </Link>
                <Link href="/" passHref={true}>
                  <Image src={appStore} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>) : <section className="sec app-sec pb-0">
        <Image src={circEl} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="sec-head mb-80 text-center">
                Get Amazing Deals On Our App
              </h3>
            </div>
          </div>
          <div className="row row-gap-25">
            <div className="col-lg-4 col-12">
              <div className="get-app-con">
                <h3 className="sec-head sm">Get App</h3>
                <p className="para">
                  We will send you a link, open it on your phone to download the
                  app
                </p>
                <ul className="em-ph-toggle-wrap">
                  <li>
                    <button className="active">
                      <span>Email</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Phone</span>
                    </button>
                  </li>
                </ul>
                <div className="email-sub-wrap">
                  <input type="text" placeholder="Enter Email Address" />
                  <button>
                    <span>Get Link</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="app-mockup">
                <Image src={iphoneMockup} alt="" className="mockup" />
                <Image src={appSS} className="app-ss" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <h3 className="text-center sm">
                <Image src={downHand} alt="" className="downHandImg" />
              </h3>
              <div className="qr-im">
                <Image src={qrImg} alt="" />
              </div>
              <div className="or-wrap">
                <span>OR</span>
              </div>
              <p className="para text-center dw-text">DOWNLOAD NOW ON</p>
              <div className="dw-btns">
                <Link href="/" passHref={true}>
                  <Image src={playStore} alt="" />
                </Link>
                <Link href="/" passHref={true}>
                  <Image src={appStore} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {faqArray && <FaqSection faqArray={faqArray} />}
    </main>
  );
}
