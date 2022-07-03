import React from 'react'

import SolanaHeader from '../Header/Solana/SolanaHeader'
import SolanaForm from '../../Component/Form/Solana'

export default function Solana() {
  
  return (
    <div className='solana-parent-container'>
        <SolanaHeader/>
        <div className='solana'>
            <SolanaForm />
        </div>
    </div>
  )
}
