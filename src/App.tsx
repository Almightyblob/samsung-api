import React from 'react';
import './App.css';
import DisplayResults from './components/DisplayResults'
import MainMenu from './components/MainMenu';

function App() {

  return (
    <div className='w-full h-full'>
      <MainMenu />
      <DisplayResults />
    </div>
  );
}

export default App;
