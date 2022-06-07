import React from 'react'
import Card from '../../Component/Solana/Card'
import SolanaHeader from '../Header/Solana/SolanaHeader'
import './Solana.css'

export default function Solana(props) {
  return (
    <div className='solana-parent-container'>
      <SolanaHeader/>
      <div className='solana'>
        <div className='solana-header'>
          Solana Trending NFT
        </div>
        <Card/>
      </div>
    </div>
  )
}

// import React, { useEffect } from 'react'
// // import { connect } from 'react-redux'
// // import { getNFTProjects } from '../../Component/Action'
// // import { FaChrome, FaDiscord } from 'react-icons/fa'
// // import { BsTwitter } from 'react-icons/bs'
// import './Solana.css'
// import Header from '../../Component/Header/Header'
// // import moment from 'moment'
// // import Table from 'react-bootstrap/Table'

// function Solana() {

//   return (
//     <div className='listNFT_container-parent'>
//       <Header/>
//     </div>
//   )
// }

// export default connect(mapStateToProps)(Home)


{/* <div className='listNFT_container'>
        <div className='listNFT_header'>
          Trending NFTs 
        </div>
        <div className='card-container'>
          {
            allNFTs ?
              allNFTs.map(nft => (
                nft.promote ? 
                <div className='card' key={nft._id}>
                  <img src={`/uploads/${nft.projectImage}`} alt='...' width="100%" />
                  <div className='card_project-header'>
                    {nft.name}
                  </div>
                  <div className='card-price-supply'>
                    <div className='card-price'>Price- {nft.price} </div>
                    <div className='card-supply'>Supply- {nft.supply} </div>
                  </div>
                  <div className='drop-date'>
                    {moment(nft.date).utc().format('MMMM Do YYYY, h:mm:ss')}
                  </div>
                  <div className='social-links'>
                    <div className='chrome-link'>
                      <a href='#'><FaChrome color='palevioletred' /></a>
                    </div>
                    <div className='discord'>
                      <a href='#' className='discord-link'>
                        <FaDiscord color='palevioletred'/>
                        <div className='discord-text'> 4.4K</div>
                      </a>
                    </div>
                    <div className='twitter'>
                      <a href='#' className='twitter-link'>
                        <BsTwitter color='palevioletred' />
                        <div className='twitter-text'> 12K </div>
                      </a>
                    </div>
                  </div>
                </div>
                :null
                
              )) : null
          }
        </div>
      </div>
      <div>
        <div className='listNFT_header'>
          Upcomming Projects
        </div>
        <table>
          <thead>
            <tr>
              <th>Info</th>
              <th>Price</th>
              <th>Count</th>
              <th>Drop</th>
              <th>Links</th>
            </tr>
          </thead>
          {
            allNFTs ?
              allNFTs.map(nft => (
                !nft.promote ? <tbody key={nft._id}>
                <tr>
                  <td className='info'>
                    <img src={nft.projectImage} alt='...' width='5%' />
                    <span className='info-text'> {nft.name} </span>
                  </td>
                  <td>{nft.price}</td>
                  <td>{nft.supply}</td>
                  <td> {moment(nft.date).utc().format('MMMM Do YYYY, h:mm:ss')}</td>
                  <td>Links</td>
                </tr>
              </tbody> : null
                
              ))
              : null
          }
        </table>
      </div> */}