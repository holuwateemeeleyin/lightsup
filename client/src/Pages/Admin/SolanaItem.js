import React from 'react'

export default function SolanaItem({ sol, deleteButton }) {
    console.log(sol);
    return (
        <tr>
            <td>
                <button onClick={()=>deleteButton(sol._id)}>
                    X
                </button>
            </td>
            <td className='info'>
                <img src={sol.image} alt='NFT' />
            </td>
            <td>{sol.name}</td>
            <td className='table-price'>{sol.price}</td>
            <td>{sol.supply}</td>
            <td>time</td>
            <td className='table-icon'>
                Link
            </td>
            <td> Description </td>
        </tr>
    )
}
