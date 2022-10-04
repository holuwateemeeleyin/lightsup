import React from 'react'
import './Card.css'
import moment from 'moment'
import { FaChrome, FaDiscord } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function Card({ card }) {
  
  return (
    <div className='nft-card'>
      <img src={card.image} alt={card.name} width="100%" />
      <h6>{card.name}</h6>
      <div className='price-supply'>
        <div className='price'>Price- {card.price} </div>
        <div className='supply'>Supply- {card.supply} </div>
      </div>
      <div className='date'>
        {moment(card.date).utc().format('MMMM Do YYYY, h:mm:ss')}
      </div>
      <div className='social-icons'>
        <Link to='#'><FaChrome color='#fff' /></Link>
        <Link to='#' className='discord'>
          <FaDiscord color='#fff' />
        </Link>
        <Link to='#' className='twitter'>
          <BsTwitter color='#fff' />
        </Link>
      </div>
    </div>
  )
}
