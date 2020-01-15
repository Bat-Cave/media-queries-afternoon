import React from 'react';
import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Services from './Components/Services';

function App() {
  return (
    <div className='body'>
      <Header />
      <Welcome />
      <Services />
    </div>
  );
}

export default App;
