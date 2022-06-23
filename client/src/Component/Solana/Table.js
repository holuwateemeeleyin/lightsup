import React from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import './Solana.css'
export default function SolanaTable({table}) {
  console.log('table', table);
  return (
    <div>
      <Table striped hover variant="dark" responsive className='table'>
        <thead>
          <tr>
            <th>Info</th>
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
              !item.promote ? 
              <tbody key={item._id}>
                <tr>
                <td className='info'>
                    {/* <div><img src={item.projectImage} alt='NFT'/></div> */}
                    {/* <p className='info-text'> {item.name} </p> */}
                    <img src={item.projectImage} alt='NFT'/>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.supply}</td>
                  <td> {moment(item.date).utc().format('MMMM Do YYYY, h:mm:ss')}</td>
                  <td>Links</td>
                  <td> Description </td>
                </tr>
              </tbody>
              : null
            ))
            : null
          }
      </Table>
    </div>
  )
}