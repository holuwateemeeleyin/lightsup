import React from 'react'
import './HomeMobile.css'
import Zoom from 'react-reveal/Zoom';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si'
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom'

export default function HomeMobile() {
    return (
        <div className='mobile-home'>
            <div className='mobile-header'>
                .Lights Up
            </div>
            <div className='mobile-body'>
                <Link to='/solana' className='mobile-solana'>
                    <Zoom left>Solana</Zoom>
                </Link>
                <Link to='/eth' className='mobile-eth'>
                    <Zoom right cascade>
                        Etherum
                    </Zoom>
                </Link>

                <Slide left cascade>
                    <div className='mobile-icons'>
                        <SiFacebook size={25} />
                        <SiTwitter size={25} />
                        <SiInstagram size={25} />
                    </div>
                </Slide>
            </div>
        </div>
    )
}
