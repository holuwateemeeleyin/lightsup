import React from 'react'
import Card from '../../Component/Solana/Card'
import Table from '../../Component/Solana/Table'
import SolanaHeader from '../Header/Solana/SolanaHeader'
import './Solana.css'

export default function Solana({solana}) {
  return (
    <div className='solana-parent-container'>
      <SolanaHeader/>
      <div className='solana'>
        <div className='solana-header'>
          Solana Trending NFT
        </div>
        <Card cards={solana}/>
        <div className='solana-table-header'>
          Upcomming Projects
        </div>
        <Table table={solana}/>
      </div>
    </div>
  )
}