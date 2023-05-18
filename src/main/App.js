import './App.scss';
import React from 'react';
import Routes from './Routes';
import Nav from '../components/Nav';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
 
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <div className='container mb-4'>
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
