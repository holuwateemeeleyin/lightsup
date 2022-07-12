import React from 'react'
import EthHeader from '../Header/Eth/EthHeader'
import Card from '../../Component/Eth/Card'
import Table from '../../Component/Eth/Table'
export default function Eth({eth, filtered, search, handleSearch}) {

  return (
    <div className='solana-parent-container'>
      <EthHeader/>
      <div className='solana'>
        <div className='solana-header'>
          Solana Trending NFT
        </div>
        <Card cards={eth}/>
        <div className='solana-table-header'>
          Upcomming Projects
        </div>
        <div className='search'>
          <input
            type="text"
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
