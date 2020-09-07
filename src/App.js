import React from 'react';
import './App.css';
import { Button,Card } from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';


function App() {
  return (
    <div className="App">
      <h2>React Bootstrap</h2>
      <Header></Header>
      <TopHeadline></TopHeadline>
      
    </div>
  );
}

export default App;
