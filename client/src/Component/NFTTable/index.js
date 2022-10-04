import React from 'react'
import Table from 'react-bootstrap/Table'
import TableList from './TableList'
import './Table.css'

export default function NFTTable({ table }) {
  return (
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
        table ? table.map(item => (
            !item.promote && (
                <TableList item={item} key={item._id}/>
            )
        )) : 'Loading...'
      }
    </Table>
  )
}
