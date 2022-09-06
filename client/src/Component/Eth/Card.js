import React from 'react'
import moment from 'moment'
import { FaChrome, FaDiscord } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Card({ cards }) {
    const settings = {
        arrows:false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
      
    return (
        <div className='solana-card-container sticky'>
            <Slider {...settings}>
                {
                cards ? cards.map(card => (
                    card.promote && (
                        <div className='solana-card' key={card._id}>
                            <img src={`/ethUploads/${card.ethImage}`} alt='...' width="100%" />
                            <h6>{card.name}</h6>
                            <div className='price-supply'>
                                <div className='price'>Price- {card.price} </div>
                                <div className='supply'>Supply- {card.supply} </div>
                            </div>
                            <div className='date'>
                                {moment(card.date).utc().format('MMMM Do YYYY, h:mm:ss')}
                            </div>
                            <div className='social-icons'>
                                <Link to='#'><FaChrome color='#fff' fontSize='12' /></Link>
                                <Link to='#' className='discord'>
                                    <FaDiscord color='#fff' size='12' />
                                </Link>
                                <Link to='#' className='twitter'>
                                    <BsTwitter color='#fff' size='12'/>
                                </Link>
                            </div>
                        </div>
                        
                    )
                )) : null
            }
            </Slider>
            
        </div>
    )
}
{/* <div className='solana-card' key={card._id}>
                            <img src={`/ethUploads/${card.ethImage}`} alt='...' width="100%" />
                            <h6>{card.name}</h6>
                            <div className='price-supply'>
                                <div className='price'>Price- {card.price} </div>
                                <div className='supply'>Supply- {card.supply} </div>
                            </div>
                            <div className='date'>
                                {moment(card.date).utc().format('MMMM Do YYYY, h:mm:ss')}
                            </div>
                            <div className='social-icons'>
                                <Link to='#'><FaChrome color='palevioletred' fontSize={20} /></Link>
                                <Link to='#' className='discord'>
                                    <FaDiscord color='palevioletred' fontSize={20} />
                                </Link>
                                <Link to='#' className='twitter'>
                                    <BsTwitter color='palevioletred' />
                                </Link>
                            </div>
                        </div> */}