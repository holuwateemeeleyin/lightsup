import React from 'react'
import SolanaHeader from '../Header/Solana/SolanaHeader'
export default function Eth() {
  return (
    <div className='solana-parent-container'>
      <SolanaHeader/>
      <div className='solana'>
        <div className='solana-header'>
          Solana Trending NFT
        </div>
        {/* <Card cards={solana}/> */}
        <div className='solana-table-header'>
          Upcomming Projects
        </div>
        {/* <Table table={solana}/> */}
      </div>
    </div>
  )
}
