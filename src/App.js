import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DecimalConverter from './components/DecimalConverter/DecimalConverter';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards/>
      <DecimalConverter/>
      <Footer/>
    </div>
  );
}

export default App;
