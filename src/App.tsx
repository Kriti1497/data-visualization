import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlavanoidsStatsTable from './renderTable';
import GammaStatsTable from './renderGammaTable';

function App() {
  return (
    <div className="App">
      <div className="table-div">
        <h2>Flavanoids Stats Table</h2>
      <FlavanoidsStatsTable></FlavanoidsStatsTable>
      </div>
      <div  className="table-div">
      <h2>Gamma Stats Table</h2>
      <GammaStatsTable></GammaStatsTable>
      </div>
    </div>
  );
}

export default App;
