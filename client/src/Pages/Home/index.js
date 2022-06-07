import React from 'react'
import Solana from '../../Assets/solana.png'
import './Home.css'
import Eth from '../../Assets/eth.png'
import { Link } from 'react-router-dom'
import HomeMobile from './HomeMobile'

export default function Home() {
    return (
        <div className='home_container-parent'>
            <HomeMobile/>
            <div className='desktop-view'>
            <div className='home_container'>
                <div className='solana-container-parent'>
                    <div className="solana-container">
                        <div className='home-logo'>
                            Lights Up
                        </div>
                        <div className='solanaImg hide-mobile'>
                            <img src={Solana} alt={Solana} width='80%' />
                            <Link to='/solana'>
                                <span className="gradient-text">Solana NFT</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='eth_container-parent'>
                    <div className='eth_container'>
                        <div className='eth-img hide-mobile'>
                            <img src={Eth} alt={Eth} />
                            <Link to='/eth'>
                                <span className="gradient-text">ETH NFT</span>
                            </Link>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
