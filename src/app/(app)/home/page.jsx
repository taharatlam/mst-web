'use client'
import React, { useRef, useState, useEffect } from 'react'
import services from '../../../services'
import Image from 'next/image'
import Link from 'next/link'
import HeaderBg from '../../../assets/images/hm-banner-bg.jpg'
import searchIcon from '../../../assets/images/search-icon.svg'
import nextImage from '../../../assets/images/next.svg'
import prevImage from '../../../assets/images/prev.svg'
import offer1 from '../../../assets/images/offer1.png'
import offer2 from '../../../assets/images/offer2.png'
import offer3 from '../../../assets/images/offer3.png'
import offer4 from '../../../assets/images/offer4.png'
import hairCut from '../../../assets/images/haircut.png'
import shaving from '../../../assets/images/shaving.png'
import hairSpa from '../../../assets/images/hairspa.png'
import facial from '../../../assets/images/facial.png'
import manicure from '../../../assets/images/manicure.png'
import settingicon from '../../../assets/images/filter-setting-icon.svg'
import dropIcon from '../../../assets/images/dropicon.svg'
import crossIcon from '../../../assets/images/cross.svg'
import ratingStar from '../../../assets/images/rating-star.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../../components/ProductCard'
import debounce from 'lodash/debounce';

// import services from "../../services";

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Home() {

  const [drop, setDrop] = useState(false);
  const [homePageData, setHomePageData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceList, setServiceList] = useState([])
  useEffect(() => {
    getHomePageData();
  }, []);

  const getHomePageData = async () => {
    try {
      const response = await services.Home.GET_CUSTOMER_HOME_PAGE();
      setHomePageData({
        ...response.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (val) => {
    setSearchQuery(val);
  };

  const getServices = debounce (async (search = null) => {
    console.log(search);
    try {
      let query = {};
      if (search) query.search = search;
      query = new URLSearchParams(query);
      const response = await services.Home.GET_All_Vendor_Services(query);
      if (response && response.data) {
        console.log(response.data, "pppppppppppppppppppppp");
        setServiceList(response.data);
      }
    } catch (err) {
      console.error('Error performing search:', err.message);
    }
  },5000)

  return (
    <main className='main-hm-page'>
      <header className="main-hm-header">
        <Image src={HeaderBg} alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <h3 className='text-center'>
                Book from <span>1000+</span> Beauty Experts
              </h3>
              <div className={`hm-search-container ${drop && 'active'}`}>
                <div className="hm-search-inner">
                  <div className="hm-search-wrapper">
                    <Image src={searchIcon} alt="" />
                    <input onClick={() => setDrop(state => !state)}
                      onChange={(e) => {
                        setDrop(true);
                        handleSearch(e.target.value);
                        getServices(e.target.value);
                      }} type="text" placeholder='Enter any business or services' value={searchQuery} />

                    {/* <button> c
                      <span>SEARCH</span>
                    </button> */}
                  </div>
                  {/* category */}
                  <ul className="hm-banner-tags-wrapper">
                    {homePageData?.categories.map((item, index) => {
                      return (<li key={index}>
                        <button className={selectedCategory === item.id ? 'active' : ''} onClick={() => { setSelectedCategory(item.id) }}><span>{item.name}</span></button>
                      </li>)
                    })}
                    {/* <li>
                      <button> 
                        <span>Hair</span>
                       </button>
                    </li>
                    <li>
                      <button><span>Nail </span></button>
                    </li>
                    <li>
                      <button><span>Skin</span></button>
                    </li>
                    <li>
                      <button><span>Makeup </span></button>
                    </li>
                    <li>
                      <button><span>Tanning </span></button>
                    </li>
                    <li>
                      <button><span>Skin </span></button>
                    </li> */}
                  </ul>




                  <div className="hm-search-drop">
                    <div className="popular-srvs">
                      <div className="tp-wrap ">
                        <h3 className="sec-head xxsm lighter mb-0">
                          🔥Popular Services
                        </h3>
                        <div className="s-nav">
                          <button>
                            <Image src={prevImage} alt="" />
                          </button>
                          <button>
                            <Image src={nextImage} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <Swiper breakpoints={{
                      0: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }} navigation={false} modules={[Navigation]} className="mySwiper hm-search-swiper">
                      {
                        serviceList.map((item, index) => (
                          <SwiperSlide key={index}>
                            <ProductCard sm={true}
                              // homePageData= {homePageData ? homePageData.categories[1].name : 'bholaram'}
                              data={item}
                            />
                          </SwiperSlide>

                        ))
                      }

                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>





      {/* offer section  */}





      <section className="sec hm-offer-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-wrap">
                <h3 className="sec-head xsm lighter">
                  Best offers for you
                </h3>
                <div className="s-nav">
                  <button>
                    <Image src={prevImage} alt="" />
                  </button>
                  <button>
                    <Image src={nextImage} alt="" />
                  </button>
                </div>
              </div>
              <Swiper breakpoints={{
                0: {
                  slidesPerView: 1.3,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 20,
                },
              }} navigation={false} modules={[Navigation]} className="sm-offer-swiper">
                <SwiperSlide>
                  <Link className="hm-offer-card" href={'/'}>
                    <Image src={offer1} layout='fill' objectFit='cover' alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className="hm-offer-card" href={'/'}>
                    <Image src={offer2} layout='fill' objectFit='cover' alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className="hm-offer-card" href={'/'}>
                    <Image src={offer3} layout='fill' objectFit='cover' alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className="hm-offer-card" href={'/'}>
                    <Image src={offer4} layout='fill' objectFit='cover' alt="" />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>




      {/* whats on your mind */}




      <section className="sec pt-0 hm-offer-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-wrap">
                <h3 className="sec-head xsm lighter">
                  What’s on your mind?
                </h3>
                <div className="s-nav">
                  <button>
                    <Image src={prevImage} alt="" />
                  </button>
                  <button>
                    <Image src={nextImage} alt="" />
                  </button>
                </div>
              </div>
              <Swiper slidesPerView={'auto'} spaceBetween={30} navigation={false} modules={[Navigation]} className="hm-cat-swiper">
                {homePageData?.categories.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Link href="/" className='hm-cat-wrap ' >
                        <Image src={hairCut} alt="" />
                        <span>{item.name}</span>
                      </Link>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              {/* <Swiper slidesPerView={'auto'} spaceBetween={30} navigation={false} modules={[Navigation]} className="hm-cat-swiper">
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={hairCut} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={shaving} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={hairSpa} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={facial} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={manicure} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={hairCut} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={shaving} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={hairSpa} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={facial} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={manicure} alt="" />
                    <span>hair cut</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="/" className='hm-cat-wrap'>
                    <Image src={manicure} alt="" />
                    <span>hair cut</span>
                  </Link> 
                </SwiperSlide>
              </Swiper> */}
            </div>
          </div>
        </div>
      </section>




      {/* services section  */}
      <section className="sec pt-0 hm-offer-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-wrap">
                <h3 className="sec-head xsm lighter">
                  Frequently Booked Services
                </h3>
                <div className="s-nav">
                  <button>
                    <Image src={prevImage} alt="" />
                  </button>
                  <button>
                    <Image src={nextImage} alt="" />
                  </button>
                </div>
              </div>
              <Swiper breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
              }} navigation={false} modules={[Navigation]} className="hm-cat-swiper">
                {
                  [...Array(8)].map((item, index) => (

                    <SwiperSlide key={index}>
                      <ProductCard
                        comboSrv={true}
                        homePageData={homePageData ? homePageData.categories[2].name : 'bholaram'}
                      />
                    </SwiperSlide>
                  ))
                }

              </Swiper>
            </div>
          </div>
        </div>
      </section>




      {/* offer section */}
      <section className="sec pt-0 hm-offer-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-wrap">
                <h3 className="sec-head xsm lighter">
                  Best Combos For You
                </h3>
                <div className="s-nav">
                  <button>
                    <Image src={prevImage} alt="" />
                  </button>
                  <button>
                    <Image src={nextImage} alt="" />
                  </button>
                </div>
              </div>
              <Swiper breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
              }} navigation={false} modules={[Navigation]} className="hm-cat-swiper">
                {
                  [...Array(8)].map((item, index) => (

                    <SwiperSlide key={index}>
                      <ProductCard
                        comboSrv={true}

                      />
                    </SwiperSlide>
                  ))
                }

              </Swiper>
            </div>
          </div>
        </div>
      </section>





      <section className="sec pt-0 hm-pr-sec">
        <div className="hm-filter-bar">
          <div className="container">
            <div className="row">
              <div className=" col-12">
                <div className="filters-wrap">
                  <div className='l-part'>
                    <button className="filter-btn">
                      <span>1</span>
                      <p>Filter</p>
                      <Image src={settingicon} alt="" />
                    </button>
                    <div className="filter-area">
                      <Swiper slidesPerView={'auto'} spaceBetween={10} navigation={false} modules={[Navigation]} className="hm-cat-swiper">
                        <SwiperSlide>
                          <div className="select-wrap">
                            <select name="" id="">
                              <option value="">Sort by</option>
                            </select>
                            <Image src={dropIcon} alt="" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <button className="flt-btn">
                            <span>Within 1 km</span>
                          </button>
                        </SwiperSlide>
                        <SwiperSlide>
                          <button className="flt-btn active">
                            <Image src={ratingStar} alt="" />
                            <span>4.5+</span>
                            <Image src={crossIcon} className='cross' alt="" />
                          </button>
                        </SwiperSlide>
                        <SwiperSlide>
                          <button className="flt-btn">
                            <span>Offers</span>
                          </button>
                        </SwiperSlide>
                        <SwiperSlide>
                          <button className="flt-btn">
                            <span>Nearest</span>
                          </button>
                        </SwiperSlide>
                        <SwiperSlide>
                          <button className="flt-btn">
                            <span>Cost: High to Low</span>
                          </button>
                        </SwiperSlide>
                        <SwiperSlide>
                          <button className="flt-btn">
                            <span>Cost: Low to High</span>
                          </button>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <div className="search-bar">
                    <Image src={searchIcon} alt="" />
                    <input type="text" placeholder='Search anything here' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-gap-25">
            {
              [...Array(8)].map((item, index) => (
                <div className="col-lg-3 col-md-6 col-12" key={index}>
                  <ProductCard />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

