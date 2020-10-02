import React from 'react'


const UserCoin = () => (
    <table>
        <thead>
            <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>What would you like to do with your coins?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Coin name</td>
                <td>Price</td>
                <td>
                    <button className="button-edit">Edit Coin?</button>
                    <button className="button-delete">Delete Coin?</button>
                </td>
            </tr>
        </tbody>
    </table>
)

export default UserCoin