import React from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import { FaChrome, FaDiscord } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function EthTable({table}) {
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
                    <img src={item.ethImage} alt='NFT'/>
                  </td>
                  <td valign='middle'>{item.name}</td>
                  <td className='table-price' valign='middle'>{item.price}</td>
                  <td valign='middle'>{item.supply}</td>
                  <td valign='middle'> {moment(item.date).utc().format('MMMM Do YYYY, h:mm:ss')}</td>
                  <td className='table-icon'>
                  <Link to='#'><FaChrome color='#fff' fontSize={15}/></Link>
                  <Link to='#' className='discord'>
                    <FaDiscord color='#fff' fontSize={15}/>
                  </Link>
                  <a target="_blank" href={item.twitter}><BsTwitter size={15} color='#fff'/></a>
                  </td>
                  <td valign='middle'> {item.description} </td>
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
