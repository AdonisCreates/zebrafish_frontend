import React from 'react';
import UserCoin from './coins/UserCoin.js'

function App() {
  return (
    <div className="Navbar">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Create Coins</h2>
        </div>
        <h1>Browse Coins</h1>
        <UserCoin />
      </div>
    </div>
  );
}

export default App;
