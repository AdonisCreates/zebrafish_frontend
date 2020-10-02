import React, { useState } from 'react';
import UserCoin from './coins/UserCoin.js'

function App() {
  const usersCoin = [
    { id: 1, name: 'Bitcoin', price: '10,421.12'},
    { id: 1, name: 'Litecoin', price: '104'},
    { id: 1, name: 'Dash', price: '1321.12'},
    { id: 1, name: 'Etherum', price: '421.12'},
    { id: 1, name: 'Dodgecoin', price: '0.121'},
  ]

  const [coins, setCoins] = useState(usersCoin)

  return (
    <div className="Navbar">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Create Coins</h2>
        </div>
        <h1>Browse Coins</h1>
        <UserCoin coins={coins}/>
      </div>
    </div>
  );
}

export default App;
