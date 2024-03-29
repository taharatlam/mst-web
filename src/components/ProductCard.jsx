import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import certified from '../assets/images/certified.svg'
import prImg from '../assets/images/pr-img.jpg'
import ratingStar from '../assets/images/rating-star.svg'
import homeSalon from '../assets/images/home-service.svg'
import unisex from '../assets/images/unisex.svg'
import spa from '../assets/images/spa.svg'
import salon from '../assets/images/salon-service.svg'
import comb from '../assets/images/comb-scissor.svg'
import locat from '../assets/images/location-icon.svg'
import comboPr from '../assets/images/combo-img.png'


const ProductCard = ({ sm, comboSrv, data }) => {
    return (
        <article className={`product-card ${sm && 'sm-card'}`}>
            <Link href="/">
                <div className="pr-top-wrap">
                    <Image src={!comboSrv ? prImg : comboPr} alt='' layout='fill' objectFit='cover' className='pr-img' />
                    {
                        !sm &&
                        <>
                            <Image src={certified} alt="" className='certified-tag' />
                            <button className='like-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none" viewBox="0 0 27 24">
                                    <path stroke="#1D1D1D" strokeOpacity=".75" strokeWidth="2.154" d="M1.606 7.778v.004c0 1.616.631 3.132 1.784 4.278l.001.002 10.09 9.995L23.556 12.04a5.981 5.981 0 0 0 1.79-4.275v-.003a5.96 5.96 0 0 0-1.78-4.277 6.061 6.061 0 0 0-4.301-1.772 6.09 6.09 0 0 0-4.319 1.783l-.719.715-.76.755-.758-.755L12 3.507A6.07 6.07 0 0 0 7.687 1.73 6.051 6.051 0 0 0 3.38 3.502a5.955 5.955 0 0 0-1.774 4.276Z" />
                                </svg>
                            </button>
                            {
                                !comboSrv &&
                                <div className="offer-strip">
                                    FLAT 50% OFF
                                </div>
                            }
                        </>
                    }
                </div>
                <div className="pr-det-wrap">
                    <div className="tp">
                        <h3>{data?.name || "test"}</h3>
                        <div className="rt">
                            <Image src={ratingStar} alt="" />
                            <span>4.5 (1k+)</span>
                        </div>
                    </div>
                    <div className="pr-ics d-flex align-items-center gap-1 flex-wrap">
                        {data?.atHome && <Image src={homeSalon} alt="" width={35} height={35} />}
                        <Image src={unisex} alt="" width={35} height={35} />
                        <Image src={spa} alt="" width={35} height={35} />
                        {data?.atSaloon && <Image src={salon} alt="" width={35} height={35} />}
                        <Image src={comb} alt="" width={35} height={35} />
                    </div>
                    <p className="para">
                        {data?.description}
                    </p>
                    <div className="loc-wrap">
                        <div className="loc">
                            <Image src={locat} width={35} height={35} alt="" />
                            <span>Vijayanagar</span>
                        </div>
                        <span>25 min  |  2 km</span>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard