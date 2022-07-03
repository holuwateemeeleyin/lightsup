import React from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import { FaChrome, FaDiscord } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import './Solana.css'
import { Link } from 'react-router-dom'
export default function SolanaTable({table}) {
  console.log('table', table);
  return (
    <div>
      <Table striped hover variant="dark" responsive className='table'>
        <thead>
          <tr>
            <th>Info</th>
            <th> </th>
            <th>Price</th>
            <th>Count</th>
            <th>Drop</th>
            <th>Links</th>
            <th>Description</th>
          </tr>
        </thead>
        {
            table ? 
            table.map(item => (
              !item.promote && (
                <tbody key={item._id}>
                <tr>
                  <td className='info'>
                    <img src={item.projectImage} alt='NFT'/>
                  </td>
                  <td>{item.name}</td>
                  <td className='table-price'>{item.price}</td>
                  <td>{item.supply}</td>
                  <td> {moment(item.date).utc().format('MMMM Do YYYY, h:mm:ss')}</td>
                  <td className='social-icons'>
                  <Link to='#'><FaChrome color='palevioletred' fontSize={12}/></Link>
                  <Link to='#' className='discord'>
                    <FaDiscord color='palevioletred' fontSize={12}/>
                  </Link>
                  <Link to='#' className='twitter'>
                    <BsTwitter color='palevioletred' />
                  </Link>
                  </td>
                  <td> Description </td>
                </tr>
              </tbody>
              )
            ))
            : null
          }
      </Table>
    </div>
  )
}