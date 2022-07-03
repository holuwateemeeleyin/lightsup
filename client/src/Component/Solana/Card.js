import React from 'react'
// import './Solana.css'
import moment from 'moment'
import { FaChrome, FaDiscord } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Loader from '../../Pages/Loader'
export default function Card(props) {
  const { cards } = props
  // console.log(card);

  return (
    <div className="solana-card-container">
      {
        cards ? cards.map(card => (
          card.promote  && (
            <div className='solana-card' key={card._id}>
              <img src={`/uploads/${card.projectImage}`} alt='...' width="100%" />
              <h6>{card.name} </h6>
              <div className='price-supply'>
                <div className='price'>Price- {card.price} </div>
                <div className='supply'>Supply- {card.supply} </div>
              </div>
              <div className='date'>
                {moment(card.date).utc().format('MMMM Do YYYY, h:mm:ss')}
              </div>
              <div className='social-icons'>
                  <Link to='#'><FaChrome color='palevioletred' fontSize={20}/></Link>
                  <Link to='#' className='discord'>
                    <FaDiscord color='palevioletred' fontSize={20}/>
                  </Link>
                  <Link to='#' className='twitter'>
                    <BsTwitter color='palevioletred' />
                  </Link>
              </div>
            </div>
          )
        ))
          : <Loader/>
      }
    </div>
  )
}