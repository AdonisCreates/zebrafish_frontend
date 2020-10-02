import React from 'react'


const UserCoin = (props) => (
    <table>
        <thead>
            <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>What would you like to do with your coins?</th>
            </tr>
        </thead>
        <tbody>
            {props.coins.length > 0 ? (
                props.coins.map((coin)=> (
                    <tr key={coin.id}>
                        <td>{coin.name}</td>
                        <td>{coin.price}</td>
                        <td>
                            <button className="button-edit">Edit</button>
                            <button className="button-delete">Delete</button>
                        </td>
                    </tr> 
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No Coins</td>
                </tr>
            )}
        </tbody>
        </table>
)
export default UserCoin


