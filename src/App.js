import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { GlobalState } from './Context/GlobalContext/GlobalState';
import { CountryState } from './Context/CountriesContext/CountryState';
import { NavBar } from './Components/NavBar/NavBar';
import { CountryPicker } from './Components/CountryPicker/CountryPicker';
import { Cards } from './Components/Cards/Cards';

function App() {
  useEffect(() => {
    // Initialize Materializ Js
    M.AutoInit();
  }, []);

  return (
    <GlobalState>
      <CountryState>
        <div className='App'>
          <NavBar />
          <CountryPicker />
          <Cards />
        </div>
      </CountryState>
    </GlobalState>
  );
}

export default App;
