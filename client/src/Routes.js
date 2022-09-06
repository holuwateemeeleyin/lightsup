import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './Pages/Home'
import Solana from './Pages/Solana'
import Eth from './Pages/Eth'
import './App.css'
import Loader from './Pages/Loader'
import SolanaForm from './Pages/Form/Solana'
import EthForm from './Pages/Form/Eth'
// import Login from './Pages/Admin'
import AdminHome from './Pages/Admin/Home'

export default function RoutesPath() {
  const [loading, setLoading] = useState(true)
  const [solana, setSolana] = useState([])
  const [eth, setEth] = useState([])
  const [search, setSearch] = useState('')

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

  useEffect(()=>{
    setLoading(true)
    axios.get(`/api/get-ethNFTs`)
      .then((res)=> {
        setEth(res.data)
      })
      .catch((err)=> console.error(err))
      setLoading(false)
  }, [])

  const handleSearchInput =(e)=> {
    setSearch(e.target.value)
  }

  const filteredSolana = solana.filter((sol) =>
    sol.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredEth = eth.filter((et)=> (
    et.name.toLowerCase().includes(search.toLowerCase())
  ))

  // const deleteSolana = (id)=> {
  //   axios.delete(`/api/delete-nft`, id)
  //   .then(response =>
  //     setSolana([
  //       ...solana.filter((sol)=>{
  //         return sol._id !== id
  //       })
  //     ])
  //     )
  // }
  const deleteSolana = (id) => {
    axios.delete(`/api/delete-nft/${id}`)
    .then(res => {
      alert(res.data.status)
    })
  }
//   deleteTodoItem = (id) => {
//     this.setState(prevState => ({
//         todos: prevState.todos.filter((todo) => {
//             return todo.id !== id
//         })
//     }))
//     // console.log('deleted', id);
// }

  if (loading) {
    return <Loader/>
  }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/solana' element={<Solana 
        solana={solana} 
        filtered={filteredSolana}
        search={search}
        handleSearch={handleSearchInput}
      /> } />
      <Route exact path='/eth' element={<Eth 
        eth={eth}
        filtered={filteredEth}
        search={search}
        handleSearch={handleSearchInput}
      /> } />
      <Route exact path='/add-solana' element={<SolanaForm/>} />
      <Route exact path='/add-eth' element={<EthForm/>} />
      {/* <Route exact path='/login' element={<Login/>}/> */}
      <Route exact path='/admin' element={<AdminHome
        solana={solana}
        deleteSol={deleteSolana}
      />}/>
    </Routes>
  )
}
