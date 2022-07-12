import React from 'react'

import EthHeader from '../Header/Eth/EthHeader'
import EthForm from '../../Component/Form/Eth'

export default function Solana() {
  
  return (
    <div className='solana-parent-container'>
        <EthHeader/>
        <div className='solana'>
            <EthForm />
        </div>
    </div>
  )
}
