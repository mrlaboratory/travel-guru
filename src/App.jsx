import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div className='main-bg'>
      <div className='bg-layer'>
        <div className='container mx-auto'>
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>

    </div>
  );
};

export default App;