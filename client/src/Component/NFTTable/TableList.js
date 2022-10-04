import React from 'react'
import moment from 'moment'
import { FaChrome, FaDiscord } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function TableList({ item }) {
    return (
        <tbody>
            <tr>
                <td>
                    <img src={item.image} alt='NFT' />
                </td>
                <td>{item.name}</td>
                <td className='table-price'>{item.price}</td>
                <td>{item.supply}</td>
                <td> {moment(item.date).utc().format('MMMM Do YYYY, h:mm:ss')}</td>
                <td className='table-icon'>
                    <Link to='#'><FaChrome fontSize={22} /></Link>
                    <Link to='#' className='discord'>
                        <FaDiscord fontSize={22} />
                    </Link>
                    <Link to='#' className='twitter'>
                        <BsTwitter fontSize={22} />
                    </Link>
                </td>
                <td> Description </td>
            </tr>
        </tbody>
    )
}
