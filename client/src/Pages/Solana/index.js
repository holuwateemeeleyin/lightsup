import React from 'react'
import Card from '../../Component/Solana/Card'
import Table from '../../Component/Solana/Table'
import SolanaHeader from '../Header/Solana/SolanaHeader'
import './Solana.css'

export default function Solana({solana, filtered, search, handleSearch}) {
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
        <div className='search'>
          <input
            type='text'
            placeholder='Search...'
            value={search}
            onChange={handleSearch}
            className='search-input'
          />
        </div>
        <Table table={filtered}/>
      </div>
    </div>
  )
}