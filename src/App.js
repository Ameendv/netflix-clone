import React from 'react'
import Navbar from './Components/NavBar/NavBar' 

import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy} from './urls'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <RowPost url={originals} title="Netflix originals" />
        <RowPost url={action} title="Action Movies" isSmall/>
        <RowPost url={comedy} title="Comedy Movies" isSmall/>

    </div>
  );
} 

export default App;
