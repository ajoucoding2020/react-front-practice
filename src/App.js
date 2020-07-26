import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './RouterApp';
//import logo from './logo.svg';
//import { sum as add, multiple } from './Math'
//import Header from './components/Header';
import './App.css';

function App() {
  // const sum = 'SUM!';
  // const cityName = "Seoul";

  // console.log(sum);
  // console.log(add);
  // console.log(multiple);

  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;
