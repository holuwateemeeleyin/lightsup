import React from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import { FaChrome, FaDiscord } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SolanaItem from './SolanaItem'

export default function Home({solana, deleteSol}) {
    return (
        <div className='solana-parent-container'>
            <div className='solana'>
                <div className='solana-table-header'>
                    Solana NFTs
                </div>
                <div>
                    <Table striped hover variant="dark" responsive className='table'>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Info</th>
                                <th> </th>
                                <th>Price</th>
                                <th>Count</th>
                                <th>Drop</th>
                                <th>Links</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                solana.map((sol)=>(
                                    <SolanaItem
                                        key={sol._id}
                                        sol={sol}
                                        deleteButton={deleteSol}
                                    />
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
