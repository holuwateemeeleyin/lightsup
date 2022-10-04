import React from 'react'
import EthHeader from '../Header/Eth/EthHeader'
import Slider from "react-slick";
import Card from '../../Component/Card/Card';
import NFTTable from '../../Component/NFTTable';

export default function Eth({eth, filtered, search, handleSearch}) {

  const settings = {
    arrows: false,
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
    <div className='solana-parent-container'>
      <EthHeader/>
      <div className='solana'>
        <div className='solana-header'>
          Solana Trending NFT
        </div>
        <div className='card-container sticky'>
          <Slider {...settings}>
            {
              eth ? eth.map(et => (
                et.promote && (
                  <Card card={et} key={et._id}/>
                )
              )) :'card loading...'
            }
          </Slider>
        </div>
        <div className='solana-table-header'>
          Upcomming Projects
        </div>

        <div className='search'>
          <input
            type="text"
            placeholder='Search...'
            value={search}
            onChange={handleSearch}
            className='search-input'
          />
        </div>

        <NFTTable table={filtered}/>
        {/* <Table table={filtered}/> */}
      </div>
    </div>
  )
}
