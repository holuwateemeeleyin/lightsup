import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './Pages/Home'
import Solana from './Pages/Solana'
import Eth from './Pages/Eth'
import './App.css'
import Loader from './Pages/Loader'
import SolanaForm from './Pages/Form/Solana'
import Login from './Pages/Admin'

export default function RoutesPath() {
  const [loading, setLoading] = useState(true)
  const [solana, setSolana] = useState()

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/get-nfts`)
      .then((res) => {
        setSolana(res.data)
        console.log(res.data)
      })
      .catch((err) => console.error(err))
    setLoading(false)
  }, [])


  // const filteredCoins = coins.filter((coin) =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  if (loading) {
    return <Loader/>
  }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/solana' element={<Solana solana={solana} /> } />
      <Route exact path='/eth' element={<Eth /> } />
      <Route exact path='/add-solana' element={<SolanaForm/>} />
      <Route exact path='/login' element={<Login/>}/>
    </Routes>
  )
}
