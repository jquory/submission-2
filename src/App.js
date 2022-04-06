import React from 'react';
import './App.css'
import Search from './Components/Search';
import { useSelector } from 'react-redux';
import { Component } from 'react';
import Login from './Components/Login';

function App() {
  
  const accessToken = useSelector((state) => state.token.token)
  return (
    
    <div className='wrapper'>

      {accessToken? <Search /> : <Login />}

      
    </div>
  );
}

export default App;
